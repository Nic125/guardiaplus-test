import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Planning from './components/Planning/Planning';
import Profile from './components/Profile/Profile';
import Personal from './components/Personal/Personal';
import Datainput from './components/Datainput/Datainput';
import NewMessage from './components/UI/NewMessage';
import GroupsContent from './components/Groups/GroupsContent';


function App() {
  const [showNewMessage, setShowNewMessage] = useState(false)
  return (
    <Router>
      <div className="App">
        {showNewMessage ? <NewMessage setShow={setShowNewMessage} /> : null}
        <Navbar setShow={setShowNewMessage} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/planning" exact component={Planning} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/datainput" exact component={Datainput} />
          <Route path="/groups" exact component={GroupsContent} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
