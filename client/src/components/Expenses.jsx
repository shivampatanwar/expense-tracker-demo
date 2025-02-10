import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Redirect user after logout
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Income");
    const [description, setDescription] = useState("");
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/expenses`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setExpenses(response.data.expenses);
            setTotalIncome(response.data.totalIncome);
            setTotalExpense(response.data.totalExpense);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    const handleAddExpense = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        await axios.post(
            `${import.meta.env.VITE_API_URL}/api/expenses`,
            { amount, category, description },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchExpenses();
        setAmount("");
        setCategory("Income");
        setDescription("");
    };

    const handleDeleteExpense = async (id) => {
        const token = localStorage.getItem("token");
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/expenses/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        fetchExpenses();
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.setTextColor(40, 40, 40);
        doc.text("Expense Report", 105, 15, { align: "center" });

        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 22, { align: "center" });

        const summaryData = [
            ["Total Income:", `Rs. ${totalIncome}`],
            ["Total Expenses:", `Rs. ${totalExpense}`],
            ["Balance:", `Rs. ${totalIncome - totalExpense}`]
        ];
        doc.autoTable({ startY: 30, head: [["Summary", "Amount"]], body: summaryData, theme: 'grid' });

        const tableData = expenses.map(expense => [
            `Rs. ${expense.amount}`,
            expense.category,
            expense.description,
            new Date(expense.createdAt).toLocaleDateString()
        ]);

        doc.autoTable({ startY: doc.lastAutoTable.finalY + 15, head: [["Amount", "Category", "Description", "Date"]], body: tableData, theme: 'striped' });

        doc.save("expense_report.pdf");
    };

    return (
        <div className="expenses-container">
            {/* Header with Logout Button */}
            <div className="header-container">
                <h1 className="expenses-header">Expense Tracker</h1>
                <div>
                <button onClick={exportToPDF}>Export to PDF</button>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <div className="expenses-body">
                <div className="left-section">
                    <h2>Add Expense</h2>
                    <form onSubmit={handleAddExpense}>
                        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <button type="submit">Add Expense</button>
                    </form>

                    <div className="summary">
                        <h3>Total Income: ₹{totalIncome}</h3>
                        <h3>Total Expenses: ₹{totalExpense}</h3>
                        <h3>Balance: ₹{totalIncome - totalExpense}</h3>
                    </div>

                   
                </div>

                <div className="right-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td>₹{expense.amount}</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.description}</td>
                                    <td>
                                        <button className="delete" onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Expenses;
