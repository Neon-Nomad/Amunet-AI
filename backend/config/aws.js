const AWS = require('aws-sdk');

/**
 * AWS S3 client configuration. Requires AWS credentials and region to be
 * available via environment variables. These are typically provided by
 * AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_REGION.
 *
 * This module exports a configured S3 instance that can be used
 * throughout the application to interact with AWS S3.
 */
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

module.exports = s3;