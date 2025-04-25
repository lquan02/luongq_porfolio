# backend/app.py
from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/projects")
def get_projects():
    return jsonify([
        {"title": "Cyber Lab", "desc": "Lab 3: Cryptography", "link": "#"},
        {"title": "ACH Case Study", "desc": "Strategic IT Recommendations", "link": "#"}
    ])

if __name__ == "__main__":
    app.run(debug=True)