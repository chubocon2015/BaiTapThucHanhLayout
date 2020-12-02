import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapThucHanhLayout from './BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import BaiTapThayDoiKinh from './BaiTapThayDoiKinh/BaiTapThayDoiKinh';

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout/> */}
      <BaiTapThayDoiKinh/>
    </div>
  );
}

export default App;
