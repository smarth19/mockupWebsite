import React, { useReducer, useState, useEffect } from 'react'
import GroupContent from './components/groupContent/GroupContent';
import GroupHeader from './components/groupHeader/GroupHeader';
import Navbar from "./components/navbar/Navbar";
import {reducer} from './reducers/App/reducer'
import {initialState} from './reducers/App/state'
import AppActions from './reducers/App/actions'
import context from './reducers/App/context'
import Registeration from './components/registeration/Registeration';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actionsClass = new AppActions(dispatch)
  const [actions] = useState(actionsClass)

  useEffect(() => {
    if(state.openModal) { document.body.style.overflow = "hidden"}
    else {document.body.style.overflow = "initial"}
  }, [state.openModal])

  return (
    <context.Provider value={{appState: state, appActions: actions}}>
      <div className="App">
        {state.openModal && <Registeration/>}
        <Navbar/>
        <div style={{position: 'relative'}}>
          <GroupHeader/>
          <GroupContent/>
        </div>
      </div>
    </context.Provider>
  );
}

export default App;
