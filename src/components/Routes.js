import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LongTermCustomer from "../Pages/Berth13Import/LongTermCustomers";
import SpotCustomer from "../Pages/Berth13Import/SpotCustomers";

import FrontLineEnquiry from "../Pages/Berth13Import/SpotCustomers/FrontLineEnquiry/FrontLineEnquiry";
import FrontLineQuotation from "../Pages/Berth13Import/SpotCustomers/FrontLineQuotation/FrontLineQuotation";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SpotCustomer} />
      <Route exact path="/longterm-customers" component={LongTermCustomer} />

      <Route exact path="/frontline-enquiry" component={FrontLineEnquiry} />
      <Route exact path="/frontline-quotation" component={FrontLineQuotation} />
    </Switch>
  );
};
export default Routes;
