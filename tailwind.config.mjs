import defaultTheme from 'tailwindcss/defaultTheme';
import { fluidCorePlugins, fluidExtractor } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    extract: fluidExtractor(),
  },
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: '#FFFFFF',
      black: {
        700: '#282828',
        600: '#383838',
        500: '#4B4B4B',
      },
      'blue-black': {
        600: '#475467',
        500: '#5F6980',
        200: '#EAECF0',
        100: '#F2F4F7',
        50: '#F9FAFB',
      },
      orange: {
        900: '#5B2D07',
        800: '#84420A',
        700: '#AC560E',
        600: '#D56A11',
        500: '#FD7E14',
        400: '#FD933A',
        300: '#FEA75F',
        200: '#FEBC85',
        100: '#FED1AA',
        50: '#FFEAD8',
      },
    },
    fluid: {
      defaultScreens: ['37.5rem', '144rem'],
    },
    fontSize: {
      'display-one': [
        '14rem',
        {
          lineHeight: '14rem',
          letterSpacing: '-.75rem',
          fontWeight: '600',
        },
      ],
      'display-two': [
        '11rem',
        {
          lineHeight: '11.2rem',
          letterSpacing: '-.55rem',
          fontWeight: '600',
        },
      ],
      'display-three': [
        '9.8rem',
        {
          lineHeight: '10.4rem',
          letterSpacing: '-.45rem',
          fontWeight: '600',
        },
      ],
      'heading-one': [
        '8.4rem',
        {
          lineHeight: '8.9rem',
          letterSpacing: '-.35rem',
          fontWeight: '600',
        },
      ],
      'heading-two': [
        '6.3rem',
        {
          lineHeight: '7.3rem',
          letterSpacing: '-.25rem',
          fontWeight: '600',
        },
      ],
      'heading-three': [
        '5.4rem',
        {
          lineHeight: '6.3rem',
          letterSpacing: '-.15rem',
          fontWeight: '600',
        },
      ],
      'heading-four': [
        '4.2rem',
        {
          lineHeight: '4.6rem',
          letterSpacing: '-.2rem',
          fontWeight: '600',
        },
      ],
      'heading-five': [
        '3.4rem',
        {
          lineHeight: '4rem',
          letterSpacing: '-.1rem',
          fontWeight: '600',
        },
      ],
      'heading-six': [
        '2.8rem',
        {
          lineHeight: '3.4rem',
          letterSpacing: '-.06rem',
          fontWeight: '600',
        },
      ],
      'body-2xl': ['2.6rem', '4rem'],
      'body-xl': ['2.2rem', '3.8rem'],
      'body-lg': ['2rem', '3.2rem'],
      'body-md': ['1.8rem', '3rem'],
      'body-sm': ['1.6rem', '2.6rem'],
      'body-xs': ['1.4rem', '2.2rem'],
      'body-xxs': ['1.2rem', '2rem'],
    },
  },
  plugins: [fluidCorePlugins],
};
