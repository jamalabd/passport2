import React, {useState} from 'react';
import './App.css';
function App() {
  
  return ( 
    <div className="App">
      <header className="App-header">
        <form>
          <label>
            Email:
          <input type='text' name='email'/>
          </label>
          <label>
            Name: 
          <input type='text' name='name'/>
          </label>
          <label>
            Password: 
          <input type='text' name='password'/>
          </label>
          <label>
            Submit: 
          <input type='submit' name='submit'/>
          </label>

        </form>
              </header>
    </div>
  );
}

export default App;
