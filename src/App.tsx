import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginSIgnUp } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <h1>Home View</h1>
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginSIgnUp />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
