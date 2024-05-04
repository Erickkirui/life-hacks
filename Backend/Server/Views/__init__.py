from flask import Blueprint
from flask_restful import Api

from Server.Views.cheatviews import AddCheat

api_endpoints = Blueprint('auth', __name__, url_prefix='/api')
api = Api(api_endpoints)

api.add_resource(AddCheat, '/addcheat')