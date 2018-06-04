"""
Data storage in Data Structures
"""
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

# Store the users
USERS_LIST = []
# Store the comments
COMMENTS_LIST = []
# Store the replies to the comments
REPLIES_LIST = []
# Blacklist Tokens
BLACKLIST = set()

# Helper methods


def save_user(data):
    """Add user"""
    data["type"] = "User"
    data["password"] = generate_password_hash(data["password"])
    # save to list
    USERS_LIST.append(data)


def save_comment(data):
    """Add comment to list"""
    data['comment_id'] = len(COMMENTS_LIST) + 1
    data['date_created'] = datetime.datetime.now()
    # save to list
    COMMENTS_LIST.append(data)


def all_user_comments(username):
    """Method to get all user comments based on their usename"""
    comment = [
        comment for comment in COMMENTS_LIST if comment["username"] == username
    ]
    return comment


def get_comment_by_id(username, comment_id):
    """Method to update a previous comment"""
    # call the all comments method
    dicts = all_user_comments(username)
    result = next(
        (item for item in dicts if item["comment_id"] == comment_id), False)
    return result


def modify_user_comment(username, comment_id, comment):
    """Method that modifies a comment"""
    result = get_comment_by_id(username, comment_id)
    result["comment"] = comment
    result["date_updated"] = datetime.datetime.now()


def delete_user_comment(username, comment_id):
    """Method that deletes a user comment by id"""
    result = get_comment_by_id(username, comment_id)
    # remove from list
    COMMENTS_LIST.remove(result)


def check_username(search_username):
    """Check if username exists in USERS_LIST"""
    for find_username in USERS_LIST:
        if find_username["username"] == search_username:
            return True
    return False


def check_username_for_login(search_username):
    """Return user username"""
    for find_username in USERS_LIST:
        if find_username["username"] == search_username:
            return find_username


def login(data):
    """Login method"""
    # Get user dictionary, assign it to variable
    logging_user_details = check_username_for_login(data["username"])
    if check_password_hash(logging_user_details["password"], data["password"]):
        # compare password input to saved password
        return True
    return False
