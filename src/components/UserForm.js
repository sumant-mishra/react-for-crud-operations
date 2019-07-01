import React, {Component} from 'react';
import {connect} from 'react-redux';
import { generateRawUserData } from './../service';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as actions from './../actions';

const inputTextStyle = {
    minWidth: "300px",
    minHeight: "20px"
}

const button = {
    margin: "10px"
}

const container = {
    width: "100%",
    align: "center"
}

function mapDispatchToProps(dispatch) {
    return{
        addUser: (item) => dispatch(actions.addUser(item)),
        editUser: (item) => dispatch(actions.editUser(item)),
        saveEditedUserData: (item) => dispatch(actions.saveEditedUserData(item))
    }
}


function mapStateToProps(state) {
    
    return {
        user: state.user.selectedUser 
    }
}

class UserForm extends Component{

    constructor(props){
        
        super(props);

        this.state = {
            user : {
                id: "",
                firstName: "",
                lastName: "",
                email: "",
                department: "",
                salary: ""
            }
        }
    }

    generateNewUserData(){
        let newState = generateRawUserData();
        console.log(newState);
        this.props.editUser(newState);
    }

    inputOnChange(e){
        let newState = {...this.props.user};
        newState[e.currentTarget.name] = e.currentTarget.value;
        
        this.props.editUser(newState);
    }

    resetSelectedUserData(){
        this.props.editUser({
                                id: "",
                                firstName: "",
                                lastName: "",
                                email: "",
                                department: "",
                                salary: ""
                            })
    }

    addUser(){
        this.props.addUser(this.props.user);
        this.resetSelectedUserData();
        this.props.history.push('/');
    }

    saveEditedUserData(){
        let objPostData = this.props.user;
        console.log(objPostData);
        let monthIndex = new Date(objPostData.hire_date).getMonth();
        objPostData.hire_date = new Date(objPostData.hire_date).getFullYear() + "-" + ((monthIndex < 10) ? "0"+ (monthIndex+1) : monthIndex) + "-" + new Date(objPostData.hire_date).getUTCDate();        //objPostData.hire_date = 
        console.log("objPostData: ", objPostData);
        this.props.saveEditedUserData(objPostData);
        this.resetSelectedUserData();
        this.props.history.push('/');
    }

    render(){
        const { user } = this.props;
        
        return(
            <div>
                
                <div>
                    <label>First Name:</label><br/>
                    <input onChange={this.inputOnChange.bind(this)} style={inputTextStyle} type="text" name="firstName" value={user.firstName}></input>
                </div><br/>
                <div>
                    <label>Last Name:</label><br/>
                    <input onChange={this.inputOnChange.bind(this)} style={inputTextStyle} type="text" name="lastName" value={user.lastName}></input>
                </div><br/>
                <div>
                    <label>Email:</label><br/>
                    <input onChange={this.inputOnChange.bind(this)} style={inputTextStyle} type="text" name="email"  value={user.email}></input>
                </div><br/>
                <div>
                    <label>Salary:</label><br/>
                    <input onChange={this.inputOnChange.bind(this)} style={inputTextStyle} type="text" name="salary"  value={user.salary}></input>
                </div><br/>
                <div>
                
                    <button type="button" className="btn btn-link" style={button} onClick={this.generateNewUserData.bind(this)} name="submitBtn">Generate User Data</button>
                    {
                        (user.id == "") ?
                        <button type="button" className="btn btn-primary" style={button} name="addUserBtn" onClick={this.addUser.bind(this)}>Save</button> :
                        <button type="button" className="btn btn-primary" style={button} name="saveUserDataBtn" onClick={this.saveEditedUserData.bind(this)}>Save User Data</button>
                    }
                    
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);