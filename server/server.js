import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import sequelize from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(port, () => console.log("Server running on port 5000"));
});

// Export Express app for Vercel
export default app;
