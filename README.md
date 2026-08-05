# 🚀 Production-Ready Kubernetes Platform

A production-ready cloud-native application deployed on Kubernetes with best practices including Deployments, Services, Ingress, HPA, ConfigMaps, Secrets, Persistent Volumes, Network Policies, Prometheus, Grafana, and Helm.

---

# 📌 Project Overview

This project demonstrates how a modern microservice application is deployed on Kubernetes using production-ready architecture.

## Tech Stack

- Kubernetes
- Docker
- Flask
- React
- Python
- Nginx
- Helm
- Prometheus
- Grafana
- ConfigMaps
- Secrets
- Persistent Volumes
- Horizontal Pod Autoscaler
- Network Policies

---

# 📂 Project Structure

```
production-ready-kubernetes-platform
│
├── backend/
├── frontend/
├── K8s/
├── screenshots/
└── README.md
```

---

# 🏗 Architecture

> Add your architecture diagram here.

```
architecture/
```

---

# 🚀 Features

- Kubernetes Deployments
- ReplicaSets
- Rolling Updates
- Services
- Ingress Controller
- ConfigMaps
- Secrets
- Resource Requests & Limits
- Liveness Probe
- Readiness Probe
- Horizontal Pod Autoscaler
- Persistent Volumes
- Persistent Volume Claims
- Network Policies
- Helm Deployment
- Prometheus Monitoring
- Grafana Dashboards

---

# 1️⃣ Kubernetes Cluster

## Namespaces

![](screenshots/01_kubernetes_cluster/namespaces.png)

---

## Nodes Ready

![](screenshots/01_kubernetes_cluster/nodes_ready.png)

---

# 2️⃣ Backend Deployment

## Backend Deployment

![](screenshots/02_backend_deployment/backend_deployment.png)

---

## Backend Pods Running

![](screenshots/02_backend_deployment/backend_pods_running.png)

---

## Backend Service

![](screenshots/02_backend_deployment/backend_service.png)

---

## Clean Backend Pods

![](screenshots/02_backend_deployment/clean_backend_pods.png)

---

# 3️⃣ Horizontal Pod Autoscaler

## HPA Created

![](screenshots/03_hpa_autoscaling/hpa_created.png)

---

## Metrics Server Working

![](screenshots/03_hpa_autoscaling/metrics_working.png)

---

## Autoscaling

![](screenshots/03_hpa_autoscaling/hpa_scaling.png)

---

## Kubernetes Cluster Status & Autoscaling

![](screenshots/03_hpa_autoscaling/kubernetes-cluster-status-and-autoscaling.png)

---

# 4️⃣ Ingress

## Ingress Configuration

![](screenshots/04_ingress/ingress-configuration.png)

---

## Services

![](screenshots/04_ingress/services.png)

---

## Rolling Update History

![](screenshots/04_ingress/rolling-update-history.png)

---

# 5️⃣ Monitoring

## Grafana Dashboard

![](screenshots/05_monitoring/grafana-kubernetes-dashboard.png)

---

# 6️⃣ CloudOps Dashboard

![](screenshots/06_dashboard/cloudops-dashboard.png)

---

# 7️⃣ Persistent Storage

## Persistent Volume Claim

![](screenshots/10_volumes/persistent-volume-claim.png)

---

# 8️⃣ Network Policy

![](screenshots/11_network_policy/network-policy.png)

---

# 9️⃣ Helm

## Helm List

![](screenshots/09_helm/helm-list.png)

---

## Helm Releases

![](screenshots/09_helm/helm-releases.png)

---

## Helm History

![](screenshots/09_helm/helm-frontend-history.png)

---

## Kubernetes Resources After Helm

![](screenshots/09_helm/kubernetes-resources-after-helm.png)

---

## Kubernetes After Helm

![](screenshots/09_helm/kubernetes-after-helm.png)

---

# 📊 Monitoring

- Prometheus
- Grafana
- Kubernetes Metrics Server

---

# 🔐 Security

- ConfigMaps
- Secrets
- Network Policies

---

# 📦 Storage

- Persistent Volume
- Persistent Volume Claim

---

# ⚡ Autoscaling

- Horizontal Pod Autoscaler
- CPU Based Scaling

---

# 🚀 Deployment

```bash
kubectl apply -f K8s/
```

---

# 📈 Monitoring

```bash
kubectl top pods
kubectl top nodes
```

---

# 👩‍💻 Author

**Supraja**

GitHub:
https://github.com/suprajasree

LinkedIn: https://www.linkedin.com/in/supraja-c


