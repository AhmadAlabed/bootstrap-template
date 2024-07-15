import Experience from "./pages/Experience/Experience";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";
function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "work",
          element: <Work />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
