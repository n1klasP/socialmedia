import React, {Component} from 'react';
import "../../css/style.css";

class PostetItem extends Component{
    render() {
        return (
            <div id="post">

                <div id="postAvatar"></div>
                <div id="postUsername">{this.props.postUsername}</div>
                <div id="postTimestamp">{this.props.postTimestamp}</div>
                <div id="postText">{this.props.postText}</div>
            </div>
        );
    }
}

export default PostetItem;