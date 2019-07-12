import React, { Component } from 'react'
import Contact from './Contact'
class Contacts extends Component {
    // creating state of the component
    constructor() {
        super();
        this.state = {
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
    }

    render() {
        // destructuring the state
        const { contacts } =this.state;

        return (
            <div>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </div>
        )
    }
}

export default Contacts;
