/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkblue: {
            '05': '#091B6F',
            '04': '#0D28A6',
            '03': '#5E70C4',
            '02': '#AEB7E1',
            '01': '#CFD4ED',
          },
          limegreen: {
            '05': '#3D7B3F',
            '04': '#5CB85F',
            '03': '#92D094',
            '02': '#C9E7CA',
            '01': '#DEF1DF',
          },
        },
        alert: {
          danger: '#FA2C5A',
          warning: '#F9CC00',
          success: '#73CA5C',
        },
        neutral: {
          '05': '#151515',
          '04': '#3C3C3C',
          '03': '#8A8A8A',
          '02': '#D0D0D0',
          '01': '#FFFFFF'
        },
      },
      boxShadow: {
        'low': '0 0 4px 0 rgba(0, 0, 0, 0.15)',
        'high': '0 0 10px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
