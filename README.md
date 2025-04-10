# SIT323-2025-Prac4C - Enhanced Calculator Microservice

This enhanced calculator microservice builds upon Task 4.1P by introducing advanced arithmetic operations: exponentiation, square root, and modulo. It also maintains comprehensive error handling for robust operation.

---

## Part I - Requirements

- Support for addition, subtraction, multiplication, and division.
- Support for exponentiation, square root, and modulo operations.
- REST API structure with clear input validation and error responses.

---

## Instructions

### 1. Set up the development environment

- Install [Node.js](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/)
- Install [Visual Studio Code](https://code.visualstudio.com/)

### 2. Clone the Repository and Install Dependencies

```bash
git clone https://github.com/Anshul-Kadyan/sit323-2025-prac2p
cd sit323-2025-prac2p
npm install
```

### 3. Run the Microservice

```bash
node server.js
```

Access it via: [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

- **Addition**: `/add?num1=10&num2=5`
- **Subtraction**: `/subtract?num1=10&num2=5`
- **Multiplication**: `/multiply?num1=10&num2=5`
- **Division**: `/divide?num1=10&num2=5`
- **Exponentiation**: `/power?base=2&exponent=3`
- **Square Root**: `/sqrt?num=16`
- **Modulo**: `/modulo?num1=10&num2=3`

---

## Error Handling

- **Invalid inputs:**

```json
{ "error": "Both num1 and num2 must be valid numbers." }
```

- **Division or modulo by zero:**

```json
{ "error": "Division by zero is not allowed." }
```

- **Square root of a negative number:**

```json
{ "error": "Cannot compute square root of a negative number." }
```

---

## Step-by-Step Implementation Process

1. Installed and set up Node.js, Git, and VS Code.
2. Initialized Node.js project and installed Express.
3. Created REST API for basic and advanced arithmetic operations.
4. Added input validation and improved error handling.
5. Tested endpoints locally using browser.
6. Documented API usage and instructions in README.
7. Pushed the code to a public GitHub repository.

---

## Part II - Dockerisation (Task 5.1P)

This enhanced calculator microservice has been Dockerised to support container-based development and deployment.

---

### Docker Setup Instructions

#### 1. Ensure Docker is Installed

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

#### 2. Build and Run with Docker Compose

```bash
docker compose up
```

The application will be accessible at: [http://localhost:3000](http://localhost:3000)

Example endpoint:

```
http://localhost:3000/add?num1=10&num2=5
```

---

### Dockerfile Overview

- **Base image**: `node:18`
- **Working directory**: `/usr/src/app`
- **Dependencies installed**: via `npm install`
- **Port exposed**: `3000`
- **Command**: `node server.js`

---

### Docker Compose Overview

- Builds image from Dockerfile.
- Automatically restarts the container if it stops unexpectedly.

```yaml
services:
  calculator:
    image: calculator-app
    build: .
    ports:
      - "3000:3000"
    restart: always
```

---

### Dockerisation Steps Summary

1. Created a Dockerfile to define the Node.js runtime and app setup.
2. Added a `docker-compose.yml` to simplify building and running the container.
3. Verified the service via Docker at `http://localhost:3000`.
4. Integrated Docker into the existing GitHub project.

---

## Part III - Kubernetes Deployment (Task 6P)

This project has also been deployed to a local Kubernetes cluster using `kubectl`, with NodePort exposing the service on port 3000.

---

### Kubernetes Setup Instructions

#### 1. Ensure Kubernetes and kubectl are Installed

- Docker Desktop (with Kubernetes enabled)
- `kubectl` CLI (installed via Homebrew)

#### 2. Apply the Deployment and Service

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Check status:

```bash
kubectl get pods
kubectl get services
```

---

### Access the App via Kubernetes

Once deployed, the app is available at:

```url
http://localhost:30000/add?num1=10&num2=5
```

---

### Kubernetes Files Overview

**deployment.yaml**:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: calculator-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: calculator
  template:
    metadata:
      labels:
        app: calculator
    spec:
      containers:
        - name: calculator-container
          image: anshulkadyan/calculator-app:v1
          ports:
            - containerPort: 3000
```

**service.yaml**:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: calculator-service
spec:
  type: NodePort
  selector:
    app: calculator
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 3000
      nodePort: 30000
```

---

### Kubernetes Deployment Summary

1. Pushed Docker image to Docker Hub (`anshulkadyan/calculator-app:v1`)
2. Created a Kubernetes Deployment to manage the pod
3. Created a NodePort service to expose it externally
4. Successfully accessed the app via `http://localhost:30000`

---

## Part IV - Kubernetes Port Forwarding (Task 6C)

This section demonstrates how the deployed calculator microservice was accessed using `kubectl port-forward`.

---

### 🧪 Verifying the Deployment

Checked that the pod and service were running using the following commands:

```bash
kubectl get pods
kubectl get services
```

Sample output:

```
NAME                                     READY   STATUS    RESTARTS   AGE
calculator-deployment-6b988886b8-78plf   1/1     Running   0          11m

NAME                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
calculator-service   NodePort    10.104.75.28   <none>        3000:30000/TCP   11m
```

---

### 🚪 Port Forwarding to Access the App

The following command was used to forward local port 3000 to the pod’s internal port 3000:

```bash
kubectl port-forward calculator-deployment-6b988886b8-78plf 3000:3000
```

This allowed accessing the service at:

👉 `http://localhost:3000/add?num1=10&num2=5`

Response:

```json
{ "result": 15 }
```

---

### ✅ Summary of Task 6C

- Verified pod and service were running inside the Kubernetes cluster
- Used `kubectl port-forward` to route traffic from local machine to the container
- Successfully tested the microservice endpoints using the browser
