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
    },

    "@media (max-width: 1000px)": {
        ".navigationDiv, .borderDiv": {
            display: "none",
        },
    }
})

export const MenuContainer = styled('div', {
    display: "none",
    position: "relative",

    "@media (max-width: 1000px)": {
        "&": {
            width: "100%",
            display: "flex",
            padding: "1.3rem 2rem",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.3)",

            button: {
                padding: "none",
                background: "none",

                svg: {
                    color: "$icon"
                }
            },

            ".menuModal": {
                width: "100vw",
                height: "100vh",
                background: "$darkBackground",
                display: "none",
                left: 0,
                top: 0,
                zIndex: 10,

                "&.open": {
                    position: "absolute",
                    display: "flex",
                    transition: "display 1s ease-in-out",
                    flexDirection: "column",

                    "> div, > div a": {
                        borderBottom: "1px solid $border"
                    },

                    "> div:first-child": {
                        display: "flex",
                        justifyContent: "end",
                        padding: "1.3rem 2rem",
                    },

                    button: {
                        height: "fit-content",
                    },

                    ".navigationDiv": {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        border: "none",

                        "> div:last-child": {
                            display: "none",
                        },

                        "> a": {
                            padding: "1.3rem 2rem",
                            borderRight: "none"
                        },
                    },

                    ".footerDiv": {
                        display: "flex",

                        "> div:first-child": {
                            flex: 1
                        },

                        ".usefulLinks": {
                            display: "none"
                        }
                    }
                }
            }
        }
    }
})