from app import db
from flaks import request
from flask_restful import Resource
from Server.Models.chaets import CHEATS


class AddCheat(Resource):
    def post(self):

        hack = data.get('hack')
        username = data.get('username')

        # Validating data
        if not hack or not username:
            return {'message': 'Hack and username are required.'}, 400

        # Creating a new cheat object
        new_cheat = CHEATS(hack=hack, username=username)

        # Adding the cheat to the database
        db.session.add(new_cheat)
        db.session.commit()

        return {'message': 'Cheat added successfully.', 'cheat_id': new_cheat.id}, 201