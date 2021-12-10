DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name varchar(20),
  UNIQUE KEY unique_name (name)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  text text,
  postTime text,
  roomname text,
  userId integer,
  FOREIGN KEY (userId) REFERENCES users(id)
);





 /* FOREIGN KEY (userId) REFERENCES users(id),

  PRIMARY KEY (id number ),
 /*
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

