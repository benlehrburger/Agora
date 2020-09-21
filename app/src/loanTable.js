import React from 'react';
import FinancialStatement from './financialStatement.js';
import GiveLoan from './giveLoan.js';

export default function LoanTable() {
  return(
    <div>
      <FinancialStatement />
      <GiveLoan />
    </div>
  )
}