import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

const UserInfoInput = (props) => {
  var [info, setInfo] = useState({name: '', age: 0, sex: '', agree: ''}) 
  const passToSetInfo = (e) => {
    setInfo({[e.target.name]: e.target.value});
    console.log(info.name)
  }
  return (
    <div>
      <h1>회원정보 입력</h1>
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            <td> 회원이름 </td>
            <td> <input name='name' placeholder='이름을 입력해 주세요'
                onChange={passToSetInfo} /> </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 나이 </td>
            <td> <input name='age' placeholder='나이를 입력해 주세요'
    onChange={passToSetInfo}/> </td>
          </tr>
          <tr>
            <td> 성별 </td>
            <td> <input /> </td>
          </tr>
          <tr>
            <td> 이메일 수신 </td>
            <td> <input /> </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => props.infoToAppJs(info)}>등록</button>
    </div>
  )
}

export default UserInfoInput;


