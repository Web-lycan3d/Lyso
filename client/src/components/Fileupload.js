/** @format */

export const FileUpload = () => {
  const bucketName = "lyso-docs";
  const bucketRegion = "ap-south-1";

  window.AWS.config.update({
    region: bucketRegion,
    credentials: new window.AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_AWS_KEY,
    }),
  });
  const s3 = new window.AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: bucketName },
  });
  return s3;
};
