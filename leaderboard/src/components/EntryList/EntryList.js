import React from "react";

import "./EntryList.css";
import EntryItem from "../EntryItem";
import entriesApi from "../../apis/entries";



class EntryList extends React.Component {
    state = { entries: [] };

    componentDidMount() {
        this.fetchEntries();
    }

    render(){
        console.log(this.state)
        return this.state.entries.length !== 0 ? this.renderList() : this.loader();
        // return this.renderList();
    }

    loader = () => <div>No entries yet...</div>;

    renderList = () => (
        <div className="entry-list">
            {this.state.entries.map(entry => (
                <EntryItem 
                key = {entry.name + entry.id}
                entry = {entry}
                />
            ))}
        </div>
    );

    fetchEntries() {
        // entriesApi.getEntries().then(entries => this.setState({ entries }));
        this.setState({entries: [{id : 0, name: "stefan", email: "sa", phone: 1}] });
    }

}

export default EntryList; 