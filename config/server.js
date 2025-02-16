module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_URL', 'https://brcadv.com/strapi'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2e48878df91bba73d7f2365772c4dade'),
    },
  },
});
