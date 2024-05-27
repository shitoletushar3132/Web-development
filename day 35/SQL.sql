-- Active: 1697726850987@@127.0.0.1@3306
USE student;

USE mysql;
UPDATE user SET authentication_string=PASSWORD('3132') WHERE User='root';
FLUSH PRIVILEGES;
