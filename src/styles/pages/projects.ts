import { styled } from "@stitches/react";

export const ProjectsContainer = styled('div', {
    width: "70%",
    height: "100%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    h3: {
        color: "$gray300"
    }
})

export const ProjectsWrapper = styled('section', {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "5rem",

    marginTop: "1.5rem"
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