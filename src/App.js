import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import asyncComponent from './utils/asyncComponent'
const Index = asyncComponent(()=>import('./pages/Index/Index'))
const Song = asyncComponent(()=>import('./pages/Song/Song'))
const Detail = asyncComponent(()=>import('./pages/Detail/Detail'))
function App() {
  return (
    <div className="App">
     <Switch>
       <Route path='/index' component={Index}></Route>
       <Route path='/song' component={Song}></Route>
       <Route path='/detail' component={Detail}></Route>
       <Redirect to="/index"></Redirect>
     </Switch>
    </div>
  );
}

export default App;
