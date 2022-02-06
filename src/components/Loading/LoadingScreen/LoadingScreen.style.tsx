// styled system
import styled from "styled-components";

// ------------------------------------------------
export const LoadingScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #cdced4;
  .preloader {
    animation: largePopOut 1s linear;
    border-radius: 50%;
    box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
      -0.15em -0.15em 0.15em #727274 inset, 1em 1em 2em #727274,
      -1em -1em 2em #ffffff;
    margin-bottom: 3em;
    position: relative;
    width: 12em;
    height: 12em;
  }
  .preloader__square {
    animation: smallPopOut1 1s linear, popInOut 6s 1s linear infinite;
    border-radius: 0.5em;
    box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
      -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
      -0.25em -0.25em 0.5em #ffffff;
    position: absolute;
    top: 2.5em;
    left: 2.5em;
    width: 3em;
    height: 3em;
  }

  .preloader__square:nth-child(n + 2):nth-child(-n + 3) {
    left: 6.5em;
  }
  .preloader__square:nth-child(n + 3) {
    top: 6.5em;
  }
  .preloader__square:nth-child(2) {
    animation: smallPopOut2 1s linear, move2 6s 1s linear infinite;
  }
  .preloader__square:nth-child(3) {
    animation: smallPopOut3 1s linear, move3 6s 1s linear infinite;
  }
  .preloader__square:nth-child(4) {
    animation: smallPopOut4 1s linear, move4 6s 1s linear infinite;
  }
  .status {
    animation: fadeIn 1s linear forwards;
    text-align: center;
  }
  .status__dot {
    animation: appear1 1s 1s steps(1, start) infinite;
    display: inline-block;
    font-size: 20px;
  }
  .status__dot:nth-child(2) {
    animation: appear2 1s 1s steps(1, start) infinite;
  }
  .status__dot:nth-child(3) {
    animation: appear3 1s 1s steps(1, start) infinite;
  }

  /* Animations */
  @keyframes largePopOut {
    from,
    20% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
    }
    40% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 2em 2em 2em #727274,
        -2em -2em 4em #ffffff;
    }
    60%,
    to {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 1em 1em 2em #727274,
        -1em -1em 2em #ffffff;
    }
  }
  @keyframes smallPopOut1 {
    from,
    40% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
    }
    60% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
    }
    80%,
    to {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
    }
  }

  @keyframes smallPopOut2 {
    from,
    45% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
    }
    65% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
    }
    85%,
    to {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
    }
  }

  @keyframes smallPopOut3 {
    from,
    50% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
    }
    70% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
    }
    90%,
    to {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
    }
  }

  @keyframes smallPopOut4 {
    from,
    55% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
    }
    75% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
    }
    95%,
    to {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
    }
  }
  @keyframes popInOut {
    from {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
      transform: translate(0, 0);
    }
    4% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(0, 0);
    }
    8% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(0, 0);
    }
    12%,
    16% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(4em, 0);
    }
    20% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(4em, 0);
    }
    24%,
    25% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
      transform: translate(4em, 0);
    }
    29% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(4em, 0);
    }
    33% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(4em, 0);
    }
    37%,
    41% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(4em, 4em);
    }
    45% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(4em, 4em);
    }
    49%,
    50% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
      transform: translate(4em, 4em);
    }
    54% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(4em, 4em);
    }
    58% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(4em, 4em);
    }
    62%,
    66% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(0, 4em);
    }
    70% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(0, 4em);
    }
    74%,
    75% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
      transform: translate(0, 4em);
    }
    79% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(0, 4em);
    }
    83% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(0, 4em);
    }
    87%,
    91% {
      box-shadow: 0 0 0 #ffffff inset, 0 0 0 #727274 inset, 0 0 0 #727274,
        0 0 0 #ffffff;
      transform: translate(0, 0);
    }
    95% {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.5em 0.5em 0.5em #727274,
        -0.5em -0.5em 1em #ffffff;
      transform: translate(0, 0);
    }
    99%,
    to {
      box-shadow: 0.15em 0.15em 0.15em #ffffff inset,
        -0.15em -0.15em 0.15em #727274 inset, 0.25em 0.25em 0.5em #727274,
        -0.25em -0.25em 0.5em #ffffff;
      transform: translate(0, 0);
    }
  }
  @keyframes move2 {
    from,
    8% {
      transform: translate(0, 0);
      width: 3em;
      height: 3em;
    }
    12% {
      transform: translate(-4em, 0);
      width: 7em;
      height: 3em;
    }
    16%,
    83% {
      transform: translate(-4em, 0);
      width: 3em;
      height: 3em;
    }
    87% {
      transform: translate(-4em, 0);
      width: 3em;
      height: 7em;
    }
    91%,
    to {
      transform: translate(-4em, 4em);
      width: 3em;
      height: 3em;
    }
  }
  @keyframes move3 {
    from,
    33% {
      transform: translate(0, 0);
      height: 3em;
    }
    37% {
      transform: translate(0, -4em);
      height: 7em;
    }
    41%,
    to {
      transform: translate(0, -4em);
      height: 3em;
    }
  }
  @keyframes move4 {
    from,
    58% {
      transform: translate(0, 0);
      width: 3em;
    }
    62% {
      transform: translate(0, 0);
      width: 7em;
    }
    66%,
    to {
      transform: translate(4em, 0);
      width: 3em;
    }
  }
  @keyframes fadeIn {
    from,
    67% {
      opacity: 0;
    }
    83.3%,
    to {
      opacity: 1;
    }
  }
  @keyframes appear1 {
    from {
      visibility: hidden;
    }
    33%,
    to {
      visibility: visible;
    }
  }
  @keyframes appear2 {
    from,
    33% {
      visibility: hidden;
    }
    67%,
    to {
      visibility: visible;
    }
  }
  @keyframes appear3 {
    from,
    67% {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
`;
