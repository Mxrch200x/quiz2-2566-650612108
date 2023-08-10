"use client";

import { Comment } from "@components/Comment";
import { PostOwner } from "@components/PostOwner";
import { Reply } from "@component/Reply";
import { comments } from "@libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner ProfilePic = "profileImages/ProfilePic.jpg" userName = "Artittaya Tieng-arom" studentId = "650612108" post = "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" like = "100"/>

        {/* Comment Example */}
        {comments.map(comments => <Comment userImagePath = {comments.userImagePath} username = {comments.username} commentText = {comments.commentText} likeNum = {comments.likeNum} replies = {comments.replies} key = {comments.id}/>)}

        {/* Reply Example */}
        

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
