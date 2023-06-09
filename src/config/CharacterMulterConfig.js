const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4'
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      const allowedContentTypes = ['image/png', 'image/jpeg'];
      const fileType = file.mimetype;

      console.log(fileType);

      if (allowedContentTypes.includes(fileType)) {
        cb(null, {
          // fieldName: file.fieldname,
          contentType: fileType
        });
      } else {
        cb(new Error('File not supported.'), null);
      }
    },
    key: function (req, file, cb) {
      cb(null, `${Date.now().toString()}.png`);
    }
  })
});

module.exports = {
  uploadImage: upload.single('filename')
};
