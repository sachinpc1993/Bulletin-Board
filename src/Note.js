import React, { Component } from 'react'
import { FaTrash, FaPen, FaFlag } from 'react-icons/fa'
class Note extends Component {

    constructor(props){
        super(props);
        this.state = {
            editing: false
        };
        this.edit = this.edit.bind(this);
        this.trash = this.trash.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        this.setState({
            editing:true
        })
    }

    trash(){
            this.setState({
                editing:false
            })
    }

    save(){
        alert(this._newText.value);
    }

    renderForm(){
        return(
            <div className="note">
                <form>
                    <textarea ref={input => this._newText = input}/>
                    <button onClick={this.save}><FaFlag/></button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className="note">
                <p>Sticky Notes</p>
                <span>
                    <button onClick={this.edit} id='edit'> <FaPen/> </button>
                    <button onClick={this.trash} id='trash'> <FaTrash/> </button>
                </span>
            </div>
        )
    }

    render(){
        if (this.state.editing){
            return this.renderForm()
        }
        else{
            return this.renderDisplay()
        }
    }
}
export default Note
