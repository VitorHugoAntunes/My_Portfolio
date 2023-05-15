import { styled } from "@stitches/react";

export const TagFolderDiv = styled('div', {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    span: {
        width: "30rem",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    }
})