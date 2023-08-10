import { Reply } from "@components/Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>

            {likeNum > 0 &&
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum} คน</span>
            </div>
            }
          {replies.map(Reply => < Reply userImagePath = {Reply.userImagePath} username = {Reply.username} commentText = {Reply.commentText} likeNum = {Reply.likeNum} replies = {Reply.replies} key = {Reply.id} />)}
          </div>
        </div>

  );
};
