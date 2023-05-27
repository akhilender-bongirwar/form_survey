import "./App.css";
import Table, { dataaction } from "./components/Table";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Table />} action={dataaction} />
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
