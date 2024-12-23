import { Link } from "react-router-dom";

function AllEmployeesView({employees, deleteEmployee}) {
  if (!employees.length) {
    return (
      <div>There are no employees.</div>
    );
  }
  return (
    <>
      <Link to={`/employees/new`}><button style={{margin: "8px"}}>Add Employee</button></Link>
      <ul>
        {employees.map((user, idx) => (
          <li key={user.id}>Employee #{idx+1}: {user.firstname} <button onClick={() => deleteEmployee(user.id)}>Delete user</button></li>
        ))}
      </ul>
      <Link to={`/`}><button>Back to Home</button></Link>
    </>
  );

}

export default AllEmployeesView;