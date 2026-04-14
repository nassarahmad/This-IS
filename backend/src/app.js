const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const limiter = require("./middleware/rateLimiter");

app.use(limiter);
const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/auth", require("./controllers/auth/auth.routes"));
app.use("/api/v1/requests", require("./controllers/requests/requests.routes"));

module.exports = app;