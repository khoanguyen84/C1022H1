import UseState from './components/LearnUseState/UseState';
import TwoWayBinding2 from './components/LearnUseState/TwoWayBinding2';
import TodoList2 from './components/LearnUseState/TodoList2';
import Gift from './components/LearnUseState/Gift';
import Post from './components/LearnUseState/Post';
import UseEffect from './components/LearnUseEffect/UseEffect';
// hook(s)
// + ý nghĩa (nó làm gì cho mình/ dùng trong trường hợp nào)
// + input(s): xác định đầu vào
// + output(s): trả về cái gì

function App() {
  return (
    <div className="container bg-secondary vh-100">
      {/* <UseState/> */}
      {/* <TwoWayBinding2/> */}
      {/* <TodoList2 /> */}
      {/* <Gift /> */}
      {/* <Post/> */}
      <UseEffect/>
    </div>
  );
}

export default App;
