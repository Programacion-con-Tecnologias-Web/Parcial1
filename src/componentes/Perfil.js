import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import userData from './Datos.json';

const Perfil = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    setUser(userData[0]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    setUser(editedUser);
    setEditing(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <img src={user.image} alt={user.name} className="rounded-circle mr-3" style={{ width: '100px', height: '100px' }} />
            <div className="card-body">
              <h5 className="card-title">
                <FormattedMessage id="username" defaultMessage="Username" />:
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="username"
                    value={editedUser.username || user.username}
                    onChange={handleChange}
                  />
                ) : (
                  user.username
                )}
              </h5>
              <p className="card-text">
                <FormattedMessage id="name" defaultMessage="Name" />:
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="name"
                    value={editedUser.name || user.name}
                    onChange={handleChange}
                  />
                ) : (
                  user.name
                )}
              </p>
              <p className="card-text">
                <FormattedMessage id="description" defaultMessage="Description" />:
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="description"
                    value={editedUser.description || user.description}
                    onChange={handleChange}
                  />
                ) : (
                  user.description
                )}
              </p>
              <p className="card-text">
                <FormattedMessage id="url" defaultMessage="URL" />:
                {editing ? (
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="url"
                    value={editedUser.url || user.url}
                    onChange={handleChange}
                  />
                ) : (
                  user.url
                )}
              </p>
              {editing ? (
                <>
                  <button className="btn btn-primary mr-2" onClick={handleSave}>
                    <FormattedMessage id="save" defaultMessage="Save" />
                  </button>
                  <button className="btn btn-secondary" onClick={() => setEditing(false)}>
                    <FormattedMessage id="cancel" defaultMessage="Cancel" />
                  </button>
                </>
              ) : (
                <button className="btn btn-primary" onClick={() => setEditing(true)}>
                  <FormattedMessage id="edit" defaultMessage="Edit" />
                </button>
              )}
              <Link to="/" className="btn btn-primary ml-2">
                <FormattedMessage id="back_to_home" defaultMessage="Back to Home" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
