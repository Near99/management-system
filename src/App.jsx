import { useState } from "react";
import Main from "./main.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClientInfo from "./components/client/clientInfo/ClientInfo";
import OrderInfo from "./components/order/orderInfo/OrderInfo";
import ProductInfo from "./components/product/productInfo/ProductInfo.jsx";
import InventoryInfo from "./components/inventory/inventoryInfo/InventoryInfo.jsx";
import UserInfo from "./components/system/user/UserInfo.jsx";
import Procurement from "./components/inventory/procurementManagement/Procurement.jsx";
import LinkProduct from "./components/order/linkProduct/LinkProduct.jsx";
import Login from "./components/login/Login.jsx";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/client">
          <Main childComponent={<ClientInfo />} />
        </Route>
        <Route path="/order/link-product">
          <Main childComponent={<LinkProduct />} />
        </Route>
        <Route path="/order">
          <Main childComponent={<OrderInfo />} />
        </Route>
        <Route path="/product">
          <Main childComponent={<ProductInfo />} />
        </Route>
        <Route path="/inventory">
          <Main childComponent={<InventoryInfo />} />
        </Route>
        <Route path="/procurement">
          <Main childComponent={<Procurement />} />
        </Route>
        <Route path="/user">
          <Main childComponent={<UserInfo />} />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
