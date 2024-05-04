from app import db
from flask import request
from flask_restful import Resource
from Server.Models.chaets import CHEATS
from datetime import datetime, date 


class AddCheat(Resource):
    def post(self):
        data = request.get_json()

        hack = data.get('hack')
        username = data.get('username')

        # Validating data
        if data is None:
            return {'message': 'No JSON data provided in the request body.'}, 400

        # Creating a new cheat object
        new_cheat = CHEATS(hack=hack, username=username)

        # Adding the cheat to the database
        db.session.add(new_cheat)
        db.session.commit()

        return {'message': 'Cheat added successfully.', 'cheat_id': new_cheat.id}, 201

class GetCheatsByTime(Resource):
    def get(self):
        # Retrieve all cheats ordered by the latest created cheats being on top
        cheats = CHEATS.query.order_by(CHEATS.id.desc()).all()

        # Convert cheats to a JSON format
        cheats_list = [
            {
                'id': cheat.id,
                'hack': cheat.hack,
                'username': cheat.username,
                'likes': cheat.likes,
                'dislikes': cheat.dislikes,
                'reports': cheat.reports
            }
            for cheat in cheats
        ]

        return {"All Cheats":cheats_list}, 200

class GetCheatsByLikes(Resource):
    def get(self):
        # Retrieve cheats ordered by the most likes
        cheats = CHEATS.query.order_by(CHEATS.likes.desc()).all()

        # Convert cheats to a JSON format
        cheats_hot = [
            {
                'id': cheat.id,
                'hack': cheat.hack,
                'username': cheat.username,
                'likes': cheat.likes,
                'dislikes': cheat.dislikes,
                'reports': cheat.reports
            }
            for cheat in cheats
        ]

        return {"Hot": cheats_hot }, 200