from flask import Flask, jsonify, request
from flask_cors import CORS
from data import *
from auth import *

app = Flask(__name__)
cors = CORS(app)



@app.route("/", methods=['GET'])
def index():
    metadata = open_file("./assets/metadata.json")
    return jsonify({"data" : metadata})

@app.route("/admin/auth", methods=["GET"])
def adminAuth():
    password =  request.args.get('password')
    print(password)
    if auth(password):
        response = jsonify({"data" : "Yay"})
      
        return response

    response = jsonify({"data" : "Nay"})
   
    return response
   
if __name__ == '__main__':
	app.run(debug=True)