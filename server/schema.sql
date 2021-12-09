CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer,
  tweet text,
  postTime text,
  room text,
  userId integer
);

CREATE TABLE users (
  name text
);



 /* FOREIGN KEY (userId) REFERENCES users(id),

  PRIMARY KEY (id number ),
 /*
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

