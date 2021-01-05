import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');
  const hadleSubmit = (event) => {
    console.log('sumbited');

    event.preventDefault();
  };
  const handleOnChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={hadleSubmit}>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={state.email || ''}
              onChange={handleOnChange}
            />
          </label>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={state.name || ''}
              onChange={handleOnChange}
            />
          </label>
          <label>
            Password:
            <input
              type='text'
              name='password'
              value={state.password || ''}
              onChange={handleOnChange}
            />
          </label>
          <label>
            Submit:
            <input type='submit' name='submit' />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
