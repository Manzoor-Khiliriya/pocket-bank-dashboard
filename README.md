# 🏦 Pocket Bank Dashboard

A responsive **Mini Banking Dashboard** built with **React** that allows users to view their balance, filter transactions, and simulate money transfers with real-time UI updates.

This project was developed as part of a frontend assignment to demonstrate **component-based architecture, state management, form validation, and clean UI/UX**.

---

## 🚀 Live Demo
https://pocket-bank-dashboard-murex.vercel.app/

## 🚀 Features

### ✅ Dashboard
- Displays **current balance**
- Shows a list of **mock transactions**
- Each transaction includes:
  - Date
  - Description
  - Amount
  - Type (Credit / Debit)

### ✅ Transaction Filter
- Filter transactions by:
  - **All**
  - **Income**
  - **Expenses**

### ✅ Transfer Money
- Form fields:
  - Recipient Name
  - Amount
  - Date
- **Validations**:
  - Amount must be greater than 0
  - Cannot transfer more than available balance
  - Transfer date cannot be in the past
- **UX Enhancements**:
  - Disabled button during submission
  - Loading state (1–2 seconds simulation)
  - Success and error messages
- Updates balance and transaction list **without page refresh**

### ✅ UI / UX
- Modern fintech-style UI
- Fully **responsive** (mobile & desktop)
- Clean card-based layout
- Accessible and user-friendly design

---

## 🛠 Tech Stack

- **React.js** (with Vite)
- **JavaScript**
- **Tailwind CSS**
- Local state management (`useState`)
- No backend (frontend-focused as per assignment)

---

## 📂 Project Structure

```text
src/
├─ components/
│  ├─ BalanceCard.jsx
│  ├─ FilterTabs.jsx
│  ├─ Footer.jsx
│  ├─ Header.jsx
│  ├─ TransactionList.jsx
│  └─ TransferForm.jsx
│
├─ data/
│  └─ transactions.js
│
├─ utils/
│  ├─ calculateInitialBalance.js
│  ├─ formatCurrency.js
│  ├─ transferService.js
│  └─ validateTransfer.js
│
├─ App.jsx
└─ main.jsx
```
---

## ▶️ Getting Started (Run Locally)

```bash
# Clone the repository
git clone https://github.com/Manzoor-Khiliriya/pocket-bank-dashboard

# Navigate to project
cd pocket-bank

# Install dependencies
npm install

# Start development server
npm run dev
