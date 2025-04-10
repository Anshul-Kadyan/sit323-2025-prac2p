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
node index.js
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

The application will be accessible at: [http://localhost:3001](http://localhost:3001)

Example endpoint:

```
http://localhost:3001/add?num1=10&num2=5
```

---

### Dockerfile Overview

- **Base image**: `node:18`
- **Working directory**: `/usr/src/app`
- **Dependencies installed**: via `npm install`
- **Port exposed**: `3000` (mapped to `3001` on host)
- **Command**: `node index.js`

---

### Docker Compose Overview

- Builds image from Dockerfile.
- Maps port `3000` in the container to port `3001` on the host machine.
- Automatically restarts the container if it stops unexpectedly.

```yaml
services:
  calculator:
    image: calculator-app
    build: .
    ports:
      - "3001:3000"
    restart: always
```

---

### Dockerisation Steps Summary

1. Created a Dockerfile to define the Node.js runtime and app setup.
2. Added a `docker-compose.yml` to simplify building and running the container.
3. Verified the service via Docker at `http://localhost:3001`.
4. Integrated Docker into the existing GitHub project.

---
