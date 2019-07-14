import React, { Component } from 'react'
import Contact from './Contact'
class Contacts extends Component {
    // creating state of the component
    state = {
            contacts: [
                {
                    id: 1,
                    name: 'Ziyad Guluzade',
                    email: 'ziyad@gmail.com',
                    phone: '555-55-55'
                },
                {
                    id: 2,
                    name: 'Nijad Talib',
                    email: 'nigel@gmail.com',
                    phone: '444-44-44'
                },
                {
                    id: 3,
                    name: 'Marshall Matters',
                    email: 'm&m@gmail.com',
                    phone: '333-33-33'
                }
            ]
        }

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
        // destructuring the state
        const { contacts } =this.state;

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
    }
}

export default Contacts;
