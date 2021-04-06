import {HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import './style/App.scss';
import { ContactDetailsPage } from './views/ContactDetailsPage/ContactDetailsPage';
import { ContactEditPage } from './views/ContactEditPage/ContactEditPage';
import { ContactPage } from './views/ContactPage/ContactPage';
import { HomePage } from './views/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader />
        <Switch>
          {/* <HomePage /> */}
          <Route component={ContactEditPage} path="/edit/:contactId?" />
          <Route component={ContactDetailsPage} path="/detalis/:contactId" />
          <Route component={ContactPage} path="/contact" />
          <Route component={HomePage} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
