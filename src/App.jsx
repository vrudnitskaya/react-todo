import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./Footer";
import Header from './Header'
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";
import TodoContainer from "./TodoContainer";
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/todos" element={<TodoContainer />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default App;