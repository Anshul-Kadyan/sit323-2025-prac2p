// ============================
// SIT323/SIT737 - 4.2C + 9.1P: Enhanced Calculator Microservice with MongoDB
// ============================
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

const uri = "mongodb://mongo-service:27017"; // Service name in Kubernetes
const client = new MongoClient(uri);
let db;

// Connect to MongoDB
client
  .connect()
  .then(() => {
    db = client.db("calculatorDB");
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

app.use(express.json());

// Validation Helpers
function validateSingleNumber(num) {
  return isNaN(num) ? { error: "The input must be a valid number." } : null;
}
function validateNumbers(num1, num2) {
  return isNaN(num1) || isNaN(num2)
    ? { error: "Both num1 and num2 must be valid numbers." }
    : null;
}

// Function to save operation to DB
async function logOperation(operation, input, result) {
  if (!db) return;
  await db.collection("history").insertOne({
    operation,
    input,
    result,
    timestamp: new Date(),
  });
}

// ==================== API Endpoints ====================

app.get("/add", async (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  const result = num1 + num2;
  await logOperation("add", { num1, num2 }, result);
  res.json({ result });
});

app.get("/subtract", async (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  const result = num1 - num2;
  await logOperation("subtract", { num1, num2 }, result);
  res.json({ result });
});

app.get("/multiply", async (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  const result = num1 * num2;
  await logOperation("multiply", { num1, num2 }, result);
  res.json({ result });
});

app.get("/divide", async (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  if (num2 === 0)
    return res.status(400).json({ error: "Division by zero is not allowed." });
  const result = num1 / num2;
  await logOperation("divide", { num1, num2 }, result);
  res.json({ result });
});

app.get("/power", async (req, res) => {
  const base = parseFloat(req.query.base);
  const exponent = parseFloat(req.query.exponent);
  const error = validateNumbers(base, exponent);
  if (error) return res.status(400).json(error);
  const result = Math.pow(base, exponent);
  await logOperation("power", { base, exponent }, result);
  res.json({ result });
});

app.get("/sqrt", async (req, res) => {
  const num = parseFloat(req.query.num);
  const error = validateSingleNumber(num);
  if (error) return res.status(400).json(error);
  if (num < 0)
    return res
      .status(400)
      .json({ error: "Cannot compute square root of a negative number." });
  const result = Math.sqrt(num);
  await logOperation("sqrt", { num }, result);
  res.json({ result });
});

app.get("/modulo", async (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  if (num2 === 0)
    return res.status(400).json({ error: "Modulo by zero is not allowed." });
  const result = num1 % num2;
  await logOperation("modulo", { num1, num2 }, result);
  res.json({ result });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Enhanced calculator running at http://localhost:${port}`);
});
