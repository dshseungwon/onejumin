import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import MsgItem from './MsgItem';
import { sendMsgFetch, recvMsgFetch } from '../../../actions';

class MsgList extends Component {

  componentWillMount() {
    console.log('componentMounted!');

    if (this.props.type === true) {
      this.props.recvMsgFetch();
      console.log('recvMsgFetch');
    } else {
      this.props.sendMsgFetch();
      console.log('sendMsgFetch');
    }

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this components
    // will be rendered with
    // this.props is still the old set of props

    if (this.props.type !== nextProps.type) {
      if (nextProps.type === true) {
        nextProps.recvMsgFetch();
        console.log('recvMsgFetch');
      } else {
        nextProps.sendMsgFetch();
        console.log('sendMsgFetch');
      }
    }
    this.createDataSource(nextProps);
  }

  createDataSource({ msgs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(msgs);
  }


  renderRow(msg) {
  return (
    <View style={{ flex: 1, backgroundColor: '#f9f2d0', marginLeft: 10, marginRight: 10 }}>
      <MsgItem msg={msg} />
    </View>
  );
  }


  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {

  const msgs = _.map(state.postfetch, (val) => {
    return { ...val };
  });

  return { msgs };
};

export default connect(mapStateToProps, { recvMsgFetch, sendMsgFetch })(MsgList);
