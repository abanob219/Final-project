import React from "react";
import Employee from "./Employee";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../searchbar";

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    Employeesss();
  }, []);

  const Employeesss = async () => {
    await axios
      .get("https://statenweb.mockable.io/employees")
      .then((response) => {
        setEmployeesData(response.data);
      });
  };

  if (selectedEmployee) {
    return (
      <div>
        <Employee
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
        />
      </div>
    );
  }
  if (employeesData.length === 0) {
    return <p className="text-center">Loading! Hold your horses... 🐎🐎🐎</p>;
  }
  return (
    <div>
        <h1 className="text-center pt-3 mb-4 employees-h1">Employees</h1>
      <div className="employees-container animate__animated animate__fadeIn d-flex justify-content-center align-items-center">
        <div className="container-fluid w-80">
          <div className="row d-flex justify-content-center align-items-center text-center my-auto">
            {employeesData.map(function (employee) {
              return (
                <div className="cards-width cards-rows px-5">
                  <div className="row">
                    <div className="col">
                      <div key={employee.id} className="card">
                        <div className="card-body">
                          <h5 className="card-title">{employee.name}</h5>
                          <p className="text-muted">{employee.department}</p>
                          <button
                            onClick={() => setSelectedEmployee(employee.id)}
                            className="btn btn-primary mb-2"
                          >
                            About Me
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
