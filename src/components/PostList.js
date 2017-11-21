import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import ListItem from './ListItem';
import { postFetch } from '../actions';

class PostList extends Component {

  componentWillMount() {
    const { category } = this.props;
    
    this.props.postFetch(category);

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this components
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ posts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(posts);
  }


  renderRow(post) {
    return <ListItem post={post} />;
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
  const posts = _.map(state.postfetch, (val, postid) => {
    return { ...val, postid };
  });

  return { posts };
};

export default connect(mapStateToProps, { postFetch })(PostList);
