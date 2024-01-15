CREATE DATABASE programdb;

CREATE TABLE program(
     name varchar(255) PRIMARY KEY,
     price numeric,
     domain varchar(50) , 
     program_type varchar(50),
     registrations varchar(15),
     description text,
     placement_assuarance boolean,
     image_url varchar(255),
     university_name varchar(200),
     faculty_profile varchar(200),
     learning_hours_and_duration varchar(100),
     certificate_diploma varchar(50),
     eligibility_criteria varchar(255)
);


-- {
--     "name" : "user1",
--     "price": "1000",
--     "domain": "IT",
--     "program_type":"PE",
--     "registrations":"10",
--     "descriptions":"lorem ipsum",
--     "placement_assuarance":"NO",
--     "image_url":"url",
--     "university_name":"lnmiit",
--     "faculty_profile":"profile 1",
--     "learning_hours_and_duration":"40",
--     "certificate_diploma":"yes",
--     "eligibility_criteria":"none"
-- }