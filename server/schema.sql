CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer,
  PRIMARY KEY (id),
  name text
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer,
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

