import React, { Component } from 'react'
import PropTypes from 'prop-types'

// This is a class based component
class Contact extends Component {
    render() {
        // desctructuring in a class based component
        const { name, email, phone } = this.props.contact;

        return (
            <div className="card card-body mb-3">
                <h4>{name} <i class="fas fa-caret-right"></i></h4>
                <ul className="list-group">
                   <li className="list-group-item">{email}</li> 
                   <li className="list-group-item">{phone}</li> 
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;