import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import userData from './Datos.json';

const Perfil = ({ setProfileUser = () => {} }) => {
  const [user, setUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setUser(userData[0]);
  }, []);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    setUser(editedUser);
    setEditing(false);

    const updatedData = [editedUser];

    localStorage.setItem('userData', JSON.stringify(updatedData));

    setProfileUser(editedUser);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              {user && user.image && (
                <img src={user.image} alt={user.name} className="rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />
              )}
              <h5 className="card-title">
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="username"
                    value={editedUser.username || ''}
                    onChange={handleChange}
                  />
                ) : (
                  user && user.username
                )}
              </h5>
              <p className="card-text">
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="name"
                    value={editedUser.name || ''}
                    onChange={handleChange}
                  />
                ) : (
                  user && user.name
                )}
              </p>
              <p className="card-text">
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="description"
                    value={editedUser.description || ''}
                    onChange={handleChange}
                  />
                ) : (
                  user && user.description
                )}
              </p>
              <p className="card-text">
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="url"
                    value={editedUser.url || ''}
                    onChange={handleChange}
                  />
                ) : (
                  user && user.url
                )}
              </p>
              {editing ? (
                <>
                  <button className="btn btn-primary mr-2" onClick={handleSave}>
                    <FormattedMessage id="perfil.save" defaultMessage="Save" />
                  </button>
                  <button className="btn btn-secondary" onClick={() => setEditing(false)}>
                    <FormattedMessage id="perfil.cancel" defaultMessage="Cancel" />
                  </button>
                </>
              ) : (
                <button className="btn btn-primary" onClick={() => setEditing(true)}>
                  <FormattedMessage id="perfil.edit" defaultMessage="Edit" />
                </button>
              )}
              <Link to="/" className="btn btn-primary ml-2">
                <FormattedMessage id="perfil.back_home" defaultMessage="Back to Home" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
