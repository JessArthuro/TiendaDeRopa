
DROP TABLE IF EXISTS Ropa CASCADE;

CREATE TABLE Ropa
(
    id bigserial NOT NULL,
    marca text NOT NULL,
    tipo text NOT NULL,
    cantidad text,
    color text,
    precio text,
    PRIMARY KEY(id)
);