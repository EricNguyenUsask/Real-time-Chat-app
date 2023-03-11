import React from 'react';
import List from '../components/List';

const PostList = (props) => {
  return (
    <div className='post-list-page' style={{ width: 500, margin: 'auto' }}>
      <h3 style={{ textAlign: 'center' }}>List posts</h3>
      <List list={props.list} />
    </div>
  );
};

export default PostList;