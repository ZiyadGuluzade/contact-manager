import React, {Component} from 'react';
const Context = React.createContext();

export class Provider extends Component {
    // creating global state
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

    render() {
        return (
            // using context provider to access state from any other component in the app
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;