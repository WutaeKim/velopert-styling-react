
앞으로 함수형 컴포넌트와 Hook의 사용이 주된 컴포넌트 개발 방향이 될 거라는
리액트 개발팀의 권고에 따라, 가급적 함수형 컴포넌트로 구성을 하였다

# chapter05 까지의 응용 예제 만들기

01장 '환경 세팅', 02장 'JSX', 03장 '컴포넌트', 04장 '이벤트 핸들링', 05장
'DOM'에 이름달기의 내용을 담은 예제 구성

UserInfoInput 컴포넌트에서 회원정보를 입력받고, UserInfoOutput 컴포넌트에서
출력하는 react app 구성

화면이동은 'react-router-dom' 패키지를 이용하여 App.js에서 라우팅 하였다


### ref없이 스테이트를 이용한 유효성 검사

##### `state중 info.agree의 길이가 1이상이거나 값이 '', 'y', 'n'이 아니면 인풋창의 색이 바뀐다`

input value={info.agree} name='agree'
                placeholder='동의하면: y, 거부하면: n' 
                onChange={passToSetInfo}
                className={info.agree.length > 1 ? 'failure' :
                info.agree !=='y' && info.agree !=='n' && info.agree !== ''
                  ? 'failure' : ''} /


### ref를 사용한 유효성 검사

##### `input element에서 ref값을 할당하기 위한 let 변수를 세팅하고, 그 변수에 ref값을 집어 넣는다. 그 후 해당 변수를 element의 id처럼 사용`
input value={info.name} name='name' ref={ref => {nameRef=ref}} 
                placeholder='이름을 입력해 주세요' onChange={passToSetInfo} /> </td>
          </td>r>
          <tr>
            <td> 나이 </td>
            <td> <input value={info.age} name='age' ref={ref => {ageRef=ref}} 
                placeholder='나이를 입력해 주세요' onChange={passToSetInfo} /

let ageRef = '';
let nameRef = '';                

const goToOutput = () => {
  props.infoToAppJs(info);
  nameRef.value === '' ? nameRef.focus() :
  ageRef.value === '' ? ageRef.focus() : setGoTo('/output');
}


