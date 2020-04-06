import React from "react";
import "../styles/PageStyle.css";

function TableDataRow(props) {
    return (
        <tr>
            <td>{props.empData.name}</td>
            <td>{props.empData.jobTitle}</td>
            <td>{props.empData.department}</td>
            <td>{props.empData.empStatus}</td>
            <td>{props.empData.empType}</td>
            <td>{props.empData.stdHours}</td>
            <td>{props.empData.ansal}</td>
            <td>{props.empData.hRate}</td>
        </tr>
    )
};

export default TableDataRow;