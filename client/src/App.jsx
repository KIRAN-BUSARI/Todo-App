import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./pages/UpdateTodo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createTodo" element={<CreateTodo />} />
      <Route path="/updateTodo" element={<UpdateTodo />} />
    </Routes>
  );
}

export default App;
