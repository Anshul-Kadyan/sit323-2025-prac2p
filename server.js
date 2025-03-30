// ============================
// SIT323/SIT737 - 4.2C: Enhanced Calculator Microservice
// ============================
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON and query parameters
app.use(express.json());

// Utility function to validate a single number
function validateSingleNumber(num) {
  if (isNaN(num)) {
    return { error: "The input must be a valid number." };
  }
  return null;
}

// Utility function to validate two numbers
function validateNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return { error: "Both num1 and num2 must be valid numbers." };
  }
  return null;
}

// ==================== API Endpoints ====================

// Addition
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  res.json({ result: num1 + num2 });
});

// Subtraction
app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  res.json({ result: num1 - num2 });
});

// Multiplication
app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  res.json({ result: num1 * num2 });
});

// Division
app.get("/divide", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  if (num2 === 0)
    return res.status(400).json({ error: "Division by zero is not allowed." });
  res.json({ result: num1 / num2 });
});

// Exponentiation
app.get("/power", (req, res) => {
  const base = parseFloat(req.query.base);
  const exponent = parseFloat(req.query.exponent);
  const error = validateNumbers(base, exponent);
  if (error) return res.status(400).json(error);
  res.json({ result: Math.pow(base, exponent) });
});

// Square Root
app.get("/sqrt", (req, res) => {
  const num = parseFloat(req.query.num);
  const error = validateSingleNumber(num);
  if (error) return res.status(400).json(error);
  if (num < 0)
    return res
      .status(400)
      .json({ error: "Cannot compute square root of a negative number." });
  res.json({ result: Math.sqrt(num) });
});

// Modulo
app.get("/modulo", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  if (num2 === 0)
    return res.status(400).json({ error: "Modulo by zero is not allowed." });
  res.json({ result: num1 % num2 });
});

// Start the server
app.listen(port, () => {
  console.log(
    `Enhanced calculator microservice running at http://localhost:${port}`
  );
});
