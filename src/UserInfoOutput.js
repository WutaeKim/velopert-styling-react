import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserInfoOutput = (props) => {
  const [goTo, setGoTo] = useState('');

  const {name, age} = props.info;
  const {sex} = props.info.sex === '' ? {sex: 'male'} : props.info;
  const {agree} = props.info.agree === '' ? {agree: 'n'} : props.info;

  if (goTo === '/') return <Redirect to='/' />;
  return (
    <div>
      <h2>이름은: {name}</h2>
      <h2>나이는: {age}</h2>
      <h2>성별은:  {sex}</h2>
      <h2>메일 수신 여부:  {agree}</h2>
      <button onClick={() => setGoTo('/')}>회원등록으로</button>
    </div>
  )
}


//UserInfoOutput.defaultProps = {
//  info: {
//    sex: 'male',
//    agree: 'no',
//  }
//}


export default UserInfoOutput;
