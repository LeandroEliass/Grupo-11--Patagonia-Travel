CREATE DATABASE IF NOT EXISTS patagoniaTravel_db;
USE patagoniaTravel_db;



CREATE TABLE nacionalidad(
   id INT PRIMARY KEY AUTO_INCREMENT,
   pais VARCHAR(100) NOT NULL
);

CREATE TABLE ciudad(
   id INT PRIMARY KEY AUTO_INCREMENT,
   nombre VARCHAR(100) NOT NULL
);

CREATE TABLE categorias(
   id INT PRIMARY KEY AUTO_INCREMENT,
   nombre VARCHAR(100) NOT NULL
);
CREATE TABLE baños(
   id INT PRIMARY KEY AUTO_INCREMENT,
   tipos VARCHAR(100) NOT NULL
);
CREATE TABLE servicios(
   id INT PRIMARY KEY AUTO_INCREMENT,
   tipos VARCHAR(100) NOT NULL
);

CREATE TABLE imagen(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250)
);
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE,
    id_nacionalidad SMALLINT,
    id_ciudad SMALLINT,
    admin BOOLEAN,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(255) NOT NULL,
    id_imagen INT,
    FOREIGN KEY (id_nacionalidad) REFERENCES nacionalidad(id),
    FOREIGN KEY (id_ciudad) REFERENCES ciudad(id),
    FOREIGN KEY (id_imagen) REFERENCES imagen(id)
);
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    id_ciudad SMALLINT,
    dirección TEXT NOT NULL,
    id_categoria SMALLINT,
    capacidad_personas SMALLINT NOT NULL,
    id_baños INT NOT NULL,
    descripcion TEXT NOT NULL,
    price INT NOT NULL,
    id_imagen INT,
    FOREIGN KEY (id_ciudad) REFERENCES ciudad(id),
    FOREIGN KEY (id_imagen) REFERENCES imagen(id)
);
CREATE TABLE servicios_productos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT,
    servicio_id INT,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (servicio_id) REFERENCES servicios(id)
);



