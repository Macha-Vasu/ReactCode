import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Initial state for HR portal
const initialState = {
  employees: [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Jane Smith', position: 'HR Manager', department: 'Human Resources' },
    { id: 3, name: 'Mike Johnson', position: 'Sales Executive', department: 'Sales' },
  ],
};

// Root reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

// Components
const Dashboard = () => (
  <div className="dashboard">
    <h2>HR Portal Dashboard</h2>
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Total Employees</h3>
        <p>3</p>
      </div>
      <div className="stat-card">
        <h3>Departments</h3>
        <p>3</p>
      </div>
    </div>
  </div>
);

const EmployeeList = () => {
  const employees = initialState.employees;
  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav className="navbar">
            <h1>HR Portal</h1>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/employees">Employees</Link></li>
            </ul>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeeList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;






















































// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import logo from './logo.svg';
// import './App.css';

// // Create a simple initial reducer (you can expand this later)
// const initialState = {
//   // your initial state here
// };

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }

// // Create the Redux store
// const store = createStore(rootReducer);

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </Provider>
//   );
// }

// export default App;
