module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2f4c6b7d7c6242fd39977a310276aafd'),
  },
});
