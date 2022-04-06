# Checklist

## Descripcion del sistema

Se plantea un sistema para una inmobiliaria, donde los usuarios son tanto los clientes de la misma, como sus empleados:

Para el cliente, pretendemos lograr ofrecer una interfaz amigable, simple para encontrar mediante filtros apropiados la propiedad deseada. Además facilitar la gestión de post-ventas y alquileres vigentes.

Para el empleado, se desarrollará una interfaz para facilitar la atención de los inmuebles que tenga a su cargo. Permitiendo cargar propiedades con sus características disponibles para alquiler y/o venta, gestionar la base de datos, etc.

## Backend

|Requerimiento funcional|cant. mín.<br>1 o 2 integ|cant. máx.<br>3 o 4 integ|Detalle/Listado de casos|Cumple|
|:-|-:|-:|:-|-|
|ABMC simple|1 x integ|1 x integ|Localidad, Tipos de inmuebles, Servicios, Usuarios
|ABMC dependiente|1|2|Inmuebles, Turno de visita
|Listado simple|1|1|Servicios
|Listado complejo obligatorio|1|2|Inmuebles según localidad, Usuarios según rol
|Listado adicional con filtro|0|0|
|Detalle básico|1(*)|2(*)|Inmuebles, Servicios (\*)mas detalles que los listados complejos
|Detalle parametrizable|0|0|
|Otros|0|0|

(\*) Los detalles básicos pueden ser reemplazado por un detalle parametrizados en los

## Frontend

|Requerimiento|Cumple|
|:-|-|
|Invocar API listado||
|Invocar API detalle||
|Mostrar detalle al hacer click <br>en elemento del listado||

## Requerimientos Técnicos

|Requerimiento técnico|Cumple|
|:-|-|
|Framework frontend||
|Framework CSS o preprocesador CSS||
|Framework backend||
|Uso de API REST o GraphQL||
|ORM/ODM||
|Base de datos persistente||

## Integrantes del grupo

|Nombre|Legajo|Mail|
|:-|:-|:-|
|Arias, Ramiro|43912|ariasramirox@gmail.com|
|Altuzarra, Ernesto Tomas|45840|e.tomasaltuzarra@gmail.com|
|Rios, Emiliano Dario|46408|emilianorios99@gmail.com|
|Sandoval, Julian|47087|juliansandoval1996@gmail.com|
