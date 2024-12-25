import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage"
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App;
