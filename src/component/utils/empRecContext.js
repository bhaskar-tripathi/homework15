import React from "react";

const UserContext = React.createContext({
  // Name: "",
  // JobTitle: "",
  // Department: "",
  // EmploymentStatus: "",
  // EmployeeType: "",
  // StandardHours: "",
  // AnnualSalary: "",
  // HourlyRate: "",
  empData: [],
  handleSort: () => {},
  handleFilter: () => {}
});

export default UserContext;
