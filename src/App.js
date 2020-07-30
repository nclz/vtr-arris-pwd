import React from 'react';
import genPassOfDay from 'arrispwod';

function password(seed = 'vtr2014') {
  let date = new Date();
  return genPassOfDay(date, seed);
}

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>Vtr Arris Password</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>Dirigete a https://192.168.0.1</li>
            <li>Utiliza el usuario <kbd>technician</kbd></li>
            <li>Y la siguiente contraseña</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>
            <kbd>
              {password()}
            </kbd>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
