from flask import Flask, request, jsonify
from flask_cors import CORS
from ai import generate_summary

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return """
    <h2>Medical AI Backend is Running ✅</h2>
    <p>Use the frontend to access the application.</p>
    """

@app.route("/summary", methods=["POST"])
def summary():

    data = request.get_json()

    transcript = data.get("transcript")

    result = generate_summary(transcript)

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)

