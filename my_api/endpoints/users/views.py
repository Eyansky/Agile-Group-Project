"""
Users endpoint
"""

from flask import Blueprint, request, make_response, jsonify
from flask_jwt_extended import (
    create_access_token, jwt_required, get_raw_jwt, get_jwt_identity)

from my_api.endpoints.models import check_username, save_user, login, BLACKLIST

# Create the users blueprint
USERS = Blueprint("users", __name__)


@USERS.route("/register", methods=["POST"])
def user_register():
    """
    This method handles user registration
    """
    # get the post data
    post_data = request.get_json()
    input_username = post_data.get("username")
    # check if username exists
    if check_username(input_username):
        response_object = {
            "status": "fail",
            "message": "Sorry, username '{}' already exists.".format(
                input_username)
        }
        return make_response(jsonify(response_object)), 400
    # Get input data as dictionary
    data = {
        "username": post_data.get("username"),
        "password": post_data.get("password")
    }
    # save the data into a list
    save_user(data)
    # return response
    response_object = {
        "status": "success",
        "message": "Account for '{}' has been created.".format(
            data["username"])
    }
    return make_response(jsonify(response_object)), 201


@USERS.route('/login', methods=['POST'])
def user_login():
    """
    This method handles user login
    """
    # get the post data
    post_data = request.get_json()
    # Get username
    input_username = post_data.get("username")
    # check if username exists
    if not check_username(input_username):
        response_object = {
            "status": "fail",
            "message": "Sorry, username '{}' does not exist.".format(
                input_username)
        }
        return make_response(jsonify(response_object)), 400

    # Get input data as dictionary
    data = {
        "username": post_data.get("username"),
        "password": post_data.get("password")
    }
    # If login is successful
    if login(data):
        access_token = create_access_token(identity=data["username"])
        response_object = {
            "status": 'success',
            "message": "Hey '{}', you have successfully logged in.".format(
                data['username']),
            "token": access_token
        }
        return make_response(jsonify(response_object)), 200
    # Failed login - password
    response_object = {
        "status": "fail",
        "message": "Wrong login credentials."
    }
    return make_response(jsonify(response_object)), 422


@USERS.route('/logout', methods=['POST'])
@jwt_required
def user_logout():
    """
    This method handles user logout
    """
    user = get_jwt_identity()
    jti = get_raw_jwt()['jti']
    BLACKLIST.add(jti)
    response_object = {
        "status": 'success',
        "message": "Bye '{}', you have successfully logged out.".format(user),
    }
    return make_response(jsonify(response_object)), 200
