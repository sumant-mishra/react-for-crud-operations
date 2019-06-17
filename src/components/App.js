import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserForm from './UserForm';
import UserList from './UserList';


class App extends Component{
    render(){
        return(<div>
            <Router>
            <div>
              
                  <Link to="/">User List</Link> | <Link to="/user">Add User</Link>
                
      
              <hr />
              
              <Route exact path="/" component={UserList} />
              <Route path="/user" component={UserForm} />
            </div>
          </Router>
        </div>);
    }
}

export default App;