import React, { useContext } from "react";
import EmpRecContext from "./utils/empRecContext"
import "../styles/PageStyle.css";
import TabDataRow from "./tableDataRow"

function TableBody() {
    const {empData} = useContext(EmpRecContext);
    return (
        <tbody className="">
            {empData.length >= 1 ? empData.map(empRec => (
                <TabDataRow empData={empRec}/>
            )) : <tr></tr> }
        </tbody>
    )
};

export default TableBody;