module.exports = {
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primary: '#FF6B35',
            secondary: '#004E89',
            accent: '#00A896',
            background: '#F7F7F7',
            text: '#333333'
          }
        }
      },
      plugins: [
        require('@tailwindcss/forms')
      ]
    }
