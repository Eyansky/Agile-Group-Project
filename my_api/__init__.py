"""
Create flask app
"""

from flask import Flask, jsonify

APP = Flask(__name__)

from my_api.endpoints.users.views import USERS
from my_api.endpoints.comments.views import COMMENTS
from my_api.endpoints.replies.views import REPLIES

APP.register_blueprint(USERS)
APP.register_blueprint(COMMENTS)
APP.register_blueprint(REPLIES)
