import React from "react";

const Header = () => {
  return (
    <div className="header">
      <i class="fa-solid fa-bars icon"></i>
      <div className="logodiv">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png"
       alt="my"/>
      <h4>Keep</h4>
      </div>
      <div>
        <input className="search-input" type="search" placeholder="Search here..."/>
      </div>
      <i class="fa-solid fa-rotate-right icon"></i>
      <i class="fa-solid fa-equals icon"></i>
      <i class="fa-solid fa-gear icon"></i>
      <i class="fa-solid fa-user-tie icon"></i>
    </div>
  );
};

export default Header;
