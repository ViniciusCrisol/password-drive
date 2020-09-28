import styled from 'styled-components';

export const Container = styled.div`
  width: 70px;
  margin: 0 auto;
  text-align: center;

  > div {
    width: 12px;
    height: 12px;

    border-radius: 100%;
    background: ${({ theme }) => theme.colors.background};

    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
