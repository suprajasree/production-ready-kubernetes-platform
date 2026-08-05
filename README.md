<div align="center">

# 🚀 Production-Ready Kubernetes Platform

### Enterprise-Grade Cloud-Native Application Deployment on Kubernetes

A production-ready DevOps project demonstrating Kubernetes best practices including Deployments, Services, Ingress, Horizontal Pod Autoscaling (HPA), Persistent Volumes, ConfigMaps, Secrets, Network Policies, Helm, Prometheus, and Grafana Monitoring.

![Kubernetes](https://img.shields.io/badge/Kubernetes-v1.34-blue?logo=kubernetes)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Helm](https://img.shields.io/badge/Helm-Package%20Manager-0F1689?logo=helm)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-orange?logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Dashboard-F46800?logo=grafana)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📖 Project Overview

This project demonstrates how a cloud-native application can be deployed on Kubernetes using production-ready DevOps practices.

The platform consists of a Flask backend and a frontend application deployed as Kubernetes workloads. It includes high availability, automatic scaling, persistent storage, monitoring, secure configuration management, and package management using Helm.

The goal of this project is to simulate how applications are deployed and managed in real production Kubernetes clusters.

---

# ✨ Key Features

- Kubernetes Deployments
- ReplicaSets
- Rolling Updates
- Backend & Frontend Services
- NGINX Ingress Controller
- ConfigMaps
- Kubernetes Secrets
- Resource Requests & Limits
- Readiness Probes
- Liveness Probes
- Horizontal Pod Autoscaler (HPA)
- Persistent Volume (PV)
- Persistent Volume Claim (PVC)
- Network Policies
- Prometheus Monitoring
- Grafana Dashboards
- Helm Charts
- Metrics Server Integration

---

# 🛠 Technology Stack

| Category | Technologies |
|-----------|-------------|
| Containerization | Docker |
| Orchestration | Kubernetes |
| Backend | Flask (Python) |
| Frontend | React |
| Web Server | NGINX |
| Monitoring | Prometheus |
| Visualization | Grafana |
| Package Manager | Helm |
| Configuration | ConfigMaps |
| Secrets | Kubernetes Secrets |
| Storage | Persistent Volume & PVC |
| Scaling | Horizontal Pod Autoscaler |
| Networking | Kubernetes Services & Ingress |

---

# 📁 Project Structure

```text
production-ready-kubernetes-platform/
│
├── backend/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│
├── K8s/
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-service.yaml
│   ├── ingress.yaml
│   ├── backend-hpa.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   ├── persistent-volume.yaml
│   ├── persistent-volume-claim.yaml
│   └── network-policy.yaml
│
├── screenshots/
│
└── README.md
```

---

# 🏗 Architecture

This project follows a production-style Kubernetes architecture.

```
                    Internet
                        │
                NGINX Ingress Controller
                        │
         ┌──────────────┴──────────────┐
         │                             │
    Frontend Service              Backend Service
         │                             │
     Frontend Pods               Backend Pods
                                      │
                          ConfigMap + Secret
                                      │
                           Persistent Volume
                                      │
                         Horizontal Pod Autoscaler
                                      │
                      Prometheus + Grafana Monitoring
```

---

# 🚀 Kubernetes Cluster

The application is deployed inside a dedicated Kubernetes namespace.

## Namespace

![](screenshots/01_kubernetes_cluster/namespaces.png)

---

## Worker Nodes

![](screenshots/01_kubernetes_cluster/nodes_ready.png)

---

# 🚀 Backend Deployment

The backend application is deployed using a Kubernetes Deployment with multiple replicas to ensure high availability.

## Backend Deployment

![](screenshots/02_backend_deployment/backend_deployment.png)

---

## Backend Pods

![](screenshots/02_backend_deployment/backend_pods_running.png)

---

## Backend Service

![](screenshots/02_backend_deployment/backend_service.png)

---

## Healthy Backend Pods

![](screenshots/02_backend_deployment/clean_backend_pods.png)

---

# 📈 Horizontal Pod Autoscaler (HPA)

The backend application is configured with a **Horizontal Pod Autoscaler (HPA)** to automatically adjust the number of running pods based on CPU utilization.

### Features

- Minimum Replicas: **2**
- Maximum Replicas: **10**
- Target CPU Utilization: **50%**
- Automatic Scale Up
- Automatic Scale Down

---

## HPA Created

![](screenshots/03_hpa_autoscaling/hpa_created.png)

---

## Metrics Server Working

The Kubernetes Metrics Server provides CPU and memory metrics required by the Horizontal Pod Autoscaler.

![](screenshots/03_hpa_autoscaling/metrics_working.png)

---

## HPA Scaling

During load testing, Kubernetes automatically increased the number of backend pods based on CPU utilization.

![](screenshots/03_hpa_autoscaling/hpa_scaling.png)

---

## Cluster Status After Autoscaling

This screenshot shows the Kubernetes cluster status after the HPA successfully scaled the backend deployment.

![](screenshots/03_hpa_autoscaling/kubernetes-cluster-status-and-autoscaling.png)

---

# 🌐 Kubernetes Networking

The application uses Kubernetes Services to expose both frontend and backend workloads within the cluster.

### Components

- Backend Service
- Frontend Service
- ClusterIP
- LoadBalancer
- NGINX Ingress

---

# 🚦 Ingress Configuration

An NGINX Ingress Controller is configured to route external HTTP requests to the appropriate backend services.

## Ingress Resource

![](screenshots/04_ingress/ingress-configuration.png)

---

## Kubernetes Services

The frontend and backend services are exposed through Kubernetes Services.

![](screenshots/04_ingress/services.png)

---

# 🔄 Rolling Updates

Rolling Updates ensure zero-downtime deployments by gradually replacing old pods with new ones.

### Benefits

- Zero downtime
- Controlled rollout
- Automatic rollback support
- High availability

---

## Rolling Update History

![](screenshots/04_ingress/rolling-update-history.png)

---

# 📊 Monitoring & Observability

To monitor the Kubernetes cluster and application health, the project integrates:

- Prometheus
- Grafana
- Kubernetes Metrics Server

These tools provide real-time visibility into:

- CPU Usage
- Memory Usage
- Pod Status
- Cluster Health
- Node Metrics
- Application Performance

---

# 📈 Grafana Dashboard

Grafana provides interactive dashboards for visualizing Kubernetes cluster metrics collected by Prometheus.

## Kubernetes Dashboard

![](screenshots/05_monitoring/grafana-kubernetes-dashboard.png)

---

# 📌 Monitoring Benefits

✔ Real-time cluster monitoring

✔ CPU and Memory visualization

✔ Resource utilization tracking

✔ Faster troubleshooting

✔ Production-ready observability

---

