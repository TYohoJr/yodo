import React, { Component } from 'react';
import './Support.css';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import SuccessPage from './SuccessPage';

import 'react-datepicker/dist/react-datepicker.css';

class SupportPage extends Component {
    constructor() {
        super();
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onDetailsChange = this.onDetailsChange.bind(this);
        this.state = {
            startDate: new Date(),
            file: null,
            name: null,
            email: null,
            details: ''
        }
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleFile(event) {
        this.setState({
            file: event.target.files[0],
            loaded: 0
        })
    }

    uploadHandler() {
        if (!this.state.email) {
            return alert('Please log in to send a support ticket')
        }
        this.props.dispatch({
            type: 'loadingData'
        })
        // const fileData = new FormData();
        // fileData.append('file', this.state.file);
        let userData = {
            email: this.state.email,
            date: this.state.startDate,
            details: this.state.details,
        }
        axios.post('/supportUpload', { userData, token: sessionStorage.getItem('token') }).then((result) => {
            this.props.dispatch({
                type: 'changePage',
                currentPage: <SuccessPage />
            });
        })
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    onDetailsChange(e) {
        this.setState({
            details: e.target.value
        })
    }

    componentWillMount() {
        const email = sessionStorage.getItem('username');
        if (email) {
            this.setState({
                email
            })
        }
        // if(this.props.userDataReducer.data === null) {
        //     this.props.dispatch({
        //         type: 'changePage',
        //         currentPage: <SuccessPage />
        //     });
        // }
    }

    render() {
        return (
            <Form id='support-form'>
                <FormGroup>
                    <Label>Date: </Label>
                    <DatePicker
                        disabled
                        selected={this.state.startDate}
                        onChange={this.handleDateChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input disabled type="email" value={this.state.email || 'Please log in to send a support ticket'} maxLength='50' onChange={this.onEmailChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Details:</Label>
                    <Input type="textarea" maxLength='500' placeholder='Please explain what you are having trouble with' onChange={this.onDetailsChange} />
                    {this.state.details.length}/500
                </FormGroup>
                {/* <FormGroup>
                    <Label for="exampleFile">Supporting File</Label>
                    <Input disabled type="file" name="file" id="file" onChange={this.handleFile} />
                </FormGroup> */}
                <Button color='success' onClick={this.uploadHandler}>Submit</Button>
            </Form>
        );
    }
}

export default connect((state) => (state))(SupportPage);