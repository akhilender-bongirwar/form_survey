import "./App.css";
import FormPart3 from "./components/FormPart3";
import FormPart4 from "./components/FormPart4";
import FormPart5 from "./components/FormPart5";
import FormPart6 from "./components/FormPart6";
import Table, { dataaction } from "./components/Table";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<FormPart3 />} action={dataaction} />

  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
