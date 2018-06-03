# Design

The project focuses on the following aspects:

# Users:

Users come in 3 roles: normal users, moderators, and admins. Normal users can only create new comments, and edit the their own comments. Moderators have the added ability to delete comments (to remove trolls), while admins have the ability to edit or delete any comment.
Users can log in and out, and we track when they last logged in

# Comments:

Comments are simply a message, a timestamp, and the author.
Comments can also be a reply, so we'll store what the parent comment was.
