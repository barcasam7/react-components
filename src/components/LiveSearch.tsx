import axios from "axios";
import { useEffect, useState } from "react";

const LiveSearch = () => {
   type Location = {
      city: string;
      country: string;
   };
   type Image = {
      thumbnail: string;
   };

   type ID = {
      value: string;
   };

   type Name = {
      first: string;
      last: string;
   };

   type User = {
      name: Name;
      id: ID;
      picture: Image;
      location: Location;
   };

   const [users, setUsers] = useState<User[]>([]);
   const [search, setSearch] = useState<string>("");
   const [searchedUsers, setSearchUsers] = useState<User[]>([]);

   const getUsers = () => {
      axios
         .get("https://randomuser.me/api/?results=20")
         .then((data) => {
            setUsers(data.data.results);
            setSearchUsers(data.data.results);
         })
         .catch((e) => console.log(e));
   };

   useEffect(() => {
      getUsers();
   }, []);

   const searchUser = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch((event.target as HTMLInputElement).value);
      if (search === "") {
         return setUsers(users);
      }
      const searchUsers = users.filter((user: User) => {
         return (
            user.name.first.toLowerCase().includes(search.toLowerCase()) ||
            user.name.last.toLowerCase().includes(search.toLowerCase()) ||
            user.location.city.toLowerCase().includes(search.toLowerCase()) ||
            user.location.country.toLowerCase().includes(search.toLowerCase())
         );
      });
      setSearchUsers(searchUsers);
   };

   return (
      <div className="search-container">
         <header className="header">
            <h4 className="title">Live User Filter</h4>
            <small className="subtitle">Search by name and/or location</small>
            <input type="text" id="id" placeholder="Search" onChange={(e) => searchUser(e)} />
         </header>
         <ul id="result" className="user-list">
            {searchedUsers.map(({ name, picture, location, id }) => {
               return (
                  <li key={id.value}>
                     <img src={picture.thumbnail} alt="" />
                     <div className="user-info">
                        <h4>
                           {name.first} {name.last}
                        </h4>
                        <p>
                           {location.city}, {location.country}
                        </p>
                     </div>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};
export default LiveSearch;
