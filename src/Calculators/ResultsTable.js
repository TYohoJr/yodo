import React, { Component } from 'react';
import './Calculators.css';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

class ResultsTable extends Component {
    constructor() {
        super();
        this.state = {
            tableData: null
        }
    }

    componentWillMount() {
        this.setState({
            tableData: Object.keys(this.props.data).map((key, index, arr) => {
                console.log(key, index, arr);
                return <tr>
                    <td>{key}</td>
                    <td>{this.props.data[key]}</td>
                </tr>
            })
        });
    }

    componentWillReceiveProps(props) {
        this.setState({
            tableData: Object.keys(props.data).map((key, index, arr) => {
                console.log(key, index, arr);
                return <tr>
                    <td>{key}</td>
                    <td>{props.data[key]}</td>
                </tr>
            })
        });
    }

    render() {
        console.log(this.props)
        return (
            <Table dark className='calc-table'>
                <thead>
                    <tr>
                        <th>Results</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData}
                </tbody>
            </Table>
        )
    }
}

export default connect((state) => (state))(ResultsTable);