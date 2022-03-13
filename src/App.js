import { BrowserRouter,Routes,  Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Tables from './components/Tables';
import Forms from './components/Forms'
import Todolist from './components/TodoList';
import Api from './components/Api';

import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/tables"exact element={<Tables/>} />
          <Route path="/forms" element={<Forms/>}/>
          <Route path="/todolist" element={<Todolist/>}/>
          <Route path="/api" element={<Api/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
