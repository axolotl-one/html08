# Intro a React | Repositorio de Prácticas del Módulo 6 | DEVF
## PRCT 01 Primer Proyecto en React y uso de Componentes (V1.0)
### Pasos para crear un proyecto con React
1. Direccionarse a la raíz del repositorio desde la terminal
2. Ingresar la instrucción _*npm create vite@latest nombreDelProyecto --- --template react*_
3. Direccionarse a la carpeta generada e ingresar la instrucción _*npm install*_ para instalar dependencias
4. Realizar la prueba de ejecución del servidor con la instrucción _*npm run dev*_
### Pasos para crear un componente básico en React
1. Dentro de la carpeta de src agregar una nueva carpeta para agrupar los componentes
2. Se agrega un nuevo archivo con extensión jsx y el nombre del componente iniciando con *mayúscula*
3. Usando emmet, escribir _rafce_ para crear una estructura elemental de un componente.
4. Agregar props (propiedades) entre {} como parametros para solicitar desde la función de componente
5. Llamar a las props como {props.nombrePropiedad} o {nombrePropiedad} según sea el caso
6. Desde otro archivo jsx crear un nuevo componente "padre" donde se importa el archivo del componente anterior que funcionará como componente hijo
7. Llamar dentro del componente al componente hijo <_*nombreComponente propiedad={value}/*_> 
## PRCT 02 Intro a Hoocks y useState (V2.0)
### Pasos para desarrollar una app para Lista de Compras con useState
1. Crear un proyecto de npm con vite + react
2. Despejar la plantilla integrada por defecto; eliminar el archivo index.css y su importación en main.jsx y App.jsx, despejar los elementos de App.css y los componentes de App.jsx y desarollar el proyecto a partir de ella
3. En el App.jsx importar la librería useState: _*import {useState} from 'react'*_
4. Crear un estado para guardar la info de un input que capture cada articulo que el usuario agregue: _*const [ inputValue, setInputValue ] = useState('');*_ Nota: el parametro de useState() permite inicializar el valor del input en ''
5. Crear la función _const handleAdd = () => {...}_ para ejecutar la captura cada que el usuario de click en Agregar
6. Implementar el evento onChange sobre la etiqueta input para guardar la información por cada tecla presionada
7. Crear un nuevo estado para guardar la lista de los articulos capturados
8. Crear una nueva función _const deleteTask = (index) => {...}_ para borrar un elemento de la lista
9. Agregar un nuevo elemento a la carpeta components para crear un componente para cada articulo capturado, solicitara las props para el nombre del articulo (capturado desde el arreglo de capturas) y la función _handleDelete_ para eliminar el articulo al presionar un boton que lo acompaña en el componente propio.
10. Importar el archivo en el componente padre (App.jsx) e incorporarlo a la estructura del componente utilizando el método .map sobre el arreglo de capturas para mostrar a cada componente hijo
11. Implementar estelizados desde el archivo App.css