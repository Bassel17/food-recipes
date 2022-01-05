module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '90448464ce680b8253fc58f93dd45f2a'),
  },
});
