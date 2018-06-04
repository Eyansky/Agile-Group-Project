"""
Comments endpoint
"""

from flask import Blueprint, request, make_response, jsonify
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)

from my_api.endpoints.models import (
    save_comment, all_user_comments, modify_user_comment)

# Create the comments blueprint
COMMENTS = Blueprint('comments', __name__)


@COMMENTS.route('/comments', methods=['POST'])
@jwt_required
def create_comment():
    """
    This method handles comment creation
    """
    # get the post data
    post_data = request.get_json()
    # If no validation errors
    username = get_jwt_identity()
    # Get input data as dictionary
    data = {
        "comment": post_data.get("comment"),
        "username": username
    }
    # save the data into a list
    save_comment(data)
    # return response
    response_object = {
        "status": "success",
        "msg": "New comment has been successfully added.",
        "user": username
    }
    return make_response(jsonify(response_object)), 201


@jwt_required
@COMMENTS.route('/comments', methods=['GET'])
def get_comment():
    """
    This method allows a user to get their own comment(s)
    """
    username = get_jwt_identity()
    comments = all_user_comments(username)
    response_object = {
        "status": "success",
        "comments": comments
    }
    return make_response(jsonify(response_object)), 200


@COMMENTS.route('/comments/<int:comment_id>', methods=['PUT'])
@jwt_required
def edit_comment(self, comment_id):
    """
    This method allows a user to edit their previous comment
    """
    post_data = request.get_json()
    username = get_jwt_identity()
    comment = post_data["comment"]
    modify_user_comment(username, comment_id, comment)
    response_object = {
        "status": 'success',
        "message": "Your request has been updated."
    }
    return make_response(jsonify(response_object)), 201


@COMMENTS.route('/comments/<int:comment_id>', methods=['DELETE'])
@jwt_required
def delete_comment(self, comment_id):
    """
    This method allows a moderator to delete a comment
    """
    # Moderator only
    pass
