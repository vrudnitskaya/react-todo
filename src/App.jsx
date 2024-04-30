import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";
import TodoContainer from "./TodoContainer";

const App = () => {
  return (
    <Router>
      <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/todos" element={<TodoContainer/>} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      </>
    </Router>
  );
};

export default App;
