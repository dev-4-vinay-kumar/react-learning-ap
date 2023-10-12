import './App.css';
import Form from './pages/form1';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Form3 from './pages/form3';
import Form2 from './pages/form2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}></Route>
      <Route path='Form2' element={<Form2/>}></Route>
      <Route path='Form3' element={<Form3/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
