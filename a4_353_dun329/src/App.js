import {Routes, Route, Link} from 'react-router-dom'

import HomePost from './pages/HomePost';
import CreatePost from './pages/CreatePage';
import ShowPost from './pages/ShowPost';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">CreatePost</Link>
          </li>
          <li>
            <Link to="/show">ShowPost</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/show" element={<ShowPost />} />

      </Routes>
    </div>
  );
}

export default App;
