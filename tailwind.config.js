/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'surface': '#ffffff',
        'surface-bright': '#ffffff',
        'surface-dim': '#f5f5f5',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fafafa',
        'surface-container': '#f5f5f5',
        'surface-container-high': '#eeeeee',
        'surface-container-highest': '#e5e5e5',
        'surface-variant': '#f5f5f5',
        'on-surface': '#000000',
        'on-background': '#000000',
        'on-surface-variant': '#666666',
        
        'primary': '#000000',
        'primary-dim': '#333333',
        'on-primary': '#ffffff',
        'primary-container': '#e5e5e5',
        'on-primary-container': '#000000',
        
        'secondary': '#666666',
        'secondary-dim': '#999999',
        'on-secondary': '#ffffff',
        'secondary-container': '#f0f0f0',
        'on-secondary-container': '#111111',

        'tertiary': '#333333',
        'tertiary-dim': '#666666',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#e0e0e0',
        'on-tertiary-container': '#000000',

        'error': '#ff3333',
        'error-dim': '#cc0000',
        'on-error': '#ffffff',
        'error-container': '#ffcccc',
        'on-error-container': '#330000',

        'outline': '#cccccc',
        'outline-variant': '#e5e5e5',
        
        'inverse-surface': '#000000',
        'inverse-on-surface': '#ffffff',
        'inverse-primary': '#ffffff',
        'surface-tint': '#000000',
      },
      borderRadius: {
        'DEFAULT': '0px',
        'lg': '0px',
        'xl': '0px',
        'full': '9999px',
      },
      fontFamily: {
        'headline': ['Montserrat', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
        'label': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = config
