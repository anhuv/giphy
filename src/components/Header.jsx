import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://www.freelogovectors.net/svg08/giphy-logo.svg"
        alt=""
        srcSet=""
      />
      <dir className="menu">
        <div className="button-wrapper">
          <h2>Reactions</h2>
        </div>
        <div className="button-wrapper">
          <h2>Entertainment</h2>
        </div>
        <div className="button-wrapper">
          <h2>Sports</h2>
        </div>
        <div className="button-wrapper">
          <h2>Artist</h2>
        </div>
      </dir>
    </div>
  );
};

export default Header;
