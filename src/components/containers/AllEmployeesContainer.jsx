import AllEmployeesView from "../views/AllEmployeesView";

function AllEmployeesContainer() {
    let employees = [{id: 24567, name: "Melissa"}, {id: 4848, name: "Joe"}];
    return (
       <AllEmployeesView employees={employees} />
    );

}

export default AllEmployeesContainer;