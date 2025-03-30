
# SIT323-2025-Prac4P - Calculator Microservice

This project is a microservice built using Node.js and Express that offers basic calculator functionality to clients via a REST API.

## Part I - Requirements

- The microservice supports four arithmetic operations: addition, subtraction, multiplication, and division.
- The service accepts requests through a REST API format.
- It provides meaningful error messages for invalid input.

## Part II - Instructions

### 1. Set up the development environment
- Install Node.js: https://nodejs.org/en/download/
- Install Git: https://git-scm.com/
- Install Visual Studio Code: https://code.visualstudio.com/

### 2. Create and configure the Node.js project
```bash
git clone https://github.com/yourusername/sit323-2025-prac4p
cd sit323-2025-prac4p
npm install
```

### 3. Run the microservice
```bash
node index.js
```
It will be accessible at: `http://localhost:3000`

### 4. API Endpoints

- **Addition**: `GET /add?num1=5&num2=3`
- **Subtraction**: `GET /subtract?num1=10&num2=4`
- **Multiplication**: `GET /multiply?num1=7&num2=2`
- **Division**: `GET /divide?num1=8&num2=4`

### 5. Error Handling

- Invalid numbers:
```json
{ "error": "Both num1 and num2 must be valid numbers." }
```
- Division by zero:
```json
{ "error": "Division by zero is not allowed." }
```
