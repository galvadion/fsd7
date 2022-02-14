import logo from './logo.svg';
import './assets/App.css';
import TaskManager from './components/tasks/TaskManager'
import {Routes, Route} from 'react-router-dom';
import Triangles from './components/triangles/Triangles'
import Buttons from './components/Buttons';

function App() {


  return (
    <main>
       <Routes>
          <Route path="/" element={<Buttons />} />
          <Route path="tasks" element={<TaskManager />} />
          <Route path="triangles" element={<Triangles />} />
       </Routes>
    </main>
  );
}


export default App;
