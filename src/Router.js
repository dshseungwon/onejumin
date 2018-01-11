// Modules
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Intro from './components/Intro';
import Authentication from './components/Authentication';

import Main from './components/home/Main';
import MyPage from './components/home/myPage/MyPage';
import Setting from './components/home/Setting/Setting';

import MsgHome from './components/home/Message/MsgHome';
import MsgWrite from './components/home/Message/MsgWrite';

import NoticeHome from './components/notice/NoticeHome';
import NoticeRead from './components/notice/NoticeRead';
import NoticeWrite from './components/notice/NoticeWrite';

import ProposalHome from './components/proposal/ProposalHome';
import infoBoardHome from './components/infoBoard/infoBoardHome';
import freeBoardHome from './components/freeBoard/freeBoardHome';

import ContentView from './components/ContentView';

const NavBarTitle = ({ onPress }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onPress}>
      <Image
          source={require('./images/MainLogo.png')}
          style={{ width: 130, height: 40, marginTop: 10 }}
      />
      </TouchableOpacity>
    </View>
  );
};

const LeftNavButton = ({ onPress, iconName }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons size={35} name={iconName} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const RightNavButton = ({ onPress, iconName }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons size={35} name={iconName} color='white' />
      </TouchableOpacity>
    </View>
  );
};


const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#ffdd3f' }}>
      <Stack hideNavBar>

        <Scene
          initial
          key="intro"
          component={Intro}
        />

        <Stack key="auth">
          <Scene
            title="주민인증"
            titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
            component={Authentication}
 
          />
        </Stack>

        <Stack key="main" hideNavBar>

          <Scene key="home">
            <Scene
              initial
              title="ONE주민"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Main}
              renderLeftButton={() =>
                <LeftNavButton onPress={() => Actions.myPage()} iconName='ios-contact-outline' />
              }
              renderRightButton={() =>
                <RightNavButton onPress={() => Actions.setting()} iconName='ios-settings-outline' />
              }
            />

            <Scene
              key="myPage"
              title="마이페이지"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={MyPage}
            />
            <Scene
              key="myPage_exit"
              title="이사 및 탈퇴"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="myPage_logout"
              title="로그아웃"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />

            <Scene
              key="setting"
              title="설정"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Setting}
            />
            <Scene
              key="myPage_info"
              title="앱 정보"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="myPage_rule"
              title="커뮤니티 이용규칙"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="myPage_personalInfo"
              title="개인정보 처리방침"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="myPage_license"
              title="오픈소스 라이센스"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
          </Scene>

          <Scene key="msgRecv">
            <Scene
              initial
              renderTitle={() =>
                <NavBarTitle
                  onPress={() => Actions.main()}
                />
              }
              component={MsgHome}
            />
          </Scene>

          <Scene key="msgSend">
            <Scene
              initial
              renderTitle={() =>
                <NavBarTitle
                  onPress={() => Actions.main()}
                />
              }
              component={MsgWrite}
            />
          </Scene>

          <Scene key="notice">
            <Scene
              initial
              renderTitle={() =>
                <NavBarTitle
                  onPress={() => Actions.main()}
                />
              }
              component={NoticeHome}
            />
            <Scene
              key="notice_write"
              title="게시글 작성"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={NoticeWrite}
            />
            <Scene
              key="notice_read"
              title="$제목 없음"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={NoticeRead}
            />
            <Scene
              key="contentView"
              title="공지사항"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={ContentView}
            />
          </Scene>

          <Scene key="proposal">
            <Scene
              initial
              renderTitle={() =>
                <NavBarTitle
                  onPress={() => Actions.main()}
                />
              }
              component={ProposalHome}
            />
            <Scene
              key="notice_write"
              title="게시글 작성"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={NoticeWrite}
            />
            <Scene
              key="proposal_read"
              title="$제목 없음"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="contentView"
              title="건의사항"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={ContentView}
            />
          </Scene>

          <Scene key="freeBoard">
            <Scene
              key="freeBoard_list"
              renderTitle={() =>
                <NavBarTitle
                  onPress={() => Actions.main()}
                />
              }
              component={freeBoardHome}
            />
            <Scene
              key="notice_write"
              title="게시글 작성"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={NoticeWrite}
            />
            <Scene
              key="freeBoard_read"
              title="제목 없음"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="contentView"
              title="건의사항"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={ContentView}
            />
          </Scene>

          <Scene key="infoBoard">
            <Scene
              key="infoBoard_list"
              renderTitle={() =>
                <NavBarTitle
                  onPress={() => Actions.main()}
                />
              }
              component={infoBoardHome}
            />
            <Scene
              key="notice_write"
              title="게시글 작성"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={NoticeWrite}
            />
            <Scene
              key="infoBoard_read"
              title="제목 없음"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="contentView"
              title="건의사항"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={ContentView}
            />
          </Scene>

          <Scene key="market">
            <Scene
              key="market_list"
              renderTitle={() =>
                <NavBarTitle
                  onPress={() => Actions.main()}
                />
              }
              component={Intro}
            />
            <Scene
              key="market_write"
              title="글 쓰기"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
            <Scene
              key="market_read"
              title="제목 없음"
              titleStyle={{ fontSize: 20, color: 'white', fontWeight: '600' }}
              component={Intro}
            />
          </Scene>

        </Stack>

      </Stack>
    </Router>
  );
};

export default RouterComponent;
