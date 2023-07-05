import { useState } from "react";

const GithubProfile = () => {
  return (
    <>
      <form className="user-form" id="form">
        <input type="text" id="search" placeholder="Search a Github User" />
      </form>
      <main id="main">
        <div className="card">
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/30.jpg"
              alt=""
              className="avatar"
            />
          </div>
          <div className="user-info">
            <h2>John Doe</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              ducimus?
            </p>
            <ul>
              <li>
                300 <strong>Followers</strong>
              </li>
              <li>
                300 <strong>Following</strong>
              </li>
              <li>
                3 <strong>Repos</strong>
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
      </main>
    </>
  );
};
export default GithubProfile;
