import React from 'react';

class CommentInput extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
    }

    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handleContentChange=(event)=>{
        this.setState({
            content:event.target.value
        })
    }

    handleSubmit=()=>{
        if(this.props.onSubmit){
            const {username,content}=this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>UserName:</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Content:</span>
                    <div>
                        <textarea value={this.state.content} onChange={this.handleContentChange}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;