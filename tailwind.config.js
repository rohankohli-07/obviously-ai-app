/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      md: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '44px'],
      '5xl': ['48px', '60px'],
      '6xl': ['60px', '72px'],
    },
    extend: {
      boxShadow: {
        '3xl': '0px 2px 4px -2px #0A0D120F',
        '4xl': '0px 4px 6px -1px #0A0D121A',
        modal: '0px 20px 24px -4px #10182808',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        'obviously-gray': {
          50: '',
          100: '#FAFAFA',
          200: 'rgb(var(--color-gray-200))',
          300: 'rgb(var(--color-gray-300))',
          400: 'rgb(var(--color-gray-400))',
          500: '#E9EAEB',
          600: '#E4E7EC',
          700: '#D5D7DA',
          800: '#D3D3D3',
          900: '#B9B9B9',
          950: 'rgb(var(--color-gray-950))',
        },
        'obviously-black': {
          500: '#535862',
          600: '#414651',
          800: '#181D27',
        },
        'obviously-blue': {
          500: '#2C68FF',
          600: '#3882FF',
        },
        'obviously-black-alpha': {
          800: '#101828B1',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
