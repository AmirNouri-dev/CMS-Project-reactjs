import Home from "./pages/home/Home";
import UsersList from "./pages/usersList/UsersList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
