import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import PostCreate from './pages/PostCreate'
import PostList from './pages/PostList'

function App() {
  const [listPost, setListPost] = React.useState([])

  const handleSubmit = (form) => {
    setListPost([...listPost, form]) // keep old list and add new post
  }

  return (
    <div className="App">
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', justifyContent: 'center', padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/show">List Post</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<PostCreate onSubmit={handleSubmit} list={listPost} />} />
        <Route path="/show" element={<PostList list={listPost} />} />
      </Routes>
    </div>
  );
}

export default App;
