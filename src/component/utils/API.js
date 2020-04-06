// import axios from "axios";

export default {
  getEmpRecs: function (colname = "", sortOrder = "none") {

    const empRecs = require("../../mockupdata/empdb.js");
    var empRecsSorted = [];

    if (sortOrder === "asc") {
      // sort ascending
      empRecsSorted = empRecs.slice(0).sort((a, b) => {
        if (a[colname] > b[colname]) {
          return 1;
        }
        else {
          return -1;
        };
      })
    }
    else if (sortOrder === "des") {
      // Sort descending
      empRecsSorted = empRecs.slice(0).sort((a, b) => {
        if (a[colname] > b[colname]) return -1;
        else return 1;
      })
    }
    else {
      // keep original order
      empRecsSorted = empRecs;
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (empRecsSorted === {}) {
          reject(new Error("No Employee Records Found!!!"))
        }
        else {
          resolve(empRecsSorted);
        }
      }, 1000);
    });
  },
  getEmpRecsFiltered: function (colName = "", filterVal = "") {

    return new Promise((resolve, reject) => {
      if (filterVal !== "") {
        // Filter the values
        const empRecs = require("../../mockupdata/empdb.js");

        var filterValConv = "";
        if (typeof (filterVal) === "string") {
          filterValConv = filterVal.toUpperCase();
        }
        else {
          filterValConv = filterVal;
        }

        const empRecFiltered = empRecs.slice(0).filter(empRec => {

          var currentRecVal = toString(empRec[colName]).toUpperCase();
          if (typeof (empRec[colName]) === "string") {
            currentRecVal = empRec[colName].toUpperCase();
          }
          else {
            currentRecVal = empRec[colName].toString();
          }
          if (currentRecVal === filterValConv) {
            return true;
          }
        });

        // wait to simulate API call
        setTimeout(() => {
          if (empRecFiltered === {}) {
            reject(new Error("No Employee Records Found!!!"))
          }
          else {
            resolve(empRecFiltered);
          }
        }, 500);
      }
      else {
        // if filter removed, return all records
        const empRecs = require("../../mockupdata/empdb.js");
        setTimeout(() => {
          if (empRecs === {}) {
            reject(new Error("No Employee Records Found!!!"))
          }
          else {
            resolve(empRecs);
          }
        }, 1000);

      }
    });
  }
};
