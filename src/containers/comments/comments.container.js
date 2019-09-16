import React from 'react';
import {CommentsHeader} from "./comments-header/comments-header.component";
import { AddComment } from './add-comment/add-comment.container';
import { Comment } from './comment/comment.container';

export class Comments extends React.Component {
  render() {
    return(
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
        <AddComment />
        <Comment />
        <Comment />
      </div>
    );
  }
}