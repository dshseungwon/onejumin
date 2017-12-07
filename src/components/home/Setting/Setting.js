import React, { Component } from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Card, CardSection } from "../../common";

class Setting extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#f9f7e2", flex: 1 }}>

        <View>
          <Text style={styles.titleText}>앱 설정</Text>
          <Card style={{ backgroundColor: "#eeeeee", marginTop: 3 }}>
            <CardSection style={{ flexDirection: 'row' }}>
              <Text style={styles.buttonTextStyle}> 알림 설정 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: 'flex-end', marginRight: 10 }}
              />
            </CardSection>

            <CardSection style={{ flexDirection: 'row' }}>
              <Text style={styles.buttonTextStyle}> 쪽지 설정 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: 'flex-end', marginRight: 10 }}
              />
            </CardSection>

            <CardSection style={{ flexDirection: 'row' }}>
              <Text style={styles.buttonTextStyle}> 게시판 설정 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: 'flex-end', marginRight: 10 }}
              />
            </CardSection>
          </Card>
        </View>

        <View>
          <Text style={styles.titleText}>정보</Text>
          <Card style={{ backgroundColor: "#eeeeee", marginTop: 3 }}>
            <CardSection style={{ flexDirection: 'row' }}>
              <Text style={styles.buttonTextStyle}> 앱 버전 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: 'flex-end', marginRight: 10 }}
              />
            </CardSection>

            <CardSection style={{ flexDirection: 'row' }}>
              <Text style={styles.buttonTextStyle}> 오픈소스 라이센스 </Text>
              <Ionicons
                size={25}
                name={"ios-arrow-forward-outline"}
                style={{ alignSelf: 'flex-end', marginRight: 10 }}
              />
            </CardSection>

          </Card>
        </View>

      </View>
    );
  }
}

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

export default Setting;
