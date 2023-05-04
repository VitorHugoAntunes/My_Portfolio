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

export const PresentationCard = styled('div', {
    padding: "1rem",
    border: "1px solid $border",
    borderRadius: "8px",
    width: "30rem",

    boxShadow: "rgb(95, 240, 208, 10%) 0px 0px 300px",

    display: "flex",
    gap: "1rem",
    background: "$card",

    "> div": {
        display: "flex"
    },

    "> div:first-child": {
        justifyContent: "space-between",

        "span:first-child": {
            color: "$blue"
        },

        "span:not(:first-child)": {
            color: "$text"
        }
    },

    "> div:last-child": {
        flexDirection: "column",
        border: "1px solid $darkBackground",
        borderRadius: "8px",
        background: "$cardBackground",
        padding: "1rem 0 2rem",
        gap: "1rem",

        "> div, > a div": {
            padding: "0 1rem"
        },

        ".comments": {
            display: "flex",
            flexDirection: "column",

            span: {
                color: "$text"
            },

            "span:not(:first-child)": {
                marginLeft: "1rem"
            },
        },

        a: {
            flex: 1,
            padding: "0.2rem 0",
            textDecoration: "none",
            background: "$blue",
            color: "$background",
            transition: "0.2s",

            "&:hover": {
                filter: "brightness(0.8)",
            }
        }
    },
})