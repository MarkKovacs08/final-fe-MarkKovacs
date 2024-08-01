import { Link } from "react-router-dom";

function AllEmployeesView({employees}) {
    return (
        <>
          <h4>Employee #1: {employees[0]?.name}</h4>
          <Link to={`/`}><button>Back to Home</button></Link>
        </>
    );

}

export default AllEmployeesView;