import React from "react";


const EntryItem = props => (
    <div className="entry-item">
        <div className="ui card">
            <div className="content">
                <div className="header">
                    {props.entry.name} - {props.entry.phone}
                </div>
            </div>
        </div>
    </div>
);

export default EntryItem;