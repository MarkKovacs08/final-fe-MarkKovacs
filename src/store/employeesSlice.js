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
const PATH = "https://jsonplaceholder.typicode.com/";

//Thunk 
export async function fetchEmployees(dispatch, getState) {
    const response = await axios.get(`${PATH}/users`);
    dispatch({ type: 'employees/employeesLoaded', payload: response.data });
}

