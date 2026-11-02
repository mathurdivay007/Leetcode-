# Write your MySQL query statement below
select f.firstName,f.lastName,a.city,a.state
from Person f
left outer join Address a
on f.personId=a.personId;