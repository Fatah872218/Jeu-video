CREATE TABLE personnages (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
nom VARCHAR(150 ) NOT NULL UNIQUE,
contenu TEXT  NOT NULL UNIQUE,
experience INT DEFAULT 0,
niveau INT DEFAULT 1
);


CREATE TABLE attaques (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
nom VARCHAR(150) NOTNULL,
type VARCHAR(150)NOT NULL,
degats int NOTNULL


);



CREATE TABLE personnages_attaques(
personnages_id INTEGER NOT NULL,
attaques_id INTEGER NOT NULL,

PRIMARY KEY (personnages_id,attaques_id),
FOREIGN KEY (personnages_id) REFERENCES personnages(id) 
FOREIGN KEY (attaques_id) REFERENCES attaques(id) 
 


);