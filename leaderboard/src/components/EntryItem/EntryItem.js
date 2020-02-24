import React from "react";
import { Card } from "semantic-ui-react"
import "./EntryItem.css"

const EntryItem = props => {


    return <Card centered
            header= {props.entry.name}
            meta={ props.entry.difficulty} //difficulty
            description={props.entry.time} //time
            />


    // return <Card>
    //             <Card.Header>
    //                 {props.entry.name}
    //             </Card.Header>
    //             <Card.Description> {props.entry.id} </Card.Description>
    //         </Card>
    // return <div className="entry-item">
    //             <div className="content">
    //                 <div className="board">
    //                     <p>{props.entry.name} - {props.entry.phone}</p>
    //                 </div>
    //             </div>
    //     </div>
};

export default EntryItem;