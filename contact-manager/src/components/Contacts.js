import React, { Component } from 'react'
import Contact from './Contact'

// importing consuner in order to use data from context.js
import { Consumer } from '../context'

class Contacts extends Component {
    
    deleteContact = (id) => {
        // desttructuring
        const { contacts } = this.state;
        // using filter method to get rid of the deleted contact
        const newContacts = contacts.filter(contact => contact.id !== id);
        // assigning new value to the contacts
        this.setState({
            contacts: newContacts
        })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                    <React.Fragment>
                        {contacts.map(contact => (
                        <Contact
                            key={contact.id}
                            contact={contact}
                            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                        />
                    ))}
                    </React.Fragment>
                  )  
                }}
            </Consumer>
        )
    }
}

export default Contacts;
