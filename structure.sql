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
    nacionalityId INT,
    cityId INT,
    admin BOOLEAN,
    email VARCHAR(200) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    imageId INT,
    FOREIGN KEY (nacionalityId) REFERENCES nacionalities(id),
    FOREIGN KEY (cityId) REFERENCES cities(id),
    FOREIGN KEY (imageId) REFERENCES images(id)
);
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    cityId INT,
    address TEXT NOT NULL,
    categoryId INT,
    capacity INT NOT NULL,
    bathId INT NOT NULL,
    roomId INT NOT NULL,
    surface INT,
    description TEXT NOT NULL,
    price INT NOT NULL,
    imageId INT,
    FOREIGN KEY (cityId) REFERENCES cities(id),
    FOREIGN KEY (imageId) REFERENCES images(id),
    FOREIGN KEY (categoryId) REFERENCES categories(id),
    FOREIGN KEY (roomId) REFERENCES rooms(id),
    FOREIGN KEY (bathId) REFERENCES baths(id)
);
CREATE TABLE services_products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    productId INT,
    serviceId INT,
    FOREIGN KEY (productId) REFERENCES products(id),
    FOREIGN KEY (serviceId) REFERENCES services(id)
);



