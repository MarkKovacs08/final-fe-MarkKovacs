let ulStyle = {
  listStyleType: "none",
  padding: 0,
  border: "1px solid #d0d",
};

let liStyle = {
  padding: "8px 16px",
  borderBottom: "1px solid #d0d",
};

let liStyleLastChild = {
  ...liStyle,
  borderBottom: "none",
};

import { Link } from "react-router-dom";

function AllTasksView({tasks}) {
  if (!tasks.length) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <div>There are no tasks.</div>
      </>
    );
  }
  return (
    <>
      <Link to={`/`}><button>Back to Home</button></Link>
      <ul style={ulStyle}>
        {tasks.map((todo, idx) => {
          let styleBool = idx === tasks.length - 1 ? liStyleLastChild : liStyle;
          return <li key={todo.id} style={styleBool}>Task #{idx+1}: {todo.title}</li>;
        })}
      </ul>
    </>
  );

}

export default AllTasksView;