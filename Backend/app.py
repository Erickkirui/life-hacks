import os
from flask import Flask
from config import app_config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import text
from flask_cors import CORS



db = SQLAlchemy()
app = Flask(__name__)
CORS(app)
jwt = JWTManager()



def initializing_models():
    pass
    

def initializing_views():
    pass

def create_app(config_name):
    app.config.from_object(config_name)

    app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///app.db'
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config['PROPAGATE_EXCEPTIONS'] = True
    
  
    # Initialize the db with the app
    db.init_app(app)
    migrate = Migrate(app, db)
    jwt.init_app(app)
    
     # Create or upgrade the database schema
    with app.app_context():
        
        initializing_models()
        db.create_all()
        
    #initialize endpoints
    initializing_views()

    return app