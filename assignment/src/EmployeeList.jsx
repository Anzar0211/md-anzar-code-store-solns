import React from "react";
import "./styles.css";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
