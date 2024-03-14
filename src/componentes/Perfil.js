import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              <h5 className="card-title"> Username:
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
              <p className="card-text"> Name:
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
              <p className="card-text"> Description:
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
              <p className="card-text"> URL:
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
                    Guardar
                  </button>
                  <button className="btn btn-secondary" onClick={() => setEditing(false)}>
                    Cancelar
                  </button>
                </>
              ) : (
                <button className="btn btn-primary" onClick={() => setEditing(true)}>
                  Editar
                </button>
              )}
              <Link to="/" className="btn btn-primary ml-2">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
