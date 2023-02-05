from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"


@app.route('/testing',  methods=['GET', 'POST'])
@cross_origin(origin="*", allow_headers=["Content-Type"])
def parse_csv():
    df = pd.read_csv('companies.csv', skiprows=1)
    new_arr = df.to_numpy()
    new_arr = new_arr.tolist()

    names = []
    male = []
    female = []

    for i in range (len(new_arr)):
        names.append(new_arr[i][0]) 
        male.append(new_arr[i][1])
        female.append(new_arr[i][2])

    return {"companyName": names, "maleSalary":male, "femaleSalary": female}
        


if __name__ == '__main__':
    app.run(debug=True)