Descripción de la API
Funcionalidad:
Listar Empleados:

Endpoint: GET /rh-app/empleados
Descripción: Recupera y devuelve una lista de todos los empleados en la base de datos.
Obtener Empleado por ID:

Endpoint: GET /rh-app/empleados/{id}
Descripción: Recupera y devuelve los datos de un empleado específico basado en su ID.
Respuesta:
200 OK si el empleado es encontrado.
404 NOT FOUND si el empleado no es encontrado, lanzando RecurasoNoEncontradoEcepxion.
Agregar Empleado:

Endpoint: POST /rh-app/empleados
Descripción: Guarda un nuevo empleado en la base de datos.
Datos de Entrada: Un objeto Empleado en formato JSON.
Actualizar Empleado:

Endpoint: PUT /rh-app/empleados/{id}
Descripción: Actualiza los datos de un empleado existente basado en su ID.
Datos de Entrada: Un objeto Empleado en formato JSON.
Respuesta:
200 OK si la actualización es exitosa.
404 NOT FOUND si el empleado no es encontrado, lanzando RecurasoNoEncontradoEcepxion.
Eliminar Empleado:

Endpoint: DELETE /rh-app/empleados/{id}
Descripción: Elimina un empleado de la base de datos basado en su ID.
Respuesta:
200 OK con un JSON indicando la eliminación exitosa ({"eliminado": true}).
404 NOT FOUND si el empleado no es encontrado, lanzando RecurasoNoEncontradoEcepxion.
Clases y Paquetes:
Controlador (EmpeladoControlador):

Define los endpoints de la API y maneja las solicitudes HTTP.
Utiliza @RestController para indicar que esta clase es un controlador REST.
Los métodos están mapeados a las rutas y manejan las operaciones CRUD básicas.
@CrossOrigin se usa para permitir solicitudes CORS desde http://localhost:3000.
Modelo (Empleado):

Define la entidad Empleado con sus atributos: idEmpleado, nombre, departamento y sueldo.
Utiliza las anotaciones de Lombok (@Data, @NoArgsConstructor, @AllArgsConstructor, @ToString) para generar automáticamente los métodos getters, setters, constructores y el método toString.
Utiliza @Entity para indicar que esta clase es una entidad JPA.
Repositorio (EmpleadoRepositorio):

Extiende JpaRepository de Spring Data JPA para proporcionar métodos CRUD estándar sin necesidad de implementación adicional.
Interactúa directamente con la base de datos.
Servicio (EmpleadoServicio):

Contiene la lógica de negocio.
Define métodos para listar, buscar, guardar y eliminar empleados.
Utiliza @Service para indicar que esta clase es un componente de servicio.
Implementa la interfaz IEmpleadoServicio.
Excepción (RecurasoNoEncontradoEcepxion):

Define una excepción personalizada que se lanza cuando un recurso no es encontrado.
Utiliza @ResponseStatus para devolver un estado HTTP 404 cuando se lanza esta excepción.
Tecnologías Utilizadas:
Spring Boot:

Framework principal para construir la aplicación.
Proporciona características de configuración automática para facilitar el desarrollo.
Spring Data JPA:

Utilizado para manejar la persistencia de datos.
Proporciona una abstracción sobre JPA y una implementación de repositorio para operaciones CRUD.
MySQL:

Base de datos relacional utilizada para almacenar los datos de los empleados.
Conector JDBC de MySQL (mysql-connector-j) para interactuar con la base de datos.
Lombok:

Biblioteca que reduce el código boilerplate al generar automáticamente getters, setters, constructores, etc.
Spring Boot DevTools:

Herramientas de desarrollo que permiten recargar automáticamente la aplicación durante el desarrollo.
Spring Boot Starter Web:

Proporciona las dependencias y configuraciones necesarias para construir aplicaciones web RESTful.
Maven:

Herramienta de gestión de dependencias y construcción del proyecto.
Archivo pom.xml:
Define el proyecto y sus dependencias.
Incluye configuraciones para plugins y versiones de las dependencias.
Especifica que el proyecto está basado en Spring Boot (spring-boot-starter-parent).
Consumo de la API en React
Para consumir esta API en una aplicación React, se utilizarían generalmente las siguientes herramientas y pasos:

Axios o Fetch API:

Herramientas para hacer solicitudes HTTP desde la aplicación React.
Componentes React:

Crear componentes que llamen a la API y manejen las respuestas.
Hooks de React:

Utilizar hooks como useState y useEffect para manejar el estado y los efectos secundarios.
