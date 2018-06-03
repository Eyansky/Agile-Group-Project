"""
Users endpoint
"""

from flask import Blueprint

# Create the users blueprint
USERS = Blueprint('users', __name__)


@USERS.route('/register', methods=['POST'])
def user_register():
    """
    This method handles user registration
    """
    pass


@USERS.route('/login', methods=['POST'])
def user_login():
    """
    This method handles user login
    """
    pass


@USERS.route('/logout', methods=['POST'])
def user_logout():
    """
    This method handles user logout
    """
    pass
