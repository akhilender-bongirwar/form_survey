import './App.css';
import Table , {action as formAction}from './components/Table';
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Table />} action={formAction} />
))
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
