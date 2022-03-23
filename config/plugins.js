module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIA32MQTNEXBHB3PFVW',
        secretAccessKey: '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',
        region: 'us-east-1',
        params: {
          Bucket: 'relojeria-ecommerce',
        },
      },
    },
  });