import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 'none',
  },

  body: {
    backgroundColor: '$background',
    color: '$title',
    '-webkit-font-smoothing': 'antialiased',
    maxWidth: "100vw",
    maxHeight: "100vh",
    marginLeft: "auto",
    marginRight: "auto",
  },

  'body, input, textarea, button': {
    fontFamily: 'Fira Code',
    fontWeight: 400,
  },

  'button': {
    padding: 0,
    border: "none",
    margin: 0,
    cursor: "pointer",
    lineHeight: 0
  }
})