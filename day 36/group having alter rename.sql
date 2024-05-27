use instagram;

select * from user;

select *
from user where (followers>=200);

select *
from user where (age<16);

select * from user where (age+1 = 18);

select *
from user where (age> 15 and followers > 200);

select *
from user where (age between 15 and 17);


select *
from user where email IN("adam@gmail.com","bob@gmail.com","casey@gmail.com","tusharshitle@gmail.com");

select name, age, email 
from user 
where age not in(14,16);

select name, age ,email
from user 
where age>14 limit 2;

select name,age,email,followers,following
from user
order by followers desc;

select max(followers)
from user;


select count(age)
from user 
where age > 14;

select min(age)
from user;

select sum(followers)
from user;

select age,max(followers)
from user
group by age;

select age,max(followers)
from user
group by age
having max(followers) >= 200;

select age,max(followers)
from user
group by age
having max(followers) >= 200
order by age desc;

set sql_safe_updates = 0;

update user 
set age = 17
where age = 16;

select * from user;

delete from user 
where age = 14;

alter table user 
add column city varchar(25) default "pune";

update user 
set city = "pune"
where city = "default";


alter table user 
drop column age;

alter table instauser 
rename to user;

alter table user 
change column followers subs int default 0;


alter table user 
modify subs int default 5;

select * from user;



drop table post;

truncate table user;
