import React from 'react';

class CommentInput extends React.Component {
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>UserName:</span>
                    <div className='comment-field-input'>
                        <input/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>CommentConstent:</span>
                    <div>
                        <textarea/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;