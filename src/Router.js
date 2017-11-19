// Modules
import React, { Component } from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';

// Screens
import Intro from './components/Intro';
import Authentication from './components/Authentication';

const RouterComponent = () => {
  return (
    <Router>
      <Stack hideNavBar>

        <Scene
          initial
          key="intro"
          component={Intro}
        />

        <Stack key="auth">
          <Scene
            component={Authentication}
            title = "주민인증"
          />
        </Stack>

        <Scene key="main" hideNavBar>

          <Scene key="home">

            <Scene
              key="notice_list"
              title="$아파트 이름"
              component={Intro}
            />

            <Scene key="message">
              <Scene
                key="message_list"
                title="쪽지"
                component={Intro}
              />
              <Scene
                key="message_send"
                title="쪽지 쓰기"
                component={Intro}
              />
            </Scene>
          </Scene>

          <Scene key="notice">
            <Scene
              key="notice_list"
              title="공지사항"
              component={Intro}
            />
            <Scene
              key="notice_write"
              title="글 쓰기"
              component={Intro}
            />
            <Scene
              key="notice_read"
              title="제목 없음"
              component={Intro}
            />
          </Scene>

          <Scene key="proposal">
            <Scene
              key="proposal_list"
              title="건의사항"
              component={Intro}
            />
            <Scene
              key="proposal_write"
              title="글 쓰기"
              component={Intro}
            />
            <Scene
              key="proposal_read"
              title="제목 없음"
              component={Intro}
            />
          </Scene>

          <Scene key="freeBoard">
            <Scene
              key="freeBoard_list"
              title="자유게시판"
              component={Intro}
            />
            <Scene
              key="freeBoard_write"
              title="글 쓰기"
              component={Intro}
            />
            <Scene
              key="freeBoard_read"
              title="제목 없음"
              component={Intro}
            />
          </Scene>

          <Scene key="infoBoard">
            <Scene
              key="infoBoard_list"
              title="정보게시판"
              component={Intro}
            />
            <Scene
              key="infoBoard_write"
              title="글 쓰기"
              component={Intro}
            />
            <Scene
              key="infoBoard_read"
              title="제목 없음"
              component={Intro}
            />
          </Scene>

          <Scene key="market">
            <Scene
              key="market_list"
              title="벼룩시장"
              component={Intro}
            />
            <Scene
              key="market_write"
              title="글 쓰기"
              component={Intro}
            />
            <Scene
              key="market_read"
              title="제목 없음"
              component={Intro}
            />
          </Scene>

          <Scene key="myPage">

            <Scene
              key="myPage_list"
              title="마이페이지"
              component={Intro}
            />
            <Scene
              key="myPage_exit"
              title="이사 및 탈퇴"
              component={Intro}
            />
            <Scene
              key="myPage_logout"
              title="로그아웃"
              component={Intro}
            />
            <Scene
              key="myPage_info"
              title="앱 정보"
              component={Intro}
            />
            <Scene
              key="myPage_rule"
              title="커뮤니티 이용규칙"
              component={Intro}
            />
            <Scene
              key="myPage_personalInfo"
              title="개인정보 처리방침"
              component={Intro}
            />
            <Scene
              key="myPage_license"
              title="오픈소스 라이센스"
              component={Intro}
            />
          </Scene>

        </Scene>

      </Stack>
    </Router>
  );
};

export default RouterComponent;
