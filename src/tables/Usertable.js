import React from "react";

const Usertable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>User Name</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => props.deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No User Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Usertable;
