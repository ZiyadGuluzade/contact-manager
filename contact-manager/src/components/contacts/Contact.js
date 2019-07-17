import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'

// This is a class based component
class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id})
    }

    render() {
        // desctructuring in a class based component
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    // destructuring, pulling dispatch from value
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}{' '}
                                <i onClick = {() => this.setState({ showContactInfo: 
                                !this.state.showContactInfo})}
                                className="fas fa-caret-down"
                                style={{cursor: 'pointer'}}/>
                                <i className="far fa-trash-alt"
                                style={{cursor: 'pointer', 
                                            float: 'right',
                                            color: 'red'}} 
                                onClick={this.onDeleteClick.bind(this, id, dispatch)}/>    
                            </h4>

                            {showContactInfo ? (
                            <ul className="list-group">
                                <li className="list-group-item">{email}</li> 
                                <li className="list-group-item">{phone}</li> 
                            </ul>) : null}  
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;