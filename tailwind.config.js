/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./dist/**/*.html',
                './dist/**/*.js'],
    theme: {
        extend: {
            colors: {
            primary: '#041540'
            },
            fontFamily: {
            roboto:['Roboto', ...defaultTheme.fontFamily.sans]
            },
            backgroundImage: {
                'background': "url('/img/bg.png')"
            }
        },
    },
    plugins: [],
}
