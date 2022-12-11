module.exports = {
  // AUTHORIZATION
  AUTHORIZATION_HEADER_NAME: "Authorization",
  AUTHORIZATION_SCHEMA: "Bearer ",
  // TOKENS
  ACCESS_TOKEN_KEY: "access-token",
  REFRESH_TOKEN_KEY: "refresh-token",
  CSRF_TOKEN_KEY: "x-csrf-token",
  JWT_SECRET: process.env.JWT_SECRET || "events-secret",
  // EXPIRES - access-token
  ACCESS_TOKEN_SAVE: 24 * 60 * 60 * 1000,
  ADMIN_ACCESS_TOKEN_EXPIRE: "14d",
  USER_ACCESS_TOKEN_EXPIRE: "30d",
  // EXPIRES - refresh-token
  REFRESH_TOKEN_SAVE: 7 * 24 * 60 * 60 * 1000,
  ADMIN_REFRESH_TOKEN_EXPIRE: "14d",
  USER_REFRESH_TOKEN_EXPIRE: "60d",

  VERIFY_TOKEN_EXPIRE: 2 * 60,

  CORS_DOMAIN: process.env.CORS_DOMAIN?.split(",") || ["http://localhost:3000"],
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN || "localhost",
  // STORAGE
  GOOGLE_CLOUD_PROJECT_ID: process.env.GOOGLE_CLOUD_PROJECT_ID || "event-mn",
  GOOGLE_CLOUD_KEY_FILE:
    process.env.GOOGLE_CLOUD_KEY_FILE || "event-mn-98d36b3eb10e.json",
  BUCKET_NAME: process.env.BUCKET_NAME || "test-event-mn",
  BUCKET_NAME_THUMBNAIL:
    process.env.BUCKET_NAME_THUMBNAIL || "test-event-mn-thumb",
};
