import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)

# Database helper function
def get_db_connection():
    conn = sqlite3.connect('ecommerce.db')
    conn.row_factory = sqlite3.Row  # Allows column names to be accessed as dictionary keys
    return conn

# Initialize the database (only run once to create the DB file and tables)
def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            price REAL NOT NULL,
            image TEXT,
            icon TEXT
        )
    ''')
    conn.commit()
    conn.close()

# Initialize the database directly
if __name__ == '__main__':
    init_db()  # Initialize the database when the app starts
    app.run(debug=True)
