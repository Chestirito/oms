import React from "react";
import "./DisplayUsers.css";
import ReactTable from "react-table";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DisplayUsers = props => (
        <ReactTable
        data={props.name}
        columns={[
            {
                Header: "Username",
                accessor: "username"
            },
            {
                Header: "First Name",
                accessor: "firstName"
            },
            {
                Header: "Last Name",
                accessor: "lastName"
            },
          ]
        }
        defaultPageSize={15}
        className="-striped -highlight"
        showPagination= {false}
        //defaultPageSize={this.state.data.length}
        
    />
);

export default DisplayUsers;
