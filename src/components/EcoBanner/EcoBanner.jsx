import React from 'react';
import './EcoBanner.css';

export default function EcoBanner() {
  return (
    <div className="eco-faixa-container">
      <div className="eco-faixa-content">
        <span className="eco-faixa-item">
          <span className="eco-icon">🌱</span> 
          <strong> IMPACTO REAL:</strong> % DOS LUCROS DESTINADOS À CONSERVAÇÃO AMBIENTAL
        </span>
        <span className="eco-faixa-divider">//</span>
        <span className="eco-faixa-item">
          PRODUÇÃO CONSCIENTE COM <strong>BIOPLÁSTICO PLA</strong> E <strong>PETG RECICLÁVEL</strong>
        </span>
      </div>
    </div>
  );
}