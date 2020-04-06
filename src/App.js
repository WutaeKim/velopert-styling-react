import React, { useState } from 'react';
import UserInfoInput from './UserInfoInput';
import UserInfoOutput from './UserInfoOutput';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [info, setInfo] = useState({name: '', age: '', sex: '', agree: false});
  return (
    <Switch>
      <Route path='/output'>
        <UserInfoOutput info={info} />
      </Route>
      <Route path='/'>
        <UserInfoInput infoToAppJs={setInfo}/>
      </Route>
    </Switch>
    );
}

export default App;
