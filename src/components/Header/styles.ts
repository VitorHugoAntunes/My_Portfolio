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
            borderBottomColor: "$background",
            background: "$background",

            "> div span": {
                transition: "0.2s",
                color: "$blue"
            },

            "&:hover": {
                "> div span": {
                    filter: "brightness(0.8)"
                }
            }
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