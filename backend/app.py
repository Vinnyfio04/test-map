from pathlib import Path

from flask import Flask, send_from_directory

app = Flask(__name__)
VIEW_DIR = Path(__file__).resolve().parent.parent / "view"


@app.get("/")
def index():
    return send_from_directory(VIEW_DIR, "index.html")


@app.get("/<path:filename>")
def view_file(filename):
    return send_from_directory(VIEW_DIR, filename)


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
