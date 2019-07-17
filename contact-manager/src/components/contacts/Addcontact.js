import React, { Component } from 'react'

class Addcontact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                name="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email..." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..." />
                        </div>
                        <input value="Add Contact" type="submit" 
                            className="btn btn-light btn-block" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Addcontact;
