import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Validation.css';

const UserInfoInput = (props) => {
  const [info, setInfo] = useState({name: '', age: '', sex: '', agree: ''});
  const [goTo, setGoTo] = useState('/');
  // ref로 사용할 변수를 input element에서 할당하기 위해 선언. const사용불가
  let ageRef = '';
  let nameRef = '';

  const passToSetInfo = (e) => {
    const nextInfo = {
      ...info,
      [e.target.name]: e.target.value
    };
    setInfo(nextInfo);
  }

  const goToOutput = () => {
    props.infoToAppJs(info);
    nameRef.value === '' ? nameRef.focus() :
    ageRef.value === '' ? ageRef.focus() : setGoTo('/output');
  }

  if (goTo === '/output') return <Redirect to='/output' />;

  return (
    <div>
      <h1>회원정보 입력</h1>
      <table style={{border: '1px solid black'}} id='table'>
        <tbody>
          <tr>
            <td> 회원이름 </td>
            <td> <input value={info.name} name='name' ref={ref => {nameRef=ref}} 
                placeholder='이름을 입력해 주세요' onChange={passToSetInfo} /> </td>
          </tr>
          <tr>
            <td> 나이 </td>
            <td> <input value={info.age} name='age' ref={ref => {ageRef=ref}} 
                placeholder='나이를 입력해 주세요' onChange={passToSetInfo} /> </td>
          </tr>
          <tr>
            <td> 성별 </td>
            <td> <input value={info.sex} name='sex' 
                placeholder='남자는: m, 여자는: f'
                onChange={passToSetInfo} /> </td>
          </tr>
          <tr>
            <td> 이메일 수신 </td>
            <td> <input value={info.agree} name='agree'
                placeholder='동의하면: y, 거부하면: n' 
                onChange={passToSetInfo}
                className={info.agree.length > 1 ? 'failure' :
                info.agree !=='y' && info.agree !=='n' && info.agree !== ''
                  ? 'failure' : ''} /> </td>
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

