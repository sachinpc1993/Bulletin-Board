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

    /**
     * @desc Function to maintain states
     */
    edit() {
        this.setState({
            editing:true
        })
    }

    /**
     * @desc Reacts to the onRemove callback in the <Note>.
     * Also updates the editing flag
     * @return <Note> elements with callbacks
     */
    trash(){
        this.setState({
            editing:false
        })
        this.props.onRemove(this.props.index)
    }

    /**
     * @desc Saves the modified note text
     * Updates editing state to false
     * @param e
     * @return <Note> elements with callbacks
     */
    save(e){
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState ({
            editing:false
        })
    }

    /**
     * @desc Form rendering
     * @return Form returned to React component
     */
    renderForm(){
        return(
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input}/>
                    <button id="save"><FaFlag/></button>
                </form>
            </div>
        )
    }

    /**
     * @desc Display rendering
     * @return <button> elements with callbacks
     */
    renderDisplay() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id='edit'> <FaPen/> </button>
                    <button onClick={this.trash} id='remove'> <FaTrash/> </button>
                </span>
            </div>
        )
    }

    render(){

        // The controller logic
        if (this.state.editing){
            return this.renderForm()
        }
        else{
            return this.renderDisplay()
        }
    }
}
export default Note
