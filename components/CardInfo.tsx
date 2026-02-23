import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';

interface CardInfoProps {
  titulo: string;
  icono: React.ReactElement<IconType>;
  descripcion: string;
  img: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ titulo, icono, descripcion, img }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div
          className="card-img"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="card-icon">{icono}</div>
        <div className="card-content">
          <h3 className="title">{titulo}</h3>
          <p className="description">{descripcion}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    aspect-ratio: 190 / 254;
    position: relative;
    background: #ffffff;
    color: black;
    text-shadow: 2px 1px 5px white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 14px 12px rgba(255, 0, 1, 0.05);
    transition: box-shadow 0.3s ease;
    font-size: clamp(0.75rem, 4vw, 1rem);
    font-weight: bold;
  }

  .card-img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 0.4s ease;
    z-index: 1;
    opacity: 1;
  }

  .card-icon {
    position: absolute;
    bottom: 8%;
    left: 6%;
    z-index: 3;
    width: 3.2em;
    height: 3.2em;
    background: white;
    border-radius: 50%;
    border: 2px solid lime;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    color: #252525;
  }

  .card-icon svg {
    width: 1.8em;
    height: 1.8em;
    fill: currentColor;
    transition: transform 0.3s ease;
  }

  .card-content {
    position: absolute;
    top: 20%;
    left: 6%;
    right: 6%;
    z-index: 3;
    text-align: left;
  }

  .title {
    font-size: 1.6em;
    font-weight: 700;
    margin: 0 0 0.3em 0;
    transition: opacity 0.3s ease;
    line-height: 1.2;
    opacity: 1;
  }

  .description {
    font-size: 1em;
    letter-spacing: 0.3px;
    opacity: 0;
    transition: opacity 0.3s ease;
    margin: 0;
    color: #333;
  }

  .card:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }

  .card:hover .card-img {
    opacity: 0;
  }

  .card:hover .card-icon {
    bottom: auto;
    top: 6%;
    right: 6%;
    left: auto;
    transform: scale(0.75);
  }

  .card:hover .card-icon svg {
    transform: scale(0.9);
  }

  .card:hover .title {
    opacity: 0;
  }

  .card:hover .description {
    opacity: 1;
  }
`;

export default CardInfo;