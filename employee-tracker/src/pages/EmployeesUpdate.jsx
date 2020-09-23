import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class EmployeesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
        }
    }

    handleChangeInputFirstName = async event => {
        const firstname = event.target.value
        this.setState({ firstname })
    }

    handleChangeInputLastName = async event => {
        const lastname = event.target.value
        this.setState({ lastname })
    }

    handleChangeInputPhone = async event => {
        const phone = event.target.value
        this.setState({ phone })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleUpdateEmployee = async () => {
        const { id, firstname, lastname, phone, email } = this.state
        const payload = { firstname, lastname, phone, email }

        await api.updateEmployeeById(id, payload).then(res => {
            window.alert(`Employee updated successfully`)
            this.setState({
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const employee = await api.getEmployeeById(id)

        this.setState({
            firstname: employee.data.data.firstname,
            lastname: employee.data.data.lastname,
            phone: employee.data.data.phone,
            email: employee.data.data.email,
        })
    }

    render() {
        const { firstname, lastname, phone, email } = this.state
        return (
            <Wrapper>
                <Title>Create Employee</Title>

                <Label>First Name: </Label>
                <InputText
                    type="text"
                    value={firstname}
                    onChange={this.handleChangeInputFirstName}
                />

                <Label>Last Name: </Label>
                <InputText
                    type="text"
                    value={lastname}
                    onChange={this.handleChangeInputLastName}
                />

                <Label>Phone: </Label>
                <InputText
                    type="text"
                    value={phone}
                    onChange={this.handleChangeInputPhone}
                />

                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Button onClick={this.handleUpdateEmployee}>Update Employee</Button>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EmployeesUpdate
