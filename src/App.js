import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/LogIn/LogIn";
import "./Assets/css/App.css"


function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="logIn" element={<LogIn></LogIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
