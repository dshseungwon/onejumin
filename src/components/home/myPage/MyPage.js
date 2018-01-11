import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import { Card, CardSection } from "../../common";


class MyPage extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#f9f7e2", flex: 1 }}>
        <Card>
          <CardSection style={{ flexDirection: "row", alignItems: 'center' }}>
            <Ionicons
              size={50}
              name={"ios-contact-outline"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5b5959' }}>{this.props.nickname}</Text>
              <Text style={{ fontSize: 18, color: '#929191' }}>{this.props.apt} 아파트</Text>
              <Text style={{ fontSize: 18, color: '#929191' }}>{this.props.dong}동 {this.props.hosu}호</Text>
            </View>
          </CardSection>
        </Card>

        <Card style={{ backgroundColor: "#eeeeee", marginTop: 10 }}>
          <CardSection style={{ flexDirection: "row" }}>
            <Text style={styles.buttonTextStyle}> 내가 공감한 게시물 </Text>
            <Ionicons
              size={25}
              name={"ios-arrow-forward-outline"}
              style={{ alignSelf: "flex-end", marginRight: 10 }}
            />
          </CardSection>
        </Card>

        <View>
          <Text style={styles.titleText}>계정</Text>
          <Card style={{ backgroundColor: "#eeeeee", marginTop: 3 }}>
            <CardSection style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextStyle}> 프로필 이미지 변경 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: "flex-end", marginRight: 10 }}
              />
            </CardSection>

            <CardSection style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextStyle}> 닉네임 변경 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: "flex-end", marginRight: 10 }}
              />
            </CardSection>

            <CardSection style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextStyle}> 이메일 주소 변경 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: "flex-end", marginRight: 10 }}
              />
            </CardSection>

            <CardSection style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextStyle}> 계정 추가 및 삭제 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: "flex-end", marginRight: 10 }}
              />
            </CardSection>

          </Card>
        </View>

        <View>
          <Text style={styles.titleText}>정보</Text>
          <Card style={{ backgroundColor: "#eeeeee", marginTop: 3 }}>
            <CardSection style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextStyle}> 커뮤니티 이용규칙 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: "flex-end", marginRight: 10 }}
              />
            </CardSection>

            <CardSection style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextStyle}> 개인정보 처리방침 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: "flex-end", marginRight: 10 }}
              />
            </CardSection>
          </Card>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    apt,
    dong,
    hosu,
    nickname,
    email,
  } = state.auth;

  return {
    apt,
    dong,
    hosu,
    nickname,
    email,
  };
};


const styles = {
  titleText: {
    marginTop: 5,
    paddingTop: 5,
    paddingLeft: 15,
    fontSize: 16,
    color: "#787772",
    fontWeight: "bold"
  },

  buttonTextStyle: {
    color: "gray",
    fontSize: 20,
    fontWeight: "500",
    flex: 1
  },

  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    height: "7%",
    alignSelf: "center",
    backgroundColor: "rgba(250, 220, 50, 1.0)",
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
};

export default connect(mapStateToProps, null)(MyPage);

