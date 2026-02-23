"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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

const EMAIL_COLOR = "#EA4335"; // Rojo de Gmail

const EmailFooter = ({ email = "" }) => {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (inView) {
      timer = setTimeout(() => setActive(true), 1000);
    } else {
      setActive(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [inView]);

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
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
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <p>Correo</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .social-button button.bt {
    position: relative;
    height: 160px;
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

  .social-button button.bt:hover .button-holder svg {
    fill: ${EMAIL_COLOR};
  }

  .social-button button.bt:hover .button-holder {
    color: ${EMAIL_COLOR};
    outline: ${EMAIL_COLOR} 2px solid;
    outline-offset: 2px;
  }

  &.active .social-button button.bt .button-holder svg {
    fill: ${EMAIL_COLOR};
  }

  &.active .social-button button.bt .button-holder {
    color: ${EMAIL_COLOR};
    outline: ${EMAIL_COLOR} 2px solid;
    outline-offset: 2px;
  }

  &.active .social-button button.bt .light-holder .light {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      ${EMAIL_COLOR} 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default EmailFooter;