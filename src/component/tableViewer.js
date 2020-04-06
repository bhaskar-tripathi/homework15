import React from "react";
import "../styles/PageStyle.css";
import TableHead from "./tableHead";
import TableBody from "./tableBody"

function TableViewer() {
    return (

        <div className="row ">
            <div className="col tableFixHead" >
                <table className="table "  >
                    <TableHead/>
                    <TableBody/>
                </table>
            </div>

        </div>

    )
};

export default TableViewer;