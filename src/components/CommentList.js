import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import CommentItem from './CommentItem';
import { commentFetch } from '../actions';

class CommentList extends Component {

  componentWillMount() {
    const { category, postId } = this.props;
    
    this.props.commentFetch(category, postId);

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this components
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ comments }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(comments);
  }


  renderRow(comment) {
    return <CommentItem comment={comment} />;
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
  const comments = _.map(state.cmtfetch, (val, cmtId) => {
    return { ...val, cmtId };
  });

  return { comments };
};

export default connect(mapStateToProps, { commentFetch })(CommentList);
