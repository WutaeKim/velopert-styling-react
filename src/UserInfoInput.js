import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

const UserInfoInput = (props) => {
  //const를 사용하면info가 바뀔때마다 컴포넌트가 초기화되어 수정된 info를 한
  //번에 넘기는 법을 모르겠음
  let [info, setState] = useState({name: '', age: '', sex: '', agree: ''});
  let [goTo, setGoTo] = useState('/');
  const passToSetInfo = (e) => {
    setState({ ...info, [e.target.name]: e.target.value});
    console.log(info)
  }

  const goToOutput = () => {
    props.infoToAppJs(info);
    setGoTo('/output');
  }
  
  const cloneTable = () => {
    const table = document.getElementById('table');
    const cloned = table.cloneNode(true);
    const parent = document.getElementById('parent');
    parent.appendChild(cloned);
    parent.childNodes.forEach((child, index) => {
      console.log(child, index)
      console.log(child.childNodes)
    })
  }
  
  if (goTo === '/output') return <Redirect to='/output' />;

  return (
    <div id='parent'>
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
      <button onClick={() => cloneTable()}>+</button>
      <button onClick={() => goToOutput()}>++</button>
      <button onClick={() => goToOutput()}>-</button>
      <button onClick={() => goToOutput()}>--</button><br />
      <button onClick={() => goToOutput()}>등록</button>
    </div>
  )
}

export default UserInfoInput;

