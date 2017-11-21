// Modules
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Intro from './components/Intro';
import Authentication from './components/Authentication';

import Main from './components/home/Main';
import MsgHome from './components/home/Message/MsgHome';
import MsgWrite from './components/home/Message/MsgWrite';
import MsgRead from './components/home/Message/MsgRead';

import MyPage from './components/myPage/MyPage';


import NoticeHome from './components/notice/NoticeHome';
import NoticeRead from './components/notice/NoticeRead';
import NoticeWrite from './components/notice/NoticeWrite';

import ContentView from './components/ContentView';


const LeftNavButton = ({ onPress, iconName }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons size={35} name={iconName} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

const RightNavButton = ({ onPress, iconName }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons size={35} name={iconName} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};


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
            title="주민인증"
            component={Authentication}
 
          />
        </Stack>

        <Stack key="main" hideNavBar>

          <Scene key="home">
            <Scene
              initial
              title="$아파트 이름"
              component={Main}
              renderLeftButton={() =>
                <LeftNavButton onPress={() => Actions.myPage()} iconName='ios-settings-outline' />
              }
              renderRightButton={() =>
                <RightNavButton onPress={() => Actions.message()} iconName='ios-mail-outline' />
              }
            />
            <Scene
               key="message"
               title="쪽지"
               component={MsgHome}
            />
            <Scene
              key="message_write"
              title="쪽지 쓰기"
              component={MsgWrite}
            />
            <Scene
              key="message_read"
              title="$쪽지 타이틀로 refresh"
              component={MsgRead}
            />
          </Scene>

          <Scene key="notice">
            <Scene
              initial
              title="공지사항"
              component={NoticeHome}
            />
            <Scene
              key="notice_write"
              title="글 쓰기"
              component={NoticeWrite}
            />
            <Scene
              key="notice_read"
              title="$제목 없음"
              component={NoticeRead}
            />
            <Scene
              key="contentView"
              title="$제목 없음"
              component={ContentView}
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
              title="$제목 없음"
              component={Intro}
            />
            <Scene
              key="contentView"
              title="$제목 없음"
              component={ContentView}
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
              initial
              title="마이페이지"
              component={MyPage}
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

        </Stack>

      </Stack>
    </Router>
  );
};

export default RouterComponent;
