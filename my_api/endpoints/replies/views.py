"""
Replies endpoint
"""

from flask import Blueprint

# Create the replies blueprint
REPLIES = Blueprint('replies', __name__)


@REPLIES.route('/comments/<comment_id>/reply', methods=['POST'])
def create_reply():
    """
    This method handles reply creation
    """
    pass
