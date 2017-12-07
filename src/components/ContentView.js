import React, { Component } from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import CommentList from "./CommentList";
import { commentPush } from "../actions";
import { Button, Card, CardSection } from "./common";

class ContentView extends Component {
  state = { content: "", time: "" };

  componentDidMount() {
    this.setState({
      time: new Date().toLocaleString("ko-KR")
    });
  }

  onContentChange(text) {
    this.setState({ content: text });
  }

  onSendPressed() {
    this.setState({
      time: new Date().toLocaleString("ko-KR")
    });
    const category = this.props.category;
    this.props.commentPush(
      category,
      this.props.post.postId,
      this.state,
      this.props.post.numComments
    );
    this.setState({ content: "" });
  }

  imageCheck() {
    if (this.props.post.numImage !== 0) {
      return this.props.post.images.map(x => (
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
                {this.props.post.nickname}
              </Text>
              <View
                style={{
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <Ionicons
                  size={20}
                  name={"ios-chatbubbles-outline"}
                  style={{ paddingRight: 10 }}
                />
                <Text
                  style={{
                    paddingRight: 13,
                    color: "#a3a3a2",
                    fontSize: 19,
                    fontWeight: "500"
                  }}
                >
                  {this.props.post.numComments}
                </Text>
                <Ionicons
                  size={20}
                  name={"ios-thumbs-up-outline"}
                  style={{ paddingRight: 10 }}
                />
                <Text
                  style={{
                    paddingRight: 10,
                    color: "#a3a3a2",
                    fontSize: 19,
                    fontWeight: "500"
                  }}
                >
                  {this.props.post.like}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ alignSelf: "flex-start" }}>
                {this.props.post.time}
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
            <Text style={{ fontSize: 20, fontWeight: "bold", marginRight: 15 }}>
              {this.props.post.dong}동
            </Text>
            <Text style={styles.titleStyle}>{this.props.post.title}</Text>
          </View>

          <Text>{this.props.post.content}</Text>
        </View>

        <CardSection>
          <ScrollView horizontal>{this.imageCheck()}</ScrollView>
        </CardSection>

        <CardSection>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
              size={30}
              name={"ios-contact-outline"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <TextInput
              multiline
              placeholder="댓글을 입력하세요"
              autoCorrect={false}
              value={this.state.content}
              onChangeText={this.onContentChange.bind(this)}
              style={{ flex: 1, height: 20, borderRadius: 7, backgroundColor: '#edede1' }}
            />
            <TouchableOpacity onPress={this.onSendPressed.bind(this)}>
              <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 15, fontWeight: 'bold', color: 'gray' }}>작성</Text>
            </TouchableOpacity>
          </View>

        </CardSection>

        <CardSection>
          <CommentList
            category={this.props.category}
            postId={this.props.post.postId}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18
  },
  cardStyle: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff100",
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

export default connect(null, { commentPush })(ContentView);
