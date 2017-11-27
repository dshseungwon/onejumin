import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { Button } from "./common";

class Intro extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/Intro_Background.jpg")}
        style={{ flex: 1 }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 150, 0.3)"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "transparent"
            }}
          >
            <View>
              <Text style={styles.textStyle}>ONE주민에 오신 것을</Text>
              <Text style={[styles.textStyle, { fontSize: 35 }]}>
                환영합니다
              </Text>
              <Text style={styles.textStyle}>주민인증을 통해</Text>
              <Text style={[styles.textStyle, { paddingBottom: 45 }]}>
                원주민이 되어보세요
              </Text>
            </View>

            <TouchableOpacity onPress={Actions.auth} style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>주민인증 하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 28,
    paddingBottom: 20,
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 3 }
  },

  buttonTextStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "500"
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
};

export default Intro;
