import { styled } from "@stitches/react";

export const FooterContainer = styled('div', {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    background: "$background",

    span: {
        color: "$icon"
    },

    "> a, > div": {
        display: "flex",
        padding: "1rem",
        border: "2px solid $border",
        borderWidth: "2px 2px 0 0"
    },

    "a": {
        svg: {
            color: "$icon",
            transition: "0.2s",
        },

        "&:hover": {
            svg: {
                filter: "brightness(0.6)",
            }
        }
    },

    "div:last-child": {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        gap: "2rem",

        "> a": {
            textDecoration: "none",
            color: "$blue",
            transition: "0.2s",

            "&:hover": {
                filter: "brightness(0.8)",
            }
        },

        "> div": {
            width: "2px",
            height: "100%",
            background: "$border"
        }
    }
})