import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { postPush } from "../../actions";
import { CardSection } from "../common";

const ImagePicker = require('react-native-image-picker');

const options = {
  title: '이미지 첨부', // specify null or empty string to remove the title
  cancelButtonTitle: '취소',
  takePhotoButtonTitle: '사진 찍기', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: '사진 보관함', // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 1, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};


class NoticeWrite extends Component {
  state = { title: "", content: "", time: "", images: [], numImage: 0 };

  componentDidMount() {
    this.setState({
      time: new Date().toLocaleString("ko-KR")
    });
  }

  onTitleChange(text) {
    this.setState({ title: text });
  }

  onContentChange(text) {
    this.setState({ content: text });
  }

  onSendPressed() {
    this.setState({
      time: new Date().toLocaleString("ko-KR")
    });
    this.NoticePush();
    Actions.pop();
  }

  NoticePush() {
    const category = this.props.category;
    this.props.postPush(category, this.state);
  }

  _onPressImage() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can display the image using either data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data, isStatic: true };
        //
        // // uri (on iOS)
        // const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        // // uri (on android)
        // const source = {uri: response.uri, isStatic: true};

        const tmpArray = this.state.images;
        tmpArray.push(source);
        console.log(tmpArray);


        this.setState({
          images: tmpArray,
          numImage: this.state.numImage + 1
        });
      }
    });
  }

  renderImages() {
    return this.state.images.map(x =>
      <Image key={x.uri} source={x} style={{ width: 100, height: 100, marginTop: 5, marginBottom: 5, marginRight: 5 }} />
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: '#f9f8e9', flex: 1 }}>
        <CardSection style={{ marginTop: 10, marginBottom: 10 }}>
          <TextInput
            placeholder="제목"
            autoCorrect={false}
            value={this.state.title}
            onChangeText={this.onTitleChange.bind(this)}
            style={{
              height: 30,
              flex: 1,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "#f9f2d0",
              marginTop: 5,
              marginBottom: 5,
            }}
          />
        </CardSection>

        <CardSection style={{ marginBottom: 10, flexDirection: 'column' }}>
            <TextInput
              multiline
              placeholder="내용을 입력하세요"
              autoCorrect={false}
              value={this.state.content}
              onChangeText={this.onContentChange.bind(this)}
              style={{
                height: 300,
                borderRadius: 5,
                borderWidth: 2,
                borderColor: "#f9f2d0",
                marginTop: 5,
                marginBottom: 5,
              }}
            />
            <TouchableOpacity
              onPress={() => this._onPressImage()}
              style={styles.addPhotoButton}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Ionicons size={20} name={'ios-add-circle-outline'} color="#929191" style={{ marginRight: 5 }} />
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#929191' }}> 그림/사진 첨부 </Text>
              </View>
            </TouchableOpacity>
            <ScrollView horizontal>
              {this.renderImages()}
            </ScrollView>

        </CardSection>


        <TouchableOpacity onPress={this.onSendPressed.bind(this)} style={styles.buttonStyle}>
          <Text style={{ fontSize: 30, fontWeight: '500', color: 'white' }}>
            작성 완료
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles={
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbdf5d',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 60,
    width: Dimensions.get('window').width

  },
  addPhotoButton: {
    width: 150,
    height: 30,
    backgroundColor: '#f9f2d0',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fbdf5d',
    paddingLeft: 5,
    paddingRight: 5
  }
};

export default connect(null, { postPush })(NoticeWrite);
