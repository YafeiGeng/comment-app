import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                    <div>
                        <p>{this.props.comment.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;