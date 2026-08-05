import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        setDashboard(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  if (!dashboard) {
    return (
      <div className="container">
        <h1>Loading CloudOps Control Center...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h1>☁️ CloudOps Control Center</h1>
        <p>Production-Ready Kubernetes Platform</p>
      </header>

      <div className="grid">

        <div className="card">
          <h3>Application</h3>
          <p>{dashboard.application}</p>
        </div>

        <div className="card">
          <h3>Status</h3>
          <p className="healthy">{dashboard.status}</p>
        </div>

        <div className="card">
          <h3>Environment</h3>
          <p>{dashboard.environment}</p>
        </div>

        <div className="card">
          <h3>Version</h3>
          <p>{dashboard.version}</p>
        </div>

        <div className="card">
          <h3>Cluster</h3>
          <p>{dashboard.cluster}</p>
        </div>

        <div className="card">
          <h3>Running Pods</h3>
          <p>{dashboard.replicas}</p>
        </div>

        <div className="card">
          <h3>Deployment Strategy</h3>
          <p>{dashboard.deploymentStrategy}</p>
        </div>

        <div className="card">
          <h3>Hostname</h3>
          <p>{dashboard.hostname}</p>
        </div>

        <div className="card">
          <h3>CPU Usage</h3>
          <p>{dashboard.cpuUsage}</p>
        </div>

        <div className="card">
          <h3>Memory Usage</h3>
          <p>{dashboard.memoryUsage}</p>
        </div>

        <div className="card">
          <h3>Last Deployment</h3>
          <p>{dashboard.lastDeployment}</p>
        </div>

      </div>

      <footer>
        Powered by Docker • Kubernetes • Flask • React
      </footer>
    </div>
  );
}

export default App;