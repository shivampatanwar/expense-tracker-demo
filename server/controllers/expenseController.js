import Expense from "../models/Expense.js";
import asyncHandler from "express-async-handler";

export const addExpense = asyncHandler(async (req, res) => {
  const { amount, category, description } = req.body;
  const expense = await Expense.create({ userId: req.user.id, amount, category, description });
  res.status(201).json({ message: "Expense added successfully", expense });
});


export const getExpenses = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from JWT token

    // Fetch all expenses for the logged-in user
    const expenses = await Expense.findAll({
      where: { userId },
      attributes: ["id", "amount", "category", "description", "createdAt"],
    });

    // Calculate total income and expenses
    let totalIncome = 0;
    let totalExpense = 0;

    expenses.forEach((expense) => {
      if (expense.category === "Income") {
        totalIncome += expense.amount;
      } else if (expense.category === "Expense") {
        totalExpense += expense.amount;
      }
    });

    // Send response
    res.status(200).json({ totalIncome, totalExpense, expenses });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export const deleteExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Expense.destroy({ where: { id, userId: req.user.id } });
  res.json({ message: "Expense deleted" });
});
