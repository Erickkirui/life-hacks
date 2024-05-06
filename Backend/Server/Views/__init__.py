from flask import Blueprint
from flask_restful import Api

from Server.Views.cheatviews import AddCheat,GetCheatsByTime,GetCheatsByLikes,UpdateCheat

api_endpoints = Blueprint('auth', __name__, url_prefix='/api')
api = Api(api_endpoints)

api.add_resource(AddCheat, '/addcheat')
api.add_resource(UpdateCheat, '/updatecheat/<int:cheat_id>')
api.add_resource(GetCheatsByTime,'/viewcheats')
api.add_resource(GetCheatsByLikes,'/hot')

