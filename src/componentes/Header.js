// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Header = ({ userData }) => {
  return (
    <header className="mb-4">
      <div className="d-flex align-items-center">
        <Link to="/perfil">
          <img src={userData.image} alt={userData.name} className="rounded-circle mr-3" style={{ width: '100px', height: '100px' }} />
        </Link>
        <div>
          <h2 className="m-0">{userData.username}</h2>
          <p className="m-0">{userData.name}</p>
          <p className="m-0">{userData.description}</p>
          <p className="m-0"><FormattedMessage id="header.url" />: {userData.url}</p>
          <p className="m-0"><FormattedMessage id="header.posts_number" />: {userData.numPost}</p>
          <p className="m-0"><FormattedMessage id="header.quantity" />: {userData.cant}</p>
          <p className="m-0"><FormattedMessage id="header.following_quantity" />: {userData.cantSeguidas}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
