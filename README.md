# 주특기 미니 프로젝트
## 📚 Todo-List 만들기
### 프로젝트 소개

<img src="/src/shared/cookieman.png">

해야할 일들을 TODO List로 등록하고 관리할 수 있게하는 간단한 TODO list 서비스. 타 유저와 공유 없이, 로그인한 본인의 목록만 확인하는 프라이빗한 투두리스트입니다!

### 제작기간 및 팀원소개: 2022.04.08 ~ 2022.04.14(7일간)
<div>
  <div>
    <strong>Frontend(React)</strong><br>
    &nbsp;최지은 : 로그인/회원가입/회원탈퇴 (user)<br>
    &nbsp;이경태 : TODO_LIST (main)<br>
  </div>
  <br>
  <div>
    <strong>Backend(Spring)</strong>
    &nbsp;송은혜 : 시큐리티&jwt / 사용자 정보 조회API / 회원 탈퇴API<br>
    &nbsp;박만수 : TO-DO 삭제,수정 API / 체크박스 (TO-DO완료체크) API<br>
    &nbsp;김호빈 : TO-DO 전체 조회, 등록 API<br>
    <a href="https://github.com/EunheaSong/99List">github로 이동</a>
  </div>
</div>
<br>
<div>

- <a href="http://mytodolist1.s3-website.ap-northeast-2.amazonaws.com/">프로젝트 페이지로 이동</a>
- <a href="https://youtu.be/a1686CgCQDY">프로젝트 시연영상 보기</a>
- <a href="https://www.notion.so/99-A-4-8c535480c3034fdab460445e05542d66">API 명세서</a>
- 로그인 페이지
- 회원가입 페이지
- 회원탈퇴 페이지
- 투두리스트 페이지

</div>

## 사용 stack

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Create React App-09D3AC?style=flat-square&logo=Create React App&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>

## ✅ 회원가입/회원탈퇴

- 회원가입 유효성검사(아이디/비밀번호 형식 검사 및 비밀번호 확인 검사)
- input값이 빈값이면 회원가입 비활성화

## ✅ 로그인/로그아웃

- 로그인시 input값이 빈값이면 로그인 비활성화
- 아이디, 비밀번호를 잘못 입력했을 시 alert
- 로그아웃시 쿠키 삭제

## ✅ TODOLIST

- 게시글 로드
- 게시글 추가기능
- 게시글 삭제기능