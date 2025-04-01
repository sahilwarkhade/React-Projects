import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = ({ isOpen, onClose, onSave, onEdit, transaction }) => {
    const [formData, setFormData] = useState({
        id:crypto.randomUUID(),
        description: "",
        type: "Income",
        amount: "",
        date: new Date(),
    });

    useEffect(() => {
        if (transaction) {
          setFormData({
            id: transaction.id,
            description: transaction.description,
            type: transaction.type,
            amount: transaction.amount,
            date: new Date(),
          });
        }
    }, [transaction]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            description: "",
            type: "Income",
            amount: "",
            date: new Date(),
        });
        if (transaction) {
            onEdit(formData);
        } else {
            onSave(formData);
        }
        onClose();
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Description */}
                    <div>
                        <label className="block font-medium">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Type */}
                    <div>
                        <label className="block font-medium">Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        >
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>

                    {/* Amount */}
                    <div>
                        <label className="block font-medium">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Date Picker */}
                    <div>
                        <label className="block font-medium">Date</label>
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md cursor-pointer"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
