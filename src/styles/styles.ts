import { createStitches } from '@stitches/react';

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',

            background: '#0D1117',
            darkBackground: '#010409',
            border: "#1C202A",
            icon: "#8B949E",
            text: '#535961',
            title: '#CBCFD6',
            card: '#0B1018',
            cardBackground: '#070C12',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',
            gray50: '#F7F7F7',
            blue: '#4FB3E1'
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    }
})