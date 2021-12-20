import React, { useEffect, useState } from "react";
import axios from "axios";

const Employee = ({ selectedEmployee, setSelectedEmployee }) => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    Employeesss();
  }, [selectedEmployee]);
  const Employeesss = async () => {
    await axios
      .get(`https://statenweb.mockable.io/employee/${selectedEmployee}`)
      .then((response) => {
        setEmployeeData(response.data);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-md-3">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="card fitcontent p-2 mx-3">
              <div className="w-25 d-flex justify-content-center align-items-center  ">
                <div className="card">
                  <img
                    src={employeeData.photo}
                    className="img-fluid img-thumbnail"
                    alt="Picture of Employee"
                  />
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{employeeData.name}</h5>
                <p className="text-muted">
                  Role: {employeeData.role}
                  <br />
                  Department: {employeeData.department}
                  <br />
                  Started on {employeeData.startDate}
                </p>
                <button
                  onClick={() => setSelectedEmployee(null)}
                  className="btn btn-primary mb-2"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
