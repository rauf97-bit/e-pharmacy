import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
