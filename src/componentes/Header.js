import React from 'react';

const Header = ({ userData }) => {
  return (
    <header className="mb-4">
      <div className="d-flex align-items-center">
        <img src={userData.url} alt={userData.name} className="rounded-circle mr-3" style={{ width: '50px', height: '50px' }} />
        <div>
          <h2 className="m-0">{userData.username}</h2>
          <p className="m-0">{userData.description}</p>
        </div>
      </div>
      <nav>
        <ul className="list-unstyled d-flex mt-3 mb-0">
          <li className="mr-3">Home</li>
          <li className="mr-3">Profile</li>
          <li>Settings</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
