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

    save(e){
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState ({
            editing:false
        })
    }

    renderForm(){
        return(
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input}/>
                    <button><FaFlag/></button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id='edit'> <FaPen/> </button>
                    <button onClick={this.trash} id='trash'> <FaTrash/> </button>
                </span>
            </div>
        )
    }

    render(){

        // THe controller logic
        if (this.state.editing){
            return this.renderForm()
        }
        else{
            return this.renderDisplay()
        }
    }
}
export default Note
