import React, { useEffect, useState, useContext } from "react";
import "../styles/PageStyle.css";
import EmpRecContext from "./utils/empRecContext";
import useDebounce from "./utils/debounceHook";

function ColumnHeader(props) {
    const [filterSwitch, setFilterSwitch] = useState(false);
    const { handleSort, handleFilter } = useContext(EmpRecContext);
    const [filterVal, setfilterVal] = useState("");
    const debouncedFilterTerm = useDebounce(filterVal, 1000);

    useEffect(() => {
        // if (!filterVal) {
        //   return;
        // }
        console.log(`Filter value is: ${filterVal}`);
        handleFilter(props.column.colname,filterVal);
        // if (debouncedFilterTerm) {
        //   handleFilter(props.column.colname,filterVal);
        // }
      }, [debouncedFilterTerm]);

    function filterClick(event){
        event.preventDefault();
        setFilterSwitch(!filterSwitch);
        // remove the filter value if filter closed
        if(filterSwitch) {setfilterVal("")};
    }

    function handleInputChange(event) {
        setfilterVal(event.target.value);
    }

    return (
        <th scope="col">{props.column.coldesc}
            <div className="btn-group-justified btn-group-sm btn-group-vertical px-2">
                <button type="button" className="btn btn-default" onClick={handleSort} data-colname={props.column.colname} data-sort-order="asc"><i className="fas fa-angle-up"></i></button>
                <button type="button" className="btn btn-default" onClick={handleSort} data-colname={props.column.colname} data-sort-order="des"><i className="fas fa-angle-down"></i></button>
            </div>
            <button type="button" className="btn btn-default" onClick={filterClick} data-colname={props.column.colname} data-filter-switch={filterSwitch}><i class="fas fa-filter"></i></button>
            <input type="text" className={`form-control mt-2 disp-${filterSwitch}`} placeholder={`Enter ${props.column.coldesc}`} onChange={handleInputChange} value={filterVal}></input>
        </th>
    );
}

export default ColumnHeader;