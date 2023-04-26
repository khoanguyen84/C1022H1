import { Route, Routes } from 'react-router-dom';
import UseState from './components/LearnUseState/UseState';
import TwoWayBinding2 from './components/LearnUseState/TwoWayBinding2';
import TodoList2 from './components/LearnUseState/TodoList2';
import Gift from './components/LearnUseState/Gift';
import Post from './components/LearnUseState/Post';
import UseEffect from './components/LearnUseEffect/UseEffect';
import Menu from './components/Route/Menu';
import StudentManager from './components/Route/StudentManager';
import SearchTab from './components/Route/SearchTab';
import ListPost from './components/Route/ListPost';
import PostDetail from './components/Route/PostDetail';
// hook(s)
// + ý nghĩa (nó làm gì cho mình/ dùng trong trường hợp nào)
// + input(s): xác định đầu vào
// + output(s): trả về cái gì

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-3'>
          <Menu />
        </div>
        <div className='col-md-9'>
          <Routes>
            <Route path='/' element={<StudentManager />} />
            <Route path='/student-manager' element={<StudentManager />} />
            <Route path='/search-tab' element={<SearchTab />} />
            <Route path='/list-post' element={<ListPost />} />
            <Route path='/post-detail/:postId' element={<PostDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
