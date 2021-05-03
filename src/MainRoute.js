import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Auth
const Login = React.lazy(() => import('./Auth/login'));
const Register = React.lazy(() => import('./Auth/register'));
const Signin = React.lazy(() => import('./Auth/signin'));

const Dashboard = React.lazy(() => import('./views/dashboard'));

const Status_Master = React.lazy(() => import('./views/status'));
const Defects_Master = React.lazy(() => import('./views/defects'));

const Company  = React.lazy(() => import('./views/company'));
const Wafers = React.lazy(() => import('./views/wafers'));

const Profile = React.lazy(() => import('./views/profile'));
const CompanyReports = React.lazy(() => import('./Reports/companyList'));
const WafersReports = React.lazy(() => import('./Reports/wafersList'));


class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              <Route exact path="/dashboard" name="dashboard Page" render={props => <Dashboard {...props}/>} />
              <Route exact path="/status" name="Status Page" render={props => <Status_Master {...props}/>} />
              <Route exact path="/defects" name="Defects Page" render={props => <Defects_Master {...props}/>} />
              <Route exact path="/company" name="Company Page" render={props => <Company {...props}/>} />
              <Route exact path="/wafers" name="Wafers Page" render={props => <Wafers {...props}/>} />
              <Route exact path="/profile" name="Profile Page" render={props => <Profile {...props}/>} />
              <Route exact path="/companylist" name="companylist" render={props => <CompanyReports {...props}/>} />
              <Route exact path="/waferslist" name="waferslist" render={props => <WafersReports {...props}/>} />
              <Route exact path="/signin" name="sigin Page" render={props => <Signin {...props}/>} />
              
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
