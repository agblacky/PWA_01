module.exports = {
  pwa: {
    manifestOptions: {
      name: 'PWA Demo Employees',
      short_name: 'PWA Demo',
      theme_color: '#DDAADD',
      background_color: '#DDAADD',
      icons: [
        {
          src: './img/icons/employees_512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: './img/icons/employees_512x512.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
  },
};
