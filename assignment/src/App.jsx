import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterForm from "./RegistrationForm";
import EmployeeList from "./EmployeeList";
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="App">
      <RegisterForm onRegisterSuccess={fetchEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
