from flask import Flask, render_template, request
import sqlite3
import os

app = Flask(__name__)

DB_PATH = "/tmp/contact.db"
def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT
        )
    """)
    conn.commit()
    conn.close()

init_db()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["GET", "POST"])
def form():
    if request.method == "POST":
        name = request.form.get("username")
        email = request.form.get("useremail")
        msg = request.form.get("message")

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)",
            (name, email, msg)
        )
        conn.commit()
        conn.close()

        return render_template("success.html", name=name, msg=msg)

    return render_template("form.html")

@app.route("/view")
def view_data():
    conn = get_db_connection()
    data = conn.execute("SELECT * FROM contact").fetchall()
    conn.close()
    return render_template("view.html", data=data)
