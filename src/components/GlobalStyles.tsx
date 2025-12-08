import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #1a1a1a;
    background-color: #ffffff;
  }

  a {
    color: #0d7377;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #14919b;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 600;
    color: #1a1a1a;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid #0d7377;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #4a4a4a;
  }

  code {
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    background-color: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  pre {
    background-color: #1a1a1a;
    color: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background-color: transparent;
      padding: 0;
      color: inherit;
    }
  }
`;
