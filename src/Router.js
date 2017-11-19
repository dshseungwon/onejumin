// Modules
import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';

// Screens
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ }}>
      <Stack hideNavBar>
        // Intro Screen
        <Scene
          initial
          key="intro"
          component={SOMETHING}
          title="SOMETHING"
        />
        // Auth Screen
        <Scene
          initial
          key="auth"
          component={SOMETHING}
          title="SOMETHING"
        />

        // Main Navigator
        <Stack key="main">

          // Home Screen
          <Stack key="home">

            <Scene
              key="notice_list"
              title="$아파트 이름"
            />

            <Stack key="message">
              <Scene
                key="message_list"
                title="쪽지"
              />
              <Scene
                key="message_send"
                title="쪽지 쓰기"
              />
            </Stack>

          </Stack>

          // Notice Screen
          <Stack key="notice">
            <Scene
              key="notice_list"
              title="공지사항"
            />
            <Scene
              key="notice_write"
              title="글 쓰기"
            />
            <Scene
              key="notice_read"
              title="제목 없음"
            />
          </Stack>

          // Proposal Screen
          <Stack key="proposal">
            <Scene
              key="proposal_list"
              title="건의사항"
            />
            <Scene
              key="proposal_write"
              title="글 쓰기"
            />
            <Scene
              key="proposal_read"
              title="제목 없음"
            />
          </Stack>

          // freeBoard Screen
          <Stack key="freeBoard">
            <Scene
              key="freeBoard_list"
              title="자유게시판"
            />
            <Scene
              key="freeBoard_write"
              title="글 쓰기"
            />
            <Scene
              key="freeBoard_read"
              title="제목 없음"
            />
          </Stack>

          // infoBoard Screen
          <Stack key="infoBoard">
            <Scene
              key="infoBoard_list"
              title="정보게시판"
            />
            <Scene
              key="infoBoard_write"
              title="글 쓰기"
            />
            <Scene
              key="infoBoard_read"
              title="제목 없음"
            />
          </Stack>

          // Market Screen
          <Stack key="market">
            <Scene
              key="market_list"
              title="벼룩시장"
            />
            <Scene
              key="market_write"
              title="글 쓰기"
            />
            <Scene
              key="market_read"
              title="제목 없음"
            />
          </Stack>

          // myPage Screen
          <Stack key="myPage">

            <Scene
              key="myPage_list"
              title="마이페이지"
            />
            <Scene
              key="myPage_exit"
              title="이사 및 탈퇴"
            />
            <Scene
              key="myPage_logout"
              title="로그아웃"
            />
            <Scene
              key="myPage_info"
              title="앱 정보"
            />
            <Scene
              key="myPage_rule"
              title="커뮤니티 이용규칙"
            />
            <Scene
              key="myPage_personalInfo"
              title="개인정보 처리방침"
            />
            <Scene
              key="myPage_license"
              title="오픈소스 라이센스"
            />
          </Stack>

        </Stack>

      </Stack>
    </Router>
  );
};

export default RouterComponent;


/*

<Scene
  onRight={() => Actions.employeeCreate()}
  rightTitle="Add"
  key="employeeList"
  component={EmployeeList}
  title="Employees"
/>
<Scene
  key="employeeCreate"
  component={EmployeeCreate}
  title="Create Employee"
/>

*/
