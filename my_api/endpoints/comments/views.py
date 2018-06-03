"""
Comments endpoint
"""

from flask import Blueprint

# Create the comments blueprint
COMMENTS = Blueprint('comments', __name__)


@COMMENTS.route('/comments', methods=['POST'])
def create_comment():
    """
    This method handles comment creation
    """
    pass


@COMMENTS.route('/comments', methods=['GET'])
def get_comment():
    """
    This method allows a user to get their own comment(s)
    """
    pass


@COMMENTS.route('/comments/<comment_id>', methods=['PUT'])
def edit_comment():
    """
    This method allows a user to edit their previous comment
    """
    pass


@COMMENTS.route('/comments/<comment_id>', methods=['DELETE'])
def delete_comment():
    """
    This method allows a moderator to delete a comment
    """
    # Moderator only
    pass
