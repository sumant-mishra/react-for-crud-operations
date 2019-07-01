import React, { Component } from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as actions from './../actions';

const styleObject = {
    width: "100%",
    height: "100%",
    padding: "10px"
}

const actionCol = {
    width: "40px",
    textAlign: 'center',
    cursor: 'pointer'
}
const actionHeder = {
    textAlign: 'center'
}

function mapDispatchToProps(dispatch) {
    return{
        fetchUsersList: () => dispatch(actions.fetchUsersList()),
        editUser: (item) => dispatch(actions.editUser(item)),
        deleteUser: (item) => dispatch(actions.deleteUser(item))
    }
}


function mapStateToProps(state) {
    
    return {
        users: state.user.users 
    }
}

class UserList extends Component{

    componentDidMount(){
        
        if(!this.props.users || !this.props.users.length && this.props.users.length == 0 )
        {
            this.props.fetchUsersList();
        }
        
    }

    onEditClick(item){
        console.log("Item: ", item);
        this.props.editUser(item);
        this.props.history.push('/user');
        //this.props.fetchUsersList();
    }

    onDeleteClick(item){
        this.props.deleteUser(item);
    }

    render(){
        const {users} = this.props;
        
        let userElements = users.map((item, index) => {
            return <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td scope="col">{item.firstName}</td>
                <td scope="col">{item.lastName}</td>
                <td scope="col">{item.email}</td>
                <td style={actionCol}><span onClick={this.onEditClick.bind(this, item)} className="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
                <td style={actionCol}><span onClick={this.onDeleteClick.bind(this, item)} className="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
            </tr>
        })

        return(<div style={styleObject}>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col" colSpan="2" style={actionHeder}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userElements}
                </tbody>
                </table>

        </div>)
    }

}

//const UserList = connect(mapStateToProps, mapDispatchToProps)(UserListComp)
export default connect(mapStateToProps, mapDispatchToProps)(UserList);