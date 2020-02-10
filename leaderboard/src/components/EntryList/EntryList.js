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
        return this.state.entries ? this.renderList() : this.loader();
    }

    loader = () => <div>No entries yet...</div>;

    renderList = () => (
        <div className="entry-list">
            {this.state.entries.map(entry => (
                <EntryItem 
                key = {entry.id}
                entry = {entry}
                delete = {this.deleteEntry}
                />
            ))}
        </div>
    );

    fetchEntries() {
        entriesApi.getEntries().then(entries => this.setState({ entries }));
    }

    deleteEntry = id => {
        entriesApi.deleteEntry(id).then(() => this.fetchEntries());
    }

}

export default EntryList;