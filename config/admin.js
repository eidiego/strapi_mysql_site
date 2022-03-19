module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fc837bc6ca2fcbfe3c7d4939f6a15966'),
  },
});
