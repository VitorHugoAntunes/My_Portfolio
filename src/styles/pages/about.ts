import { styled } from "@stitches/react";

export const AboutContainer = styled('div', {
    height: "100%",
    display: "flex",
    overflow: "hidden",

    "@media (max-width: 1000px)": {
        flexDirection: "column",

        "> aside": {
            order: 2,
            height: "fit-content",
            gap: "1rem",

            "> span:last-child": {
                marginBottom: 0
            }
        },

        "> section": {
            order: 1,
            padding: "0.5rem 0",
            gap: "0.5rem",
        },

        "p, span, a": {
            fontSize: "80%"
        },
    }
})

export const InterestsContainer = styled('aside', {
    maxHeight: "100vh",
    height: "100%",
    width: "35rem",
    background: "$darkBackground",
    border: "2px solid $border",
    borderBottom: "none",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowY: "scroll",

    ".tagsDiv": {
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",

        "&:last-child": {
            marginBottom: "2rem",
        },

        ".myInterests": {
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            transition: "0.2s",

            "&:hover": {
                filter: "brightness(0.9)",
                background: "$background"
            },

            "> span": {
                userSelect: "none",
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
            },
        },

        ".techInterests, .education": {
            display: "none",
            flexDirection: "column",
            gap: "0.5rem",

            marginLeft: "1rem",
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 0.2s ease-in-out, opacity 0.2s ease-in-out",

            "&.open": {
                display: "flex",
                visibility: "visible",
                opacity: 1,
            }
        },

    },

    "> span:last-child": {
        alignSelf: "center",
        marginBottom: "3.5rem",

        strong: {
            textDecoration: "underline",
        }
    },

    "@media (max-width: 1000px)": {
        width: "100%"
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