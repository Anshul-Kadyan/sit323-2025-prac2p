# SIT323-2025-Prac4C - Enhanced Calculator Microservice

This enhanced calculator microservice builds upon Task 4.1P by introducing advanced arithmetic operations: exponentiation, square root, and modulo. It also maintains comprehensive error handling for robust operation.

## Part I - Requirements

- Support for addition, subtraction, multiplication, and division.
- Support for exponentiation, square root, and modulo operations.
- REST API structure with clear input validation and error responses.

## Instructions

### 1. Set up the development environment

- Install Node.js: https://nodejs.org/en/download/
- Install Git: https://git-scm.com/
- Install Visual Studio Code: https://code.visualstudio.com/

### 2. Clone the Repository and Install Dependencies

```bash
git clone https://github.com/Anshul-Kadyan/sit323-2025-prac4c
cd sit323-2025-prac4c
npm install
```

### 3. Run the Microservice

```bash
node index.js
```

Access it via: `http://localhost:3000`

## API Endpoints

- **Addition**: `/add?num1=10&num2=5`
- **Subtraction**: `/subtract?num1=10&num2=5`
- **Multiplication**: `/multiply?num1=10&num2=5`
- **Division**: `/divide?num1=10&num2=5`
- **Exponentiation**: `/power?base=2&exponent=3`
- **Square Root**: `/sqrt?num=16`
- **Modulo**: `/modulo?num1=10&num2=3`

## Error Handling

- Invalid inputs:

```json
{ "error": "Both num1 and num2 must be valid numbers." }
```

- Division or modulo by zero:

```json
{ "error": "Division by zero is not allowed." }
```

- Square root of a negative number:

```json
{ "error": "Cannot compute square root of a negative number." }
```

## Step-by-Step Implementation Process

1. Installed and set up Node.js, Git, and VS Code.
2. Initialized Node.js project and installed Express.
3. Created REST API for basic and advanced arithmetic operations.
4. Added input validation and improved error handling.
5. Tested endpoints locally using browser.
6. Documented API usage and instructions in README.
7. Pushed the code to a public GitHub repository.
