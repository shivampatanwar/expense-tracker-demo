import PDFDocument from "pdfkit";
import Expense from "../models/Expense.js";
import asyncHandler from "express-async-handler";

export const generatePDF = asyncHandler(async (req, res) => {
  const expenses = await Expense.findAll({ where: { userId: req.user.id } });

  res.setHeader("Content-Disposition", 'attachment; filename="expenses.pdf"');
  res.setHeader("Content-Type", "application/pdf");

  const doc = new PDFDocument();
  doc.pipe(res);
  doc.fontSize(20).text("Expense Report", { align: "center" }).moveDown(1);

  expenses.forEach((exp, index) => {
    doc.text(`${index + 1}. ${exp.category} - $${exp.amount}`, { align: "left" });
  });

  doc.end();
});
