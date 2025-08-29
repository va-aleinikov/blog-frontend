export const colors = {
  // Основные цвета
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",

  // Функциональные цвета
  background: "#f9f9f9",
  text: "#fff",
  error: "#dc3545",
  border: "#dee2e6",
};

export const globalStyles = `
  body {
    font-family: sans-serif;
    background: ${colors.light};
    max-width: 100%;
    padding: 1rem;
    margin: 0 auto;
  }

  main {
    display: flex;
    flex-direction: column;
  }
`;

export const spacing = {
  xs: "0.75rem",
  sm: "1rem",
  //   md: "2rem",
  //   lg: "3rem",
  //   xl: "4rem",
};
export const radius = {
  sm: "4px",
  md: "8px",
  lg: "16px",
};

export const typography = {
  fontFamily: "'Inter', sans-serif",
  fontSize: {
    sm: "0.75rem",
    base: "1rem",
    lg: "2rem",
    xl: "3rem",
  },
  //   fontWeight: {
  //     regular: 400,
  //     medium: 500,
  //     bold: 700,
  //   },
};
