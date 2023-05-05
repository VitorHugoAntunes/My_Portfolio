import { styled } from "@stitches/react";

export const AboutContainer = styled('div', {
    height: "100%",
    display: "flex"
})

export const InterestsContainer = styled('aside', {
    height: "100%",
    width: "20rem",
    background: "$darkBackground",
    border: "2px solid $border",
    borderBottom: "none",
    padding: "1rem",

    ".tagsDiv": {
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",

        ".myInterests": {
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            transition: "0.2s",

            "&:hover": {
                filter: "brightness(0.8)"
            },

            "> span": {
                userSelect: "none",
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
            },
        },

        ".techInterests": {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",

            marginLeft: "1rem",
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 0.2s ease-in-out, opacity 0.2s ease-in-out",

            "&.open": {
                visibility: "visible",
                opacity: 1,
            }
        }
    }
})

export const AboutContent = styled('section', {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: "2rem",

    p: {
        color: "$text"
    },

    "> div:first-child p": {
        textAlign: "right"
    },

    ".paragraphs p:not(:first-child)": {
        marginLeft: "1.2rem"
    }
})