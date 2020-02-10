import React from "react";


const EntryItem = props => {

    console.log(props);
    console.log("dsafa");

return <div className="entry-item">
            <div className="content">
                <div className="board">
                    <p>{props.entry.name} - {props.entry.phone}</p>
                </div>
            </div>
    </div>
};

export default EntryItem;