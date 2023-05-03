import { styled } from "@stitches/react";

export const HeaderContainer = styled('div', {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    ".navigationDiv": {
        display: "flex",
        background: "$darkBackground",

        "> a": {
            textDecoration: "none",
            background: "$darkBackground",
            padding: "0.8rem 4rem",
            transition: "0.2s",
            border: "2px solid $border",
            borderWidth: "0 2px 2px 0",

            "div span": {
                color: "$text",
                fontWeight: "bold"
            },

            "&:not(.selected):hover": {
                borderTopColor: "$border",
                background: "$background",
            }
        },

        ".selected": {
            borderTop: "2px solid orange",
            borderBottomColor: "$background",
            background: "$background"
        },

        "> div": {
            flex: 1,
            border: "2px solid $border",
            borderWidth: "0 0 2px 0"
        }
    },

    ".borderDiv": {
        height: "1rem",
        background: "$background",
        boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.3);"
    }
})