use instagram;

create table user (
	id INT,
    age INT,
    name varchar(30) not null,
    email varchar(30) unique,
    followers int default 0,
    following int,
    constraint check (age >= 13),
    primary key (id)
);

insert into user
(id,age,name,email,followers, following)
values
(1,14,"adam","adam@gmail.com", 123,145),
(2,15,"bob","bob@gmail.com", 200,205),
(3,16,"casey","casey@gmail.com", 340,145),
(4,17,"donald","donald@gmail.com", 238,300);


select id,name,email from user;
select * from user;
select distinct following from user;



create table post(
	id int primary key,
    content varchar(100),
    user_id int,
    foreign key (user_id) references user(id)
);