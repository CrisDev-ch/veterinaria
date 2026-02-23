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

const FACEBOOK_COLOR = "#1877F2"; // Azul Facebook

const FacebookFooter = ({ url = "" }) => {
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
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <p>Facebook</p>
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
    fill: ${FACEBOOK_COLOR};
  }

  .social-button button.bt:hover .button-holder {
    color: ${FACEBOOK_COLOR};
    outline: ${FACEBOOK_COLOR} 2px solid;
    outline-offset: 2px;
  }

  &.active .social-button button.bt .button-holder svg {
    fill: ${FACEBOOK_COLOR};
  }

  &.active .social-button button.bt .button-holder {
    color: ${FACEBOOK_COLOR};
    outline: ${FACEBOOK_COLOR} 2px solid;
    outline-offset: 2px;
  }

  &.active .social-button button.bt .light-holder .light {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      ${FACEBOOK_COLOR} 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default FacebookFooter;