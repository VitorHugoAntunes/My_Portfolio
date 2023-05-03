import { styled } from "@stitches/react";

export const FooterContainer = styled('div', {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    bottom: 0,

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
            color: "$icon"
        }
    },

    "div:last-child": {
        flex: 1,
        display: "flex",
        justifyContent: "end",
    }
})