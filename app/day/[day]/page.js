
'use client'
import React, { useState } from 'react';
import { db } from '../../firebase/config.js'; // adjust path as needed
import { collection, addDoc } from 'firebase/firestore';

export default function ExpensePage() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [note, setNote] = useState('');

  const categories = [
    { name: 'Food', color: 'bg-green-200' },
    { name: 'Transport', color: 'bg-yellow-200' },
    { name: 'Shopping', color: 'bg-pink-200' },
    { name: 'Bills', color: 'bg-blue-200' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "expenses"), {
        amount: parseFloat(amount),
        category,
        note,
        createdAt: new Date()
      });
      alert("Expense added!");
      setAmount('');
      setNote('');
      setCategory('Food');
    } catch (e) {
      console.error("Error adding expense: ", e);
      alert("Submission failed");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-black mb-4">Expense Tracker</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat, idx)=>(
            <option key={idx} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Note (optional)"
          value={note}
          onChange={(e)=>setNote(e.target.value)}
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Expense</button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2 text-black">Category Colors</h2>
        <div className="flex gap-2">
          {categories.map((cat, idx)=>(
            <div key={idx} className={`p-2 rounded ${cat.color}`}>
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
