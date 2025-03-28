CREATE DATABASE tableau_de_bord;

USE tableau_de_bord;

CREATE TABLE vehicule (
    id_vehicule INT AUTO_INCREMENT PRIMARY KEY,
    matricule VARCHAR(50),
    acceleration DECIMAL(5,2),
    freinage DECIMAL(5,2),
    reservoire DECIMAL(5,2),
    consommation DECIMAL(5,2)
);
--mbola tsy nahiditra anaty base
CREATE TABLE evenement (
    id_evenement INT AUTO_INCREMENT PRIMARY KEY,
    id_vehicule INT,
    vitesse_initial DECIMAL(5,2),
    acceleration DECIMAL(5,2),
    temps TIME,
    FOREIGN KEY (id_vehicule) REFERENCES vehicule(id_vehicule) ON DELETE CASCADE
);

INSERT INTO vehicule (matricule, acceleration, freinage, reservoire, consommation) 
VALUES 
('4317TBL', 10.00, 20.00, 80.00, 0.5),
('9284TRM', 15.50, 5.50, 55.00, 0.1),
('3051BCA', 8.00, 15.00, 60.00, 0.2);
