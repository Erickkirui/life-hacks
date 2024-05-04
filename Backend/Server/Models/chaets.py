from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from sqlalchemy.orm import validates
from Server.Models.Reply import Reply

import re
from app import db 

class CHEATS(db.Model):
    __tablename__="Cheats_table"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    hack = db.Column(db.Text, nullable=False)
    username = db.Column(db.String(20), unique=True, nullable=False)
    likes = db.Column(db.Integer, default=0)
    dislikes = db.Column(db.Integer, default=0)
    reports = db.Column(db.Integer, default=0)

    # Relationship
    replies = db.relationship(Reply, backref='cheats')


    @validates('username')
    def validate_username(self, key, username):
        # Validate username length
        if len(username) > 20:
            raise ValueError("Username must be less than or equal to 20 characters.")
        return username

    @validates('hack')
    def validate_hack(self, key, hack):
        # Validate hack length
        if len(hack) < 5:
            raise ValueError("Hack must be at least 5 characters long.")
        return hack



    def __repr__(self):
        return f"<CHEATS(id={self.id}, hack='{self.hack}', username='{self.username}', likes={self.likes}, dislikes={self.dislikes}, reports={self.reports})>"
