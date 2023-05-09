import { styled } from "@stitches/react";

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

export const ProjectsWrapper = styled('section', {
    marginTop: "5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "6rem",
    rowGap: "5rem"
})

export const ProjectDiv = styled('div', {
    display: "flex",
    flexDirection: "column",

    "> p": {
        marginTop: "1.5rem",
        textAlign: "justify",
        maxWidth: "30rem",
        fontSize: "0.9rem",
        color: "$icon"
    },

    "> a": {
        marginTop: "2rem",
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
    }
})