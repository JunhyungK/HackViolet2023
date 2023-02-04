from flask import Flask
from flask_cors import CORS, cross_origin
import pandas as pd

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"

@app.route('/testing',  methods=['GET', 'POST'])
@cross_origin(origin="*", allow_headers=["Content-Type"])

def parse_csv():
    #Implement parsing here
    return "Hello World"
