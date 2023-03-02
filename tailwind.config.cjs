/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    screens : {
      xxs: '300px',
      'xxs+': '350px',
      xs: '400px',
      sm: '480px',
      'sm+': '655px',
      md: '768px',
      'service-break': '920px',
      lg: '976px',
      'lg-md': '1100px',
      'lg+': '1280px',
      xl: '1440px',
      xxl: '1600px',
      '3xl': '1656px'
    },
    extend: {
      backgroundImage: {
        'img1': "url('./src/assets/farak-padta-hai-background.webp')"
      },
      height: {
        'xl+': '1080px',
        'lg+': '640px',
        'lg-': ' 610px',
        'nor': '750px' 
      },
      width:{
        'lg-sm': '455px',
        
      },
      colors: {
        sun :{
          light: 'var(--color-text-muted)',
          dark:  `var(--color-text-base)`,
        },
        blue:{
          light: '#d7ecff',
          dark: '#005099'
        },
        red:{
          light: '#ffe5e5',
          dark: '#ac0303'
        },
        yellow:{
          light: '#fff5e1',
          dark: '#917304'
        },
        green : {
          'exact' : '#44b31f',
          light: '#d8ffcb',
          dark: '#318216'
        },
        gray: {
        'dark': '#252525',
        'light': '#e7e5e4',
        'text': '#8e8e8e',
        'dense': '#1b1b1b',
        'lighter': '#545454'
        },
       
        
    },
      textColor : {
        sun : {
          light: 'var(--color-text-muted)',
          light_hover: 'var(--color-text-muted-hover)',
          dark:  `var(--color-text-base)`,
          dark_hover : `var(--color-text-base-hover)`, 
          'light-btn_hover': 'var(--color-button-base-hover)',
          'dark-btn_hover': 'var(--color-button-muted-hover)'
        
        }
      },
      backgroundColor : {
        sun : {
          darkmode: 'var(--color-fill)',

          "card-primary": 'var(--color-card-base-primary)',
          "card-secondary": 'var(--color-card-base-secondary)',
          light: 'var(--color-text-muted)',
          light_hover: 'var(--color-text-muted-hover)',
          dark:  `var(--color-text-base)`,
          dark_hover : `var(--color-text-base-hover)`,
          "light-btn":  `var(--color-button-base)`,
          'light-btn-hover' : `var(--color-button-base-hover)`, 
          'dark-btn': 'var(--color-button-muted)',
          'dark-btn-hover': 'var(--color-button-muted-hover)'
          
      },
    
      },
      
      
    },
  },
  plugins: [],
}