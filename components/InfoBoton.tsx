// components/InfoBoton.tsx
import React from 'react';

interface InfoBotonProps {
  onClick?: () => void;
}

const InfoBoton: React.FC<InfoBotonProps> = ({ onClick }) => {
  return (
    <div className="info-boton-container">
      <button 
        onClick={onClick}
        className="agendar-hora-btn"
      >
        Agendar Hora
      </button>

      <style jsx>{`
        .agendar-hora-btn {
          --hover-shadows: 16px 16px 33px #121212, -16px -16px 33px #303030;
          --accent: fuchsia;
          margin: 20px;
          font-weight: bold;
          letter-spacing: 0.1em;
          border: none;
          border-radius: 1.1em;
          background: #54f1ff;
          background: linear-gradient(90deg, rgba(84, 241, 255, 0.39) 76%, rgba(83, 237, 96, 1) 100%);
          cursor: pointer;
          color: white;
          padding: 1em 2em;
          transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.1s,
            letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s;
          box-shadow: 3px 3px 10px #1c1c1c, -3px -3px 10px #262626;
        }

        .agendar-hora-btn:hover {
          box-shadow: var(--hover-shadows);
        }

        .agendar-hora-btn:active {
          box-shadow: var(--hover-shadows), var(--accent) 0px 0px 30px 5px;
          background-color: var(--accent);
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default InfoBoton;