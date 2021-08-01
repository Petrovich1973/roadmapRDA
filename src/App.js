import React, {useReducer} from 'react'
import {ContextApp, initializeApp, reducerApp} from "./reducerApp"
import './App.css';

import ListTasks from './ListTasks';

function App() {
  const [state, dispatch] = useReducer(reducerApp, initializeApp);
  return (
    <ContextApp.Provider value={{dispatch, state}}>
      <ListTasks/>
      </ContextApp.Provider>
  );
}

export default App;
