import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, TouchableWithoutFeedback, View, Image, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CardSection } from "../../common";

class MsgItem extends Component {
  onRowPress() {
    Actions.msgSend({ post: this.props.msg });
  }

  imageCheck() {
    if (this.props.msg.numImage !== 0) {
      return this.props.msg.images.map(x => (
        <Image
          key={x.uri}
          source={x}
          style={{
            width: 100,
            height: 100,
            marginTop: 5,
            marginBottom: 5,
            marginRight: 5
          }}
        />
      ));
    } else {
      return;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.cardStyle}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Ionicons
              size={50}
              name={"ios-contact-outline"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <View
              style={{
                flexDirection: "column",
                flex: 1,
                justifyContent: "center"
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.props.msg.dong}동 {this.props.msg.hosu}호
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ alignSelf: "flex-start" }}>
                  {this.props.msg.time}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginRight: 15 }}
              >
                {this.props.msg.title}
              </Text>
            </View>

            <Text>{this.props.msg.msg}</Text>
          </View>
          <ScrollView horizontal>{this.imageCheck()}</ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18
  },
  cardStyle: {
    borderRadius: 10,
    backgroundColor: "#ffffff",

    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 3,

    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5
  }
};

export default MsgItem;
