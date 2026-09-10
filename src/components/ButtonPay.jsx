import React from 'react';

function ButtonPay({ disabled, onClick }) {
  return (
    <button 
      type="button" 
      className="btn btn-dark pay-button w-100" 
      disabled={disabled}
      onClick={onClick}
    >
      <i className="bi bi-credit-card me-2"></i>
      BAYAR
    </button>
  );
}

export default ButtonPay;