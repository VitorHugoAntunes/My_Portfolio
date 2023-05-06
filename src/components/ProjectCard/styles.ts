import { styled } from "@stitches/react";

export const ProjectCardDiv = styled('div', {
    padding: "1rem",
    border: "1px solid $border",
    borderRadius: "8px",
    width: "30rem",

    display: "flex",
    gap: "1rem",
    background: "$card",
    flexDirection: "column",

    "&.boxShadowActive": {
        boxShadow: "rgb(95, 240, 208, 10%) 0px 0px 300px",
    },

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
                marginLeft: "1.2rem"
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