import { keyframes, styled } from "@stitches/react";

export const ProjectsContainer = styled('div', {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    alignItems: "center",

    "> div": {
        maxWidth: "70%",
        width: "100%"
    }
})

const loadingSpin = keyframes({
    '100%': {
        transform: "rotate(360deg)"
     },    
});

export const ProjectsWrapper = styled('section', {
    marginTop: "5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "6rem",
    rowGap: "3rem",
    marginBottom: "5rem",

    ".loadingDiv": {
        flex: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",

        "> svg": {
            animation: `${loadingSpin} 4s linear infinite`
        }
    },

    "@media (max-width: 1000px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem"
    }
})

export const ProjectDiv = styled('div', {
    display: "flex",
    flexDirection: "column",

    "> p": {
        marginTop: "1.5rem",
        textAlign: "justify",
        maxWidth: "30rem",
        fontSize: "0.9rem",
        color: "$icon",
        minHeight: "5rem",
        height: "100%"
    },

    "> a": {
        marginTop: "1rem",
        width: "fit-content",
        textDecoration: "none",
        color: "$blue",
        padding: "1rem",
        border: "1px solid $border",
        borderRadius: "32px",
        transition: "0.2s",

        "&:hover": {
            filter: "brightness(0.8)"
        }
    },

    "@media (max-width: 1000px)": {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "320px",

        "> div": {
            width: "100%"
        }
    }
})