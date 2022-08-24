CREATE SCHEMA sns;
CREATE TABLE sns.admin(
  id int NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  passwordHash VARCHAR(30) NOT NULL,
  PRIMARY KEY (id));
  
 CREATE TABLE sns.admin_post (
   postId BIGINT NOT NULL,
   adminId BIGINT NOT NULL,
   postDescription VARCHAR(140) NULL DEFAULT NULL,
   createdAt TIMESTAMP NOT NULL,
   postTag VARCHAR NULL DEFAULT NULL,
   PRIMARY KEY(postId),
   CONSTRAINT fk_upost_user
   FOREIGN KEY (adminId)
   REFERENCES sns.admin (id)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION);
