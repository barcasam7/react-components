import axios from "axios";
import { useState } from "react";
import Skeleton from "./Skeleton";

type profile = {
   id: number;
   name: string;
   followers: number;
   following: number;
   avatar_url: string;
   bio: string;
   public_repos: number;
};

type repo = {
   name: string;
   html_url: string;
};

const GithubProfile = () => {
   const [user, setUser] = useState<profile | null>(null);
   const [search, setSearch] = useState<string>("");
   const [repos, setRepos] = useState<repo[]>([]);
   const [userNotFound, setUserNotFound] = useState<boolean>(false);
   const [isLoading, setLoading] = useState<boolean>(false);

   const searchProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      setSearch(target.value);
   };

   const getUsers = (event: React.FormEvent<HTMLFormElement>): void => {
      setLoading(true);
      event.preventDefault();
      axios
         .get(`https://api.github.com/users/${search}`)
         .then((data) => {
            setUser(data.data);
            getRepos();
            setUserNotFound(false);
            setLoading(false);
         })
         .catch(() => {
            setUserNotFound(true);
            setLoading(false);
         });
   };

   const getRepos = (): void => {
      axios
         .get(`https://api.github.com/users/${search}/repos`)
         .then((data) => setRepos(data.data.slice(0, 10)))
         .catch(() => setRepos([]));
   };

   return (
      <>
         <form className="user-form" id="form" onSubmit={(e) => getUsers(e)}>
            <input type="text" id="search" placeholder="Search a Github User" onChange={(e) => searchProfile(e)} />
         </form>
         <main id="main">
            {isLoading && <Skeleton rows={3} />}
            {user !== null && !userNotFound && !isLoading && (
               <div className="card">
                  <div>
                     <img src={user.avatar_url} alt="" className="avatar" />
                  </div>
                  <div className="user-info">
                     <h2>{user.name}</h2>
                     <p>{user.bio}</p>
                     <ul>
                        <li>
                           {user.followers} <strong>Followers</strong>
                        </li>
                        <li>
                           {user.following} <strong>Following</strong>
                        </li>
                        <li>
                           {user.public_repos} <strong>Repos</strong>
                        </li>
                     </ul>
                     {repos.length > 0 && (
                        <div id="repos">
                           {repos.map((repo) => (
                              <a target="_blank" href={repo.html_url} className="repo">
                                 {repo.name}
                              </a>
                           ))}
                        </div>
                     )}
                  </div>
               </div>
            )}
            {userNotFound && !isLoading && <p>No user found for that username</p>}
         </main>
      </>
   );
};
export default GithubProfile;
