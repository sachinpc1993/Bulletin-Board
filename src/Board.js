// { Component } The de-structured component from React
import React, { Component } from 'react'
import Note from './Note'
import { FaPlus } from 'react-icons/fa'

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

        this.add = this.add.bind(this)
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.nextId = this.nextId.bind(this)
    }

    update(newText, i){
        console.log ("Updating new text", i, newText)

        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }))
    }

    add(text){
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note:text
                }
            ]

        }))
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    remove(id){
        console.log("removing item at id", id)
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    // To iterate through each note in the array
    eachNote(Note_temp, i){
        return (
            <Note key={i}
                  index={i}
                  onChange={this.update}
                  onRemove={this.remove}>
                {Note_temp.note}
            </Note>
        )
    }

    render() {
        return (
            <div className="board">

                {this.state.notes.map(this.eachNote)}

                <button onClick={this.add.bind(null,"New Note")}
                        id="add">
                    <FaPlus/>
                </button>
            </div>
        )
    }
}

export default Board
