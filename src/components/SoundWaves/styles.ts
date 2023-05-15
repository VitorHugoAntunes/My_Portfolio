import { keyframes, styled } from "@stitches/react";

const Startwaves = keyframes({
    '50%': { height: "20%" },
    '100%': { height: "100%" },
});

export const SoundWavesBox = styled('div', {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "1.5rem",
    bottom: "5rem",

    "&.loader": {
        height: "1.5rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: "0.3rem",

        "&.sound .stroke": {
            height: "100%",
            animation: `${Startwaves} 1.5s ease-in-out infinite`,
        },

        "&.noSound .stroke": {
            background: "$border",
            transition: "background 0.4s ease-in-out",
        },

        "&.noSound button svg": {
            transition: "background 0.4s ease-in-out",
        },

        "& .stroke": {
            display: "block",
            position: "relative",
            background: "#fff",
            height: "1.5rem",
            width: "0.5rem",
            borderRadius: "32px",
            transition: "background 0.4s ease-in-out, height 0.4s ease-in-out",

            "&:nth-child(1)": {
                animationDelay: "0s",
            },
            "&:nth-child(2)": {
                animationDelay: "0.3s",
            },
            "&:nth-child(3)": {
                animationDelay: "0.6s",
            },
            "&:nth-child(4)": {
                animationDelay: "0.9s",
            },
            "&:nth-child(5)": {
                animationDelay: "0.6s",
            },
            "&:nth-child(6)": {
                animationDelay: "0.3s",
            },
            "&:nth-child(7)": {
                animationDelay: "1s",
            },
        }
    },

    button: {
        background: "none",
        border: "1px solid $border",
        borderRadius: "50%",
        padding: "0.5em",
        marginRight: "1rem",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        transition: "0.2s",

        svg: {
            color: "$icon",

            "&.volume": {

            }
        },

        "&:hover": {
            filter: "brightness(0.8)"
        }
    },

    "@media (max-width: 1000px)": {
        right: "1.5rem",
        bottom: "1.5rem",
    }
})