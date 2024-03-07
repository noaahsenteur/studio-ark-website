import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'display-one': [
        '14rem',
        {
          fontWeight: '600',
          lineHeight: '14.4rem',
          letterSpacing: '-0.75rem',
        },
      ],
      'display-two': [
        '11rem',
        {
          fontWeight: '600',
          lineHeight: '11.2rem',
          letterSpacing: '-0.55rem',
        },
      ],
      'display-three': [
        '9.8rem',
        {
          fontWeight: '600',
          lineHeight: '10.4rem',
          letterSpacing: '-0.45rem',
        },
      ],
      'heading-one': [
        '8.4rem',
        {
          fontWeight: '600',
          lineHeight: '8.9rem',
          letterSpacing: '-0.35rem',
        },
      ],
      'heading-two': [
        '6.3rem',
        {
          fontWeight: '600',
          lineHeight: '7.3rem',
          letterSpacing: '-0.25rem',
        },
      ],
      'heading-three': [
        '5.4rem',
        {
          fontWeight: '600',
          lineHeight: '6.3rem',
          letterSpacing: '-0.15rem',
        },
      ],
      'heading-four': [
        '4.2rem',
        {
          fontWeight: '600',
          lineHeight: '4.6rem',
          letterSpacing: '-0.02rem',
        },
      ],
      'heading-five': [
        '3.4rem',
        {
          fontWeight: '600',
          lineHeight: '4rem',
          letterSpacing: '-0.01rem',
        },
      ],
      'heading-six': [
        '2.8rem',
        {
          fontWeight: '600',
          lineHeight: '3.4rem',
          letterSpacing: '-0.06rem',
        },
      ],
      'body-3xl': ['2.6rem', '4rem'],
      'body-2xl': ['2.2rem', '3.8rem'],
      'body-xl': ['2rem', '3.2rem'],
      'body-lg': ['1.8rem', '3rem'],
      'body-md': ['1.6rem', '2.6rem'],
      'body-sm': ['1.4rem', '2.2rem'],
      'body-xs': ['1.2rem', '2rem'],
    },
  },
  plugins: [],
};
