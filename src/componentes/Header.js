import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Header = ({ userData, setProfileUser }) => {
  return (
    <header className="mb-4">
      <div className="row align-items-center">
        <div className="col-md-2 text-center">
        <Link to="/perfil" onClick={() => setProfileUser(userData)}>
            <img src={userData.image} alt={userData.name} className="rounded-circle" style={{ width: '100px', height: '100px' }} />
          </Link>
        </div>
        <div className="col-md-10">
          <h2 className="mb-1">{userData.username}</h2>
          <p className="mb-1">{userData.name}</p>
          <p className="mb-1">{userData.description}</p>
          <p className="mb-1"><FormattedMessage id="header.url" />: {userData.url}</p>
          <p className="mb-1"><FormattedMessage id="header.posts_number" />: {userData.numPost}</p>
          <p className="mb-1"><FormattedMessage id="header.quantity" />: {userData.cant}</p>
          <p className="mb-1"><FormattedMessage id="header.following_quantity" />: {userData.cantSeguidas}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;