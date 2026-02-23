import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Clima = () => {
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);

  // Obtener coordenadas del usuario
  useEffect(() => {
    if (!navigator.geolocation) {
      setError('La geolocalización no es compatible con tu navegador');
      setCargando(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        const { latitude, longitude } = posicion.coords;
        setUbicacion({ lat: latitude, lon: longitude });
      },
      (err) => {
        setError('No se pudo obtener tu ubicación. Verifica los permisos.');
        setCargando(false);
      }
    );
  }, []);

  // Obtener datos del clima cuando se tienen coordenadas
  useEffect(() => {
    if (!ubicacion) return;

    const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY; // O tu key directamente
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${ubicacion.lat}&lon=${ubicacion.lon}&appid=${API_KEY}&units=metric&lang=es`;

    const fetchClima = async () => {
      try {
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
          throw new Error('Error al obtener datos del clima');
        }
        const datos = await respuesta.json();
        setClima(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchClima();
  }, [ubicacion]);

  // Formatear fecha en español
  const hoy = new Date();
  const fechaFormateada = hoy.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (cargando) {
    return (
      <StyledWrapper>
        <div className="card loading">Obteniendo ubicación y clima...</div>
      </StyledWrapper>
    );
  }

  if (error) {
    return (
      <StyledWrapper>
        <div className="card error">Error: {error}</div>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <div className="card">
        <div className="container">
          <div className="cloud front">
            <span className="left-front" />
            <span className="right-front" />
          </div>
          <span className="sun sunshine" />
          <span className="sun" />
          <div className="cloud back">
            <span className="left-back" />
            <span className="right-back" />
          </div>
        </div>
        <div className="card-header">
          <span>
            {clima.name}, {clima.sys.country}
          </span>
          <span>{fechaFormateada}</span>
        </div>
        <span className="temp">{Math.round(clima.main.temp)}°</span>
        <div className="temp-scale">
          <span>Celcius</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 235px;
    position: relative;
    padding: 25px;
    background: radial-gradient(
        178.94% 106.41% at 26.42% 106.41%,
        #fff7b1 0%,
        rgba(255, 255, 255, 0) 71.88%
      ),
      #ffffff;
    box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01),
      0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09),
      0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 23px;
    transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .container {
    width: 250px;
    height: 250px;
    position: absolute;
    right: -35px;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
  }

  .cloud {
    width: 250px;
  }

  .front {
    padding-top: 45px;
    margin-left: 25px;
    display: inline;
    position: absolute;
    z-index: 11;
    animation: clouds 8s infinite;
    animation-timing-function: ease-in-out;
  }

  .back {
    margin-top: -30px;
    margin-left: 150px;
    z-index: 12;
    animation: clouds 12s infinite;
    animation-timing-function: ease-in-out;
  }

  .right-front {
    width: 45px;
    height: 45px;
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -25px;
    z-index: 5;
  }

  .left-front {
    width: 65px;
    height: 65px;
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
  }

  .right-back {
    width: 50px;
    height: 50px;
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -20px;
    z-index: 5;
  }

  .left-back {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
  }

  .sun {
    width: 120px;
    height: 120px;
    background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
    background: linear-gradient(to right, #fcbb04, #fffc00);
    border-radius: 60px;
    display: inline;
    position: absolute;
  }

  .sunshine {
    animation: sunshines 2s infinite;
  }

  @keyframes sunshines {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }

    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

  @keyframes clouds {
    0% {
      transform: translateX(15px);
    }

    50% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(15px);
    }
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .card-header span:first-child {
    word-break: break-all;
    font-weight: 800;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.66);
  }

  .card-header span:last-child {
    font-weight: 700;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.33);
  }

  .temp {
    position: absolute;
    left: 25px;
    bottom: 12px;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    color: rgba(87, 77, 51, 1);
  }

  .temp-scale {
    width: 80px;
    height: 36px;
    position: absolute;
    right: 25px;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.06);
    border-radius: 9px;
  }

  .temp-scale span {
    font-weight: 700;
    font-size: 13px;
    line-height: 134.49%;
    color: rgba(87, 77, 51, 0.66);
  }

  /* Estilos para estados de carga y error */
  .card.loading,
  .card.error {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    color: rgba(87, 77, 51, 0.8);
  }
`;

export default Clima;