import React, { Component, useState } from 'react';
import StyledComponent from './StyledComponent';
import UserInfoInput from './UserInfoInput';
import UserInfoOutput from './UserInfoOutput';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [info, setInfo] = useState({name: '', age: 0, sex: '', agree: false});
  console.log(info);
  return (
    <Switch>
      <Route path='/output'>
        <UserInfoOutput info={info} />
      </Route>
      <Route path='/'>
        <UserInfoInput infoToAppJs={setInfo}/>
        <div>{info.name}{info.age}</div>
      </Route>
    </Switch>
    );
}

export default App;
