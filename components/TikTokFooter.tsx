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

// TikTok usa a menudo negro, pero podemos usar un color característico como #00f2ea (cian) y #ff0050 (rosa)
const TIKTOK_COLOR = "#00f2ea"; // Cian TikTok

const TikTokFooter = ({ url = "" }) => {
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
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
            </svg>
            <p>TikTok</p>
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
    fill: ${TIKTOK_COLOR};
  }

  .social-button button.bt:hover .button-holder {
    color: ${TIKTOK_COLOR};
    outline: ${TIKTOK_COLOR} 2px solid;
    outline-offset: 2px;
  }

  &.active .social-button button.bt .button-holder svg {
    fill: ${TIKTOK_COLOR};
  }

  &.active .social-button button.bt .button-holder {
    color: ${TIKTOK_COLOR};
    outline: ${TIKTOK_COLOR} 2px solid;
    outline-offset: 2px;
  }

  &.active .social-button button.bt .light-holder .light {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      ${TIKTOK_COLOR} 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default TikTokFooter;