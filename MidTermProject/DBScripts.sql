CREATE DATABASE zippyusedautos;

USE zippyusedautos;

CREATE TABLE makes (
    make_id INT AUTO_INCREMENT PRIMARY KEY,
    make_name VARCHAR(100) NOT NULL
);

CREATE TABLE types (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(100) NOT NULL
);

CREATE TABLE classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL
);

CREATE TABLE vehicles (
    vehicle_id INT AUTO_INCREMENT PRIMARY KEY,
    make_id INT,
    type_id INT,
    class_id INT,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    color VARCHAR(50),
    price DECIMAL(10, 2),
    mileage INT,
    FOREIGN KEY (make_id) REFERENCES makes(make_id),
    FOREIGN KEY (type_id) REFERENCES types(type_id),
    FOREIGN KEY (class_id) REFERENCES classes(class_id)
);

INSERT INTO makes (make_id, make_name) VALUES
(1, 'Chevy'),
(2, 'Ford'),
(3, 'Cadillac'),
(4, 'Nissan'),
(5, 'Hyundai'),
(6, 'Dodge'),
(7, 'Infiniti'),
(8, 'Buick');

INSERT INTO types (type_id, type_name) VALUES
(1, 'SUV'),
(2, 'Truck'),
(3, 'Sedan'),
(4, 'Coupe');

INSERT INTO classes (class_id, class_name) VALUES
(1, 'Utility'),
(2, 'Economy'),
(3, 'Luxury'),
(4, 'Sports');