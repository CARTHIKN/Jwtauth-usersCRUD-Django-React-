import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserWrapper from "./Components/user/UserWrapper/UserWrapper";
import AdminWrapper from "./Components/admin/AdminWrapper/AdminWrapper";
import { Provider } from "react-redux";
import userStore from "./Redux/userStore";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Provider store={userStore}>
          <Routes>
            <Route path="*" element={<UserWrapper/>}></Route>
            <Route path="admincontrol/*" element={<AdminWrapper />}></Route>
          </Routes>
          
        </Provider>
      </Router>
    </>
  );
}

export default App;
