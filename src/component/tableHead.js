import React from "react";
import "../styles/PageStyle.css";
import ColumnHeader from "./columnHeader";

function TableHead() {
    const columns = require("../mockupdata/tabColumns");;
    return (
        <thead className=" ">
            <tr >
                {columns.map(column => (
                    <ColumnHeader column={column}/>
                ))}
            </tr>
        </thead>
    )
};

export default TableHead;