"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Hook de visibilidad
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return [ref, isInView];
}

const InstagramFooter = ({ url = "" }) => {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (inView) {
      timer = setTimeout(() => setActive(true), 500);
    } else {
      setActive(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [inView]);

  const handleClick = () => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <StyledWrapper ref={ref} className={active ? "active" : ""}>
      <div className="social-button">
        <button className="bt" onClick={handleClick}>
          <div className="light-holder">
            <div className="dot" />
            <div className="light" />
          </div>
          <div className="button-holder">
            <svg viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.088 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.718 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.89.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.007 1.442c1.202 0 1.346.005 1.822.026.82.038 1.264.174 1.56.289.391.152.668.332.96.624.292.292.472.569.624.96.115.296.251.74.289 1.56.021.476.026.62.026 1.822s-.005 1.346-.026 1.822c-.038.82-.174 1.264-.289 1.56-.152.391-.332.668-.624.96-.292.292-.569.472-.96.624-.296.115-.74.251-1.56.289-.476.021-.62.026-1.822.026s-1.346-.005-1.822-.026c-.82-.038-1.264-.174-1.56-.289a2.6 2.6 0 0 1-.96-.624 2.6 2.6 0 0 1-.624-.96c-.115-.296-.251-.74-.289-1.56-.021-.476-.026-.62-.026-1.822s.005-1.346.026-1.822c.038-.82.174-1.264.289-1.56.152-.391.332-.668.624-.96.292-.292.569-.472.96-.624.296-.115.74-.251 1.56-.289.476-.021.62-.026 1.822-.026zM8 3.642a4.358 4.358 0 1 0 0 8.716 4.358 4.358 0 0 0 0-8.716zm0 1.442a2.916 2.916 0 1 1 0 5.832 2.916 2.916 0 0 1 0-5.832zm4.582-1.242a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06z" />
            </svg>
            <p>Instagram</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

// Colores característicos de Instagram (usaremos un gradiente o rosa/morado)
const INSTAGRAM_COLOR = "#E1306C"; // Rosa Instagram

const StyledWrapper = styled.div`
  .social-button button.bt {
    position: relative;
    height: 160px; /* Reducido para que quepan dos en fila */
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .social-button button.bt .button-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: #0f0f0f;
    font-weight: 700;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 20;
  }

  .social-button button.bt .button-holder svg {
    height: 40px;
    fill: #0f0f0f;
    transition: 300ms;
  }

  .social-button button.bt .light-holder {
    position: absolute;
    height: 160px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social-button button.bt .light-holder .dot {
    position: absolute;
    top: 0;
    width: 8px;
    height: 8px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
  }

  .social-button button.bt .light-holder .light {
    position: absolute;
    top: 0;
    width: 160px;
    height: 160px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
    transition: background 0.5s ease;
  }

  /* Hover: color de la red */
  .social-button button.bt:hover .button-holder svg {
    fill: ${INSTAGRAM_COLOR};
  }

  .social-button button.bt:hover .button-holder {
    color: ${INSTAGRAM_COLOR};
    outline: ${INSTAGRAM_COLOR} 2px solid;
    outline-offset: 2px;
  }

  /* Estado activo (después de 2s visible) */
  &.active .social-button button.bt .button-holder svg {
    fill: ${INSTAGRAM_COLOR};
  }

  &.active .social-button button.bt .button-holder {
    color: ${INSTAGRAM_COLOR};
    outline: ${INSTAGRAM_COLOR} 2px solid;
    outline-offset: 2px;
  }

  &.active .social-button button.bt .light-holder .light {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      ${INSTAGRAM_COLOR} 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default InstagramFooter;