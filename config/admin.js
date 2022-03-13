module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36c5149e45081e8b5e0bba4073183e9d'),
  },
});
