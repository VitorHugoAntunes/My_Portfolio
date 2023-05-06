import { styled } from "@stitches/react";

export const HomeContainer = styled('div', {
    width: "70%",
    height: "100%",
    margin: "0 auto",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "> div": {
        display: "flex",
        flexDirection: "column",

        h1: {
            fontSize: "3rem"
        },

        ".occupation": {
            color: "$blue",
            fontSize: "$xl"
        },

        "&:first-child": {
            gap: "9rem",

            "& > div:first-child": {
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            },

            "& > div:last-child > div": {
                marginLeft: "-3px",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
            }
        },

        input: {
            background: "none",
            border: "none",
            color: "$text",
            fontSize: "$2xl",
            height: "3rem",
            caretShape: "underscore"
        }
    }
})