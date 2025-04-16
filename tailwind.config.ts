export default {
  darkMode: 'class', // Enables `dark` variants via class
  content: [
    './src/**/*.{html,js,svelte,ts}', // Scan all source files
  ],
  theme: {
    extend: {
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
    },
  },
};
