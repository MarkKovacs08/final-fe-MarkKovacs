//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api";

//Thunk 
export const fetchEmployees = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}/employees`);
    dispatch({type: 'employees/employeesLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};
//DELETE EMPLOYEE
export const deleteEmployee = employeeId => async dispatch => {
  try{
    await axios.delete(`${PATH}/${employeeId}`);
    //delete succesful so change state with dispatch
    dispatch({type: 'employees/employeeDeleted', payload: employeeId});
  } catch(err) {
    console.error(err);
  }
}; 
/* ADD EMPLOYEE */
export const addEmployee = employee => async (dispatch) => {
  try {
    let res = await axios.post(`${PATH}`, employee);
    dispatch({type: 'employees/employeeCreated', payload: res.data});
    return res.data;
  } catch(err) {
    console.error(err);
  }
};
