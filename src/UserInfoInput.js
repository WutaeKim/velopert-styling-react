import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

const UserInfoInput = (props) => {
  const [info, setInfo] = useState({name: '', age: '', sex: '', agree: ''});
  const [goTo, setGoTo] = useState('/');

  const passToSetInfo = (e) => {
    const nextInfo = {
      ...info,
      [e.target.name]: e.target.value
    };
    setInfo(nextInfo );
  }

  const goToOutput = () => {
    props.infoToAppJs(info);
    setGoTo('/output');
  }
  
  if (goTo === '/output') return <Redirect to='/output' />;

  return (
    <div>
      <h1>회원정보 입력</h1>
      <table style={{border: '1px solid black'}} id='table'>
        <tbody>
          <tr>
            <td> 회원이름 </td>
            <td> <input value={info.name} name='name' 
                placeholder='이름을 입력해 주세요' onChange={passToSetInfo} /> </td>
          </tr>
          <tr>
            <td> 나이 </td>
            <td> <input value={info.age} name='age' 
                placeholder='나이를 입력해 주세요' onChange={passToSetInfo} /> </td>
          </tr>
          <tr>
            <td> 성별 </td>
            <td> <input value={info.sex} name='sex' 
                placeholder='성별을 입력해 주세요'
                onChange={passToSetInfo} /> </td>
          </tr>
          <tr>
            <td> 이메일 수신 </td>
            <td> <input value={info.agree} name='agree'
                placeholder='동의하면: y, 거부하면: n' 
                onChange={passToSetInfo} /> </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => goToOutput()}>+</button>
      <button onClick={() => goToOutput()}>++</button>
      <button onClick={() => goToOutput()}>-</button>
      <button onClick={() => goToOutput()}>--</button><br />
      <button onClick={() => goToOutput()}>등록</button>
    </div>
  )
}

export default UserInfoInput;

