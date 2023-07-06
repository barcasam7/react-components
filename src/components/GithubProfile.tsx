import axios from "axios";
import { useState } from "react";

type profile = {
  id: number;
  name: string;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
  public_repos: number;
};

const GithubProfile = () => {
  const [user, setUser] = useState<profile | null>(null);
  const [search, setSearch] = useState<string>("");

  const searchProfile = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  };

  const getUsers = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${search}`)
      .then(data => setUser(data.data))
      .catch(error => setUser(null));
  };
  return (
    <>
      <form className="user-form" id="form" onSubmit={e => getUsers(e)}>
        <input
          type="text"
          id="search"
          placeholder="Search a Github User"
          onChange={e => searchProfile(e)}
        />
      </form>
      <main id="main">
        {user !== null && (
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
              <div id="repos">
                <a href="" className="repo">
                  Repo
                </a>
                <a href="" className="repo">
                  Repo
                </a>
                <a href="" className="repo">
                  Repo
                </a>
              </div>
            </div>
          </div>
        )}
        {user === null && <p>No user found for that username</p>}
      </main>
    </>
  );
};
export default GithubProfile;
