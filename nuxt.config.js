export default {
  // ...existing code...
  serverMiddleware: [
    { path: '/api/login', handler: '~/server/api/login.js' }
  ],
  plugins: [
    '~/plugins/prisma.js'
  ]
  // ...existing code...
}

