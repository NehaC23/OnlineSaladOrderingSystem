import React from 'react';
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import SaladStore from "./SaladStore/SaladStore";
import Checkout from "./Checkout/Checkout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
        <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/salad-store" exact component={SaladStore}/>
          <Route path="/checkout" component={Checkout}/>
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
