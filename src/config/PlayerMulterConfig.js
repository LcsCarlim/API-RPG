const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION'
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'YOUR_S3_BUCKET_NAME',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = {
  uploadImage: upload.single('image')
};
