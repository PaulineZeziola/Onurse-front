// imports npm
import React from 'react';
import Proptypes from 'prop-types';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
// local imports
import BigCalendar from 'src/containers/BigCalendar';
import LoginForm from 'src/containers/LoginForm';
import ResetPassword from 'src/containers/LoginForm/ResetPassword';
import CreateAccount from 'src/containers/CreateAccount';
import Home from 'src/containers/Home';
import Loader from 'src/components/Loader';
import Settings from 'src/containers/Settings';
import Errors from '../Errors';
import AddPatient from '../../containers/AddPatient';
import Tour from '../../containers/Tour';
import PatientCard from '../../containers/PatientCard';
import PatientsList from '../../containers/PatientsList';
import ToDoList from '../../containers/ToDoList';
import About from '../About';
import LegalMention from '../LegalMention';
import Footer from './Footer';
import './page.scss';

const Page = ({
  isCreate, logged, patientsLoaded, eventsLoaded,
  redirect, token, tasksLoaded,
}) => {
  const resetToken = localStorage.getItem('resetToken');

  return (
    <Router>

      {isCreate && <Redirect from="/account/create/account" to="/login" /> }
      <Switch>
        {redirect && <Redirect from="/patients/:id" to="/patients" />}

        {resetToken
        && (
        <>
          <Route path={`/reset_password/${resetToken}`} exact>
            <ResetPassword />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/account/create/account">
            <CreateAccount />
          </Route>
        </>
        )}

        {(token === null) && <Redirect from={`/reset_password/${resetToken}`} to="/login" />}

        {!logged
     && (
     <>
       <Redirect from="/" to="/login" />
       <Route path="/login">
         <LoginForm />
       </Route>
       <Route path="/account/create/account">
         <CreateAccount />
       </Route>
     </>
     )}
        {(!patientsLoaded || !eventsLoaded || !tasksLoaded) && (
        <Loader />
        )}
        {logged && <Redirect from="/login" to="/" />}

        {logged && patientsLoaded && eventsLoaded && tasksLoaded
      && (
        <>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/account/settings">
            <Settings />
          </Route>
          <Route path="/calendar/day">
            <Tour />
          </Route>
          <Route path="/patients" exact>
            <PatientsList />
          </Route>
          <Route path="/addPatient" exact>
            <AddPatient />
          </Route>
          <Route path="/patients/:id" exact>
            <PatientCard />
          </Route>
          <Route path="/patients/:id/edit" exact>
            <AddPatient />
          </Route>
          <Route path="/calendar" exact>
            <BigCalendar />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/legal-mention">
            <LegalMention />
          </Route>
          <Route path="/to-do-list">
            <ToDoList />
          </Route>
          <Footer />
        </>
      )}
        <Route>
          <Errors />
        </Route>
      </Switch>
    </Router>

  );
};

Page.propTypes = {

  isCreate: Proptypes.bool.isRequired,
  logged: Proptypes.bool.isRequired,
  patientsLoaded: Proptypes.bool.isRequired,
  eventsLoaded: Proptypes.bool.isRequired,
  tasksLoaded: Proptypes.bool.isRequired,
  redirect: Proptypes.bool.isRequired,
  token: Proptypes.string,
};

Page.defaultProps = {
  token: '',
};

export default Page;
