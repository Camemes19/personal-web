import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Gunpla from "./Gunpla.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      <Route path={'gunpla'} element={<Gunpla />}/>
      <Route path={'projects'} element={<Projects />}/>
      <Route path={'resume'} element={<Resume />}/>
    </Routes>
  </BrowserRouter>,
)
