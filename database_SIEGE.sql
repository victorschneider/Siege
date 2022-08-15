CREATE SCHEMA sns;
CREATE TABLE sns.user (
  id int NOT NULL,
  firstName VARCHAR(50) NULL DEFAULT NULL,
  lastName VARCHAR(50) NULL DEFAULT NULL,
  username VARCHAR(50) NULL DEFAULT NULL,
  email VARCHAR(50) NULL,
  passwordHash VARCHAR(32) NOT NULL,
  PRIMARY KEY (id));

  CREATE TABLE sns.user_follower (
  id BIGINT NOT NULL,
  sourceId BIGINT NOT NULL,
  targetId BIGINT NOT NULL,
  type SMALLINT NOT NULL DEFAULT 0,
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_ufollower_source
    FOREIGN KEY (sourceId)
    REFERENCES sns.user (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE sns.user_follower 
ADD CONSTRAINT fk_ufollower_target
  FOREIGN KEY (targetId)
  REFERENCES sns.user (id)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

  CREATE TABLE sns.user_post (
  id BIGINT NOT NULL,
  userId BIGINT NOT NULL,
  post_bio VARCHAR NULL DEFAULT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_upost_user
    FOREIGN KEY (userId)
    REFERENCES sns.user (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
