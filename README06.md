
앞으로 함수형 컴포넌트와 Hook의 사용이 주된 컴포넌트 개발 방향이 될 거라는
리액트 개발팀의 권고에 따라, 가급적 함수형 컴포넌트로 구성을 하였다

# chapter06 까지의 응용 예제 만들기

01장 '환경 세팅', 02장 'JSX', 03장 '컴포넌트', 04장 '이벤트 핸들링', 05장
'DOM'에 이름달기, 06장 컴포넌트 반복하기의 내용을 담은 예제 구성

UserInfoInput 컴포넌트에서 회원정보를 입력받고, UserInfoOutput 컴포넌트에서
출력하는 react app 구성

화면이동은 'react-router-dom' 패키지를 이용하여 App.js에서 라우팅 하였다


### +버튼 눌러 입력 양식(테이블) 늘리기

##### `for문을 안에서 cloneNode로 테이블을 복제한 후 복제된 클론의 input element를 찾이 name속성 변경`
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


### childNodes를 사용한 유효성 검사

##### `이름과 나이를 테이블 순서로 체크하여 빈 칸이 있으면 등록이 되지 않는다 `

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


### 아직 테이블이 늘어남에 따라 스테이트 값을 반영하는 법 진행 중
