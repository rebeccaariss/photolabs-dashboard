import React, { Component } from "react";
import Loading from "./Loading";

import classnames from "classnames";

class Dashboard extends Component {
  state = {
    loading: false
  };

  render() {
    const dashboardClasses = classnames("dashboard");
    
    return (
      this.state.loading ? <Loading /> :
      <main className={dashboardClasses} />
    );
  }
}

export default Dashboard;
