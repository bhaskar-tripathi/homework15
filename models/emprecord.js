const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmpDBSchema = new Schema(
  {
    Name: {
      type: String,
      trim: true,
      required: "Enter employee name"
    },
    JobTitle: {
      type: String,
      trim: true,
      required: "Enter employee Job Title"
    },
    Department: {
      type: String,
      trim: true,
      required: "Enter employee Department"
    },
    EmploymentStatus: {
      type: String,
      enum:["FT", "PT"]
    },
    EmployeeType: {
      type: String,
      enum:["Salary", "Hourly"]
    },
    StandardHours: {
      type: Number,
      min: 1,
      max: 24
    },
    AnnualSalary: {
      type: Number
    },
    HourlyRate: {
      type: Number
    }
  }
);

// Getter for Annual Salary
EmpDBSchema.path('AnnualSalary').get(function(num) {
  return (num / 100).toFixed(2);
});
// Getter for Hourly Rate
EmpDBSchema.path('HourlyRate').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter for Annual Salary
EmpDBSchema.path('AnnualSalary').set(function(num) {
  return num * 100;
});
// Setter for Hourly Rate
EmpDBSchema.path('HourlyRate').set(function(num) {
  return num * 100;
});

const EmpRecord = mongoose.model("EmpRecord", EmpDBSchema);

module.exports = EmpRecord;
