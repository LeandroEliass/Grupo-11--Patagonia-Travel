CREATE DATABASE IF NOT EXISTS patagoniaTravel_db;
USE patagoniaTravel_db;



CREATE TABLE nacionalities(
   id INT PRIMARY KEY AUTO_INCREMENT,
   country VARCHAR(100) NOT NULL
);

CREATE TABLE cities(
   id INT PRIMARY KEY AUTO_INCREMENT,
   city VARCHAR(100) NOT NULL
);

CREATE TABLE categories(
   id INT PRIMARY KEY AUTO_INCREMENT,
   category VARCHAR(100) NOT NULL
);
CREATE TABLE baths(
   id INT PRIMARY KEY AUTO_INCREMENT,
   bath VARCHAR(100) NOT NULL
);
CREATE TABLE services(
   id INT PRIMARY KEY AUTO_INCREMENT,
   service VARCHAR(100) NOT NULL
);
CREATE TABLE rooms(
   id INT PRIMARY KEY AUTO_INCREMENT,
   room VARCHAR(100) NOT NULL
);


CREATE TABLE images(
    id INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(250)
);
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_birth DATE,
    id_nacionality INT,
    id_city INT,
    admin BOOLEAN,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(255) NOT NULL,
    id_image INT,
    FOREIGN KEY (id_nacionality) REFERENCES nacionalities(id),
    FOREIGN KEY (id_city) REFERENCES cities(id),
    FOREIGN KEY (id_image) REFERENCES images(id)
);
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    id_city INT,
    address TEXT NOT NULL,
    id_category INT,
    capacity INT NOT NULL,
    id_bath INT NOT NULL,
    id_room INT NOT NULL,
    surface INT,
    description TEXT NOT NULL,
    price INT NOT NULL,
    id_image INT,
    FOREIGN KEY (id_city) REFERENCES cities(id),
    FOREIGN KEY (id_image) REFERENCES images(id),
    FOREIGN KEY (id_category) REFERENCES categories(id),
    FOREIGN KEY (id_room) REFERENCES rooms(id),
    FOREIGN KEY (id_bath) REFERENCES baths(id)
);
CREATE TABLE services_products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    service_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (service_id) REFERENCES services(id)
);



