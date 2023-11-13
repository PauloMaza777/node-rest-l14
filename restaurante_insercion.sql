USE restaurante;

INSERT INTO productos_tipos (nombre) VALUES
('Entrada'),
('Plato Principal'),
('Postre'),
('Bebida'),
('Acompañamiento');

INSERT INTO menus (nombre, hora_inicio, hora_final) VALUES
('Desayuno', '08:00:00', '10:00:00'),
('Almuerzo', '12:00:00', '14:00:00'),
('Cena', '18:00:00', '20:00:00'),
('Bar', '20:00:00', '23:00:00'),
('Especial del Chef', '19:00:00', '21:00:00');

INSERT INTO categorias (id_categoria, fk_id_menu, nombre) VALUES
(1, 1, 'Desayuno'),
(2, 2, 'Plato Principal Almuerzo'),
(3, 2, 'Entradas Almuerzo'),
(4, 3, 'Plato Principal Cena'),
(5, 4, 'Bebidas Bar'); 

INSERT INTO productos (descripcion, precio, fk_id_tipo, fk_id_categoria) VALUES
('Huevos Revueltos', 8.99, 1, 1),
('Filete de Res', 15.50, 2, 2),
('Ensalada César', 6.75, 3, 3),
('Salmón a la Parrilla', 18.99, 2, 4),
('Margarita', 7.50, 4, 5);