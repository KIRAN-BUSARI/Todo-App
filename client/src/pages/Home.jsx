import Todos from "./Todos";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="p-4 h-screen w-full max-w-4xl mx-auto">
      <div className="text-center">
        <Link
          to="/createTodo"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Todo
        </Link>
      </div>
      <Todos />
    </div>
  );
}

export default Home;
