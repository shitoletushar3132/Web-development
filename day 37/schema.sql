create table user(
    id varchar(50) PRIMARY KEY,
    username varchar(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT null
);