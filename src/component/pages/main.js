import React, { useEffect, useState } from "react";
import Header from "../../component/header";
import TableViewer from "../../component/tableViewer";
import "../../styles/PageStyle.css";
import EmpRecContext from "../utils/empRecContext";
import API from "../utils/API.js";

function MainPage() {
    const [empRecsState, setEmpRecsState] = useState({
        empData: []
    });

    // When the component mounts, a call will be made to get employee records
    useEffect(() => {
        //console.log("before emp Data:");
        loadEmployeeRecs();
    }, []);

    function loadEmployeeRecs(colName,sortOrder) {
        //console.log(empRecsState);
        API.getEmpRecs(colName,sortOrder)
            .then((response) => {
                setEmpRecsState(response);
                //console.log(response);
            })
            .catch(err => console.log(err))
    }

    function handleSort(event) {
        event.preventDefault();
        event.persist();
        loadEmployeeRecs(event.currentTarget.dataset.colname,event.currentTarget.dataset.sortOrder);
    };

    function handleFilter(colName,filterVal) {
        API.getEmpRecsFiltered(colName,filterVal)
        .then((response) => {
            setEmpRecsState(response.slice(0));
            //console.log(response);
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="container-fluid ">
            <EmpRecContext.Provider value={{ empData: empRecsState, handleSort: handleSort, handleFilter: handleFilter }}>
                <Header />
                <TableViewer />
            </EmpRecContext.Provider>

        </div>
    );
}

export default MainPage;
