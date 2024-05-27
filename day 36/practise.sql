create database if not exists college;

use college;

create table teacher (id int primary key,name varchar(30), subject varchar(15),salary int);

insert into teacher
values
(23,"supriya mam","DM",100000),
(31,"sonavne mam", "SDLC", 90000),
(18,"chetan", "chemistry", 45000),
(9, "ajay","math",50000);

select * from teacher;

select * from teacher 
where salary> 50000;

alter table teacher
change column salary ctc int;

update teacher
set ctc = ctc+ctc * 0.25;

alter table teacher
add column city varchar(50) default "mumbai";

alter table teacher
drop column ctc;


create table student (
	rollno int primary key,
    name varchar(30),
    city varchar(20),
    mark int
);

insert into student 
(rollno, name, city, mark)
values
(110, "adam", "delhi", 76),
(108, "bob", "pune", 88),
(124, "casey", "pune", 80),
(112, "duke", "mumbai", 65);


select * from student;

select * from student where mark > 75;

select distinct city
from student;

select city ,count(city)
from student
group by city;


select city ,max(mark)
from student
group by city;

select avg(mark)
from student;

alter table student
add column grade varchar(2);

update student 
set grade = "O"
where mark >= 80;

update student 
set grade = "A"
where mark >= 70 and mark < 80;

update student 
set grade = "B"
where mark >= 60 and mark < 70;


