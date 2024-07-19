import React, { Component } from "react";
import { compose } from "recompose";
import { withAuthorization } from "../../components/Session";
import * as ROLES from "../../constants/roles";
import Layout from "../../components/Layout";

import AdminNav from "./AdminNav";
import Cars from "./Cars";
import Drivers from "./Drivers";
import Centres from "./Centres";
import Users from "./Users";
import Orders from "./Orders";

class AdminPage extends Component {
  render() {
    const { history } = this.props;
    const pathname = history.location.pathname;

    return (
      <Layout type="no-center">
        <AdminNav />
        <div className="py-6">
          <Cars route={pathname} />
          <Drivers route={pathname} />
          <Centres route={pathname} />
          <Users route={pathname} />
          <Orders route={pathname} />
        </div>
      </Layout>
    );
  }
}

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withAuthorization(condition)
  //   withFirebase
)(AdminPage);
