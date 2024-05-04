from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


import re
from app import db

class Reply(db.Model):
    __tablename__ = "Reply_table"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cheat_id = db.Column(db.Integer, ForeignKey('Cheats_table.id'), nullable=False)
    username = db.Column(db.String(20), nullable=False)
    comment = db.Column(db.Text, nullable=False)


    def __repr__(self):
        return f"<Reply(id={self.id}, cheat_id={self.cheat_id}, username='{self.username}', comment='{self.comment}')>"
