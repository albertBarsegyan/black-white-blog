import React from 'react'
import CommentItem from './CommentItem';
import CommonButton from '../CommonButton';
import { Input } from '@material-ui/core';
import { func, array } from 'prop-types';
export default function CommentContainer({
  commentList,
  onSubmit,
  onClick,
  onChange,
}) {
  return (
    <div>
      <div className="text-center my-5">
        <span className="text-gray-600 text-2xl">Comments</span>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center w-full gap-3">
          <div className="w-3/4 md:w-1/2">
            <Input
              name="comment"
              fullWidth={true}
              placeholder="Type your comment"
            />
          </div>
          <div>
            <CommonButton type="submit" buttonInnerText="Add comment" />
          </div>
        </div>
      </form>

      <ul>
        {commentList && commentList.length > 0 ? (
          commentList.map((commentObject) => (
            <CommentItem
              key={commentObject.id}
              commentEmail={commentObject.commentWriter}
              comment={commentObject.comment}
              onClick={() => onClick(commentObject.id)}
              onChange={(targetValue) =>
                onChange([commentObject.id, targetValue])
              }
            />
          ))
        ) : (
          <li>
            <div className="text-center my-5">
              <span className="text-4xl">There is no comments yet</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
// proptype rules
CommentContainer.propTypes = {
  commentList: array.isRequired,
  onSubmit: func.isRequired,
  onClick: func.isRequired,
  onChange: func.isRequired,
};