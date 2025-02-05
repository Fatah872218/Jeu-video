



CREATE TABLE personnages (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(150) NOT NULL,
    contenu TEXT NOT NULL,
    experience INT DEFAULT 0,
    niveau INT DEFAULT 1
);



CREATE TABLE attaques (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(150) NOT NULL,
    type VARCHAR(150) NOT NULL,
    degats INT NOT NULL
);



CREATE TABLE personnages_attaques (
    personnages_id INT NOT NULL,
    attaques_id INT NOT NULL,
    PRIMARY KEY (personnages_id, attaques_id),
    FOREIGN KEY (personnages_id) REFERENCES personnages(id),
    FOREIGN KEY (attaques_id) REFERENCES attaques(id)
);


CREATE TABLE monstres (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    espece VARCHAR(150) NOT NULL,
     pointdevie INT DEFAULT 0
);




CREATE TABLE combats (
   
   lieu VARCHAR(150) NOT NULL,
     dt DATE,
     personnages_id INT NOT NULL,
     monstres_id INT NOT NULL,
     FOREIGN KEY (personnages_id) REFERENCES personnages(id),
    FOREIGN KEY (monstres_id) REFERENCES monstres(id),
    PRIMARY KEY (personnages_id, monstres_id)
);




INSERT INTO personnages (nom, contenu, experience, niveau) VALUES
('Ghazak Khan', 'Ghazak est l''un des généraux mercenaires les plus talentueux de son époque. Son armée abrite une bonne partie des pires régiments de mercenaires. Comme les Gobelins Mutants de Manglan, les Guerriers Orques des Longues Dagues ou les terrifiants Trolls de Guerre des Montagnes Grises. Avec l''aide de ces derniers et de nombreuses autres crapules, Ghazak s''est forgé une solide réputation de massacreur au cours des innombrables campagnes où il a passé au fil de l''épée (et parfois dévoré) les populations de cités entières. Lorsque ses bannières ornées de queues de loups noires apparaissent à l''horizon, un vent de désespoir s''abat sur la région, le terrible Hobgobelin n''ayant jamais été vaincu à la bataille.', 150, 6),

('Asarnil, le Maître des Dragons', 'La légende d''Asarnil, le Maître des Dragons, est célèbre à Ulthuan. Asarnil était le fils d''Aserion, le héros de mille batailles. Depuis son plus jeune âge, Asarnil fut élevé dans la tradition martiale de Caledor. Il devint un grand guerrier, et l''un des rares Hauts Elfes encore capables de réveiller les Dragons qui dorment sous les montagnes du royaume des Asur. Son compagnon, Croc de Mort, était l''un des plus grands Dragons que les Princes Dragons pouvaient encore tirer de leur lourd sommeil. Ensemble, ils étaient presque invincibles, et leur réputation s''étendait bien au-delà des frontières de Caledor. Durant la Grande Guerre Contre le Chaos, Asarnil se distingua avec ses pairs Princes Dragons. Asarnil les menait au combat, et c''est grâce à lui que Caledor résista pendant ces âges sombres. Après la bataille des plaines de Finuval, Asarnil reçut l''ordre de rallier l''armée Elfique qui partait de Lothern. Avec les renforts des Princes Dragons, les forces combinées de Lothern et de Caledor pourraient annihiler les dernières troupes Elfes Noires en Ulthuan.', 250, 7),

('Borgio Casse-Murailles', 'Borgio, Prince de Miragliano, a été surnommé le "Casse-Murailles" à cause de sa grande expertise des sièges. On dit qu''aucune cité, même Miragliano avec ses fameux remparts, ne pouvait lui résister. Il est certain que Borgio était un maître tacticien, et qu''il remporta la plupart de ses batailles. En trois grandes victoires, il fit de Miragliano la principauté la plus puissante de Tilée. Par la suite, ses ennemis évitèrent les batailles rangées pour s''abriter derrière les murs de leurs cités et succomber malgré tout aux techniques de siège de Borgio. Il était également un politicien adroit, bien que plutôt tyrannique. Ses opposants et ses rivaux ne faisaient pas de vieux os !', 220, 5),

('Lietpold le Noir', 'Lietpold est un célèbre commandant mercenaire qui se nomme lui-même "le Noir", même si un certain nombre d''épithètes beaucoup moins flatteurs (le Sanguinaire, le Boucher, le Menteur, Tourne-Casaque, le Trois Fois Maudit, le Prince Corruptible) lui ont été appliqués aussi bien par d''anciens alliés que les ménestrels des tavernes. C''est un guerrier dont les actions lui ont valu non seulement un petit royaume -il a en effet réussi ces dernières années à conquérir un domaine dans les Principautés Frontalières- mais aussi une place dans le folklore populaire pour ses exploits sanglants et ses trahisons.', 190, 4);


INSERT into attaques (nom,type,degats)VALUES

("magie","boule de feu",5),
("combat","hache",3),
("magie noire","sortilege",7),
("tir a distance","arc",1),
("invocation monstre","destruction massive",18);


INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (1, 1); 
INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (1, 2);

INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (2, 1);  
INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (2, 3);

INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (3, 4);  --
INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (3, 5);

INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (4, 2); 
INSERT INTO personnages_attaques (personnages_id, attaques_id) VALUES (4, 3);

insert into monstres(espece,pointdevie) VALUES
('orc',10),
('troll des bois',40),
('gnome',6),
('nain',9),
('dragon',119); 

INSERT INTO combats (lieu, dt, personnages_id, monstres_id) VALUES
('mont de la desolation', '1021-11-23', 1, 2),
('mont de la solitude', '1000-11-03', 2, 3),
('mont du chaos', '1031-09-14', 3, 1),
('mont du massacre', '0728-02-05', 4, 1);



SELECT * FROM personnages;
SELECT * FROM attaques;
SELECT id, nom FROM attaques;
SELECT * FROM personnages_attaques;
SELECT * FROM monstres;
SELECT * FROM combats;