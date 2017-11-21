import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import ListItem from '../../ListItem';
import { sendMsgFetch, recvMsgFetch } from '../../../actions';

class MsgList extends Component {

  componentWillMount() {
    if (this.props.type === true) {
      this.props.recvMsgFetch();
    } else {
      this.props.sendMsgFetch();
    }
    
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this components
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ msgs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(msgs);
  }


  renderRow(msg) {
    return <ListItem msg={msg} />;
  }


  render() {
    console.log(this.props);

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
  const msgs = _.map(state.postfetch, (val, msgId) => {
    return { ...val, msgId };
  });

  return { msgs };
};

export default connect(mapStateToProps, { recvMsgFetch, sendMsgFetch })(MsgList);
