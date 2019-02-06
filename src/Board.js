// { Component } The de-structured component from React
import React, { Component } from 'react'
import Note from './Note'

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes : [
                {
                    id:0,
                    note:"Ring up Sachin"
                },
                {
                    id:1,
                    note:"Bring apples"
                }
            ]
        }

        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
    }

    update(newText, i){
        console.log ("Updating new text", i, newText)

        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }))
    }

    // To iterate through each note in the array
    eachNote(note, i){
        return (
            <Note key={i}
                  index={i}
                    onChange={this.update}>
                {note.note}
                </Note>
        )
    }

    render() {
        return (
            <div className={'board'}>
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board
