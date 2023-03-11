import React from "react";
import Form from '../components/Form'
import List from '../components/List'

const PostCreate = (props) => {
  return (
    <div className="post-create-page" style={{ margin: '2rem auto', width: '600px', display: 'flex', gap: '2rem' }}>
      <div className="col" style={{ flex: 1 }}>
        <h3 style={{ textAlign: 'center' }}>Create post</h3>
        <Form onSubmit={props.onSubmit} />
      </div>
      <div style={{ width: 1, background: '#eeeeee' }}></div>
      <div className="col" style={{ flex: 1 }}>
        <h3 style={{ textAlign: 'center' }}>List posts</h3>
        <List list={props.list} />
      </div>
    </div>
  );
};
export default PostCreate;
