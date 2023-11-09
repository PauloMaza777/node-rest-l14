Create database if not exists restaurante;

use restaurante;

create table productos_tipos(
    
    id_tipo integer not null auto_increment,
    nombre varchar(225) not null,
    primary key (id_tipo)

)

create table menus(

    id_menu integer not null auto_increment,
    nombre varchar(225) not null,
    hora_inicio time not null,
    hora_final time not null,
    primary key (id_menu)
)

create table categorias(

    id_categoria integer not null,
    fk_id_menu integer not null,
    nombre varchar(225) not null,
    primary key (id_categoria),
    foreign key (fk_id_menu) references menus(id_menu)
)

create table productos(

    id_producto integer not null auto_increment,
    descripcion varchar(225) not null,
    precio decimal(5,2) not null,

    fk_id_tipo integer not null,
    fk_id_categoria integer not null,
    primary key (id_producto),
    foreign key (fk_id_tipo) references productos_tipos(id_tipo),
    foreign key (fk_id_categoria) references categorias(id_categoria)
)