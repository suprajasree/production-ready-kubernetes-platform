import os
import socket
from datetime import datetime

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

APP_NAME = os.getenv("APP_NAME", "Inventory Service")
APP_VERSION = os.getenv("APP_VERSION", "1.0.0")
APP_ENV = os.getenv("APP_ENV", "Production")


@app.route("/")
def dashboard():
    return jsonify({
        "application": APP_NAME,
        "status": "Healthy",
        "environment": APP_ENV,
        "version": APP_VERSION,
        "cluster": "Kubernetes",
        "replicas": 3,
        "deploymentStrategy": "Rolling Update",
        "hostname": socket.gethostname(),
        "lastDeployment": datetime.now().strftime("%d-%b-%Y %H:%M:%S"),
        "cpuUsage": "24%",
        "memoryUsage": "38%"
    })


@app.route("/health")
def health():
    return jsonify({
        "status": "UP",
        "timestamp": datetime.utcnow().isoformat(),
        "hostname": socket.gethostname()
    }), 200


@app.route("/version")
def version():
    return jsonify({
        "application": APP_NAME,
        "version": APP_VERSION
    })


@app.route("/info")
def info():
    return jsonify({
        "application": APP_NAME,
        "environment": APP_ENV,
        "pythonVersion": os.sys.version,
        "hostname": socket.gethostname(),
        "cluster": "Kubernetes"
    })


@app.route("/metrics")
def metrics():
    return jsonify({
        "cpuUsage": "24%",
        "memoryUsage": "38%",
        "requestsPerMinute": 156,
        "uptime": "12h 35m",
        "status": "Healthy"
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)