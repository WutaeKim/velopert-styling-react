import React, { useState } from 'react';

const UserInfoOutput = (props) => {
  return (
    <div>
      <h2>이름은 {props.name}</h2>
      <h2>나이는 {props.age}</h2>
    </div>
  )
}

export default UserInfoOutput;
