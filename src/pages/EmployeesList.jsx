import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`


class EmployeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllEmployees().then(res => {
            this.setState({
                employees: res.data.results,
                isLoading: false,
            })
        })
    }

    render() {
        const { employees, isLoading } = this.state

        const columns = [
            {
                Header: 'First Name',
                accessor: 'name.first',
                filterable: true,
            },
            {
                Header: 'Last Name',
                accessor: 'name.last',
                filterable: true,
            },
            {
                Header: 'Phone',
                accessor: 'cell',
                filterable: true,
            },
            {
                Header: 'Email',
                accessor: 'email',
                filterable: true,
            },
        ]

        let showTable = true
        if (!employees.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={employees}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default EmployeesList
