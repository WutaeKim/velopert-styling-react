
앞으로 함수형 컴포넌트와 Hook의 사용이 주된 컴포넌트 개발 방향이 될 거라는
리액트 개발팀의 권고에 따라, 가급적 함수형 컴포넌트로 구성을 하였다

# chapter04 까지의 응용 예제 만들기

01장 '환경 세팅', 02장 'JSX', 03장 '컴포넌트', 04장 '이벤트 핸들링'의 내용을
담은 예제 구성

UserInfoInput 컴포넌트에서 회원정보를 입력받고, UserInfoOutput 컴포넌트에서
출력하는 react app 구성

화면이동은 'react-router-dom' 패키지를 이용하여 App.js에서 라우팅 하였다


### 함수형 컴포넌트에서 스테이트 세팅

##### `useState Hook 사용(UserInfoInput)`

const [info, setInfo] = useState({name: '', age: '', sex: '', agree: ''});

##### `state 값을 object로 다루기 위해 ...연산자 사용(UserInfoInput)`

const passToSetInfo = (e) => {
  const nextInfo = {
     ...info,
    [e.target.name]: e.target.value
  };
  setInfo(nextInfo );
  }`


### 입력 기본걊 설정

##### `props로 넘어온 값이 object이므로 defaultProps로 구현하지 못하고 삼항 조건문 사용(UserInfoOutput)`
const {sex} = props.info.sex === '' ? {sex: 'male'} : props.info;
const {agree} = props.info.agree === '' ? {agree: 'n'} : props.info;


### 이벤트 핸들링

##### `input 창에 입력하는 값이 실시간으로 state에 반영되도륵 onChange사용(UserInfoInput)`

input value={info.name} name='name' placeholder='이름을 입력해 주세요' onChange={passToSetInfo}

##### `등록 버튼을 누르면 state값을 가지고 App.js의 state를 세팅하도록 onClick  메소드에 prop으로 전달받은 세터 설정(UserInfoInput)`

button onClick={() => goToOutput()}>등록</button

const goToOutput = () => {
  props.infoToAppJs(info);
  setGoTo('/output');
}


