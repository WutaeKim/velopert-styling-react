import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Validation.css';

const UserInfoInput = (props) => {
  const [info, setInfo] = useState({name: '', age: '', sex: '', agree: ''});
  const [goTo, setGoTo] = useState('/');
  // ref로 사용할 변수를 input element에서 할당하기 위해 선언. const사용불가
  let ageRef = '';
  let nameRef = '';
  let tableRef = '';
  let parentRef = '';

  const passToSetInfo = (e) => {
    const nextInfo = {
      ...info,
      [e.target.name]: e.target.value
    };
    setInfo(nextInfo);
    console.log(info)
  }
  
  const goToOutput = () => {
    props.infoToAppJs(info);
    //nameRef.value === '' ? nameRef.focus() :
    //ageRef.value === '' ? ageRef.focus() : setGoTo('/output');
    //    parentRef.childNodes.forEach((table, index) => {
    //      const inputNameNode =
    //          table.childNodes[0].childNodes[0].childNodes[1].childNodes[1];
    //      console.log(inputNameNode)
    //      const inputAgeNode =
    //          table.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
    //      console.log(inputAgeNode)
    //      inputNameNode.value === '' ? inputNameNode.focus() :
    //          inputAgeNode.value === '' ? inputAgeNode.focus() : setGoTo('/output');
    //    })
    const tables = parentRef.childNodes;
    for (let i = 0; i <  tables.length; i++ ) {
          const inputNameNode =
              tables[i].childNodes[0].childNodes[0].childNodes[1].childNodes[1];
          const inputAgeNode =
              tables[i].childNodes[0].childNodes[1].childNodes[1].childNodes[1];
          if (inputNameNode.value === '') {
            inputNameNode.focus();
            break;
          }
          if (inputAgeNode.value === '') {
            inputAgeNode.focus();
            break;
          } else if (i === tables.length - 1) setGoTo('/output');

    }
  }

  const plusTable = () => {
    const cloned = tableRef.cloneNode(true);
    parentRef.appendChild(cloned);
    const tableBody = cloned.childNodes[0];
    tableBody.childNodes.forEach((_, index) => {
      const input = 
          cloned.childNodes[0].childNodes[index].childNodes[1].childNodes[1];
      input.name = input.name + (parentRef.childNodes.length - 1);
      input.onChange = passToSetInfo;
      console.log(input.onChange)
    })
    
  }

  if (goTo === '/output') return <Redirect to='/output' />;

  return (
    <div>
      <h1>회원정보 입력</h1>
      <div ref={ref=>parentRef=ref}>
      <table ref={ref=>tableRef=ref} style={{border: '1px solid black'}} >
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
      </div>
      <button onClick={() => plusTable()}>+</button>
      <button onClick={() => {}}>++</button>
      <button onClick={() => {}}>-</button>
      <button onClick={() => {}}>--</button><br />
      <button onClick={() => goToOutput()}>등록</button>
    </div>
  )
}

export default UserInfoInput;

