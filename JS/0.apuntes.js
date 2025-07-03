/* TTIPOS DE DATOS */
/*  
    Existen 2 tipos de datos en JavaScript: primitivos y no primitivos.
    Primitivos: son inmutables, no se pueden cambiar una vez creados: undefined, null, boolean, number, string, o symbol.
    No primitivos: son mutables, se pueden cambiar una vez creados.
    Los primitivos son copias y estas apuntan a una nueva copia mientras que los no primitivos son referencias a un objeto en memoria.
    string.
    number.
    array: no primitivo. Almacena valores mas complejos.
    *mutación de array: agregar, eliminar, modificar elementos.

    falsy values: valores que se evalúan como false en un contexto booleano.
    false, 0, "", null, undefined, NaN.

    objetos: No primitivos que permiten almacenar pares key-value.
      eg:
      const person = {
        name: "John",
        age: 30,
        "Is student": false,
      };
      para acceder a los valores de un objeto se usa la notación de punto o la notación de corchetes.
      eg:
      console.log(person.name); // "John"
      console.log(person["Is student"]); // false 
*/

/* PROPIEDADES DE ARRAYS */
/*
  .length: propiedad que devuelve la cantidad de elementos del array.
*/

/* PROPIEDADES DE ELEMENTOS HTML */
/* 
  .onclick: propiedad que permite asignar una función que se ejecutará cuando el botón sea clickeado.
    eg:
    const button = document.querySelector("button");
    button.onclick = myFunction; //IMPORTANTE: solo se pasa el nombre de la función, sin paréntesis.
  .addEventListener: método que permite agregar un evento a un elemento HTML.
    eg:
    const button = document.querySelector("button");
    button.addEventListener("click", myFunction); //IMPORTANTE: se pasa el nombre de la función, sin paréntesis.
  .innerText: propiedad que permite obtener o establecer el contenido de texto de un elemento HTML.
    eg:
    const element = document.querySelector(".my-element");
    element.innerText = "<p>Nuevo contenido</p>";
    NOTA: innerText no interpreta HTML, solo texto plano. Para usar comillas se usa la siguiente sintaxis \"HOLA\".
  .innerHTML: propiedad que permite obtener o establecer el contenido HTML de un elemento.
    eg:
    const element = document.querySelector(".my-element");
    element.innerHTML = "<p>Nuevo contenido</p>";
  .insertAdjacentHTML: método que permite insertar contenido HTML en una posición específica del DOM.
    eg:
    const element = document.querySelector(".my-element");
    element.insertAdjacentHTML("beforeend", "<p>Nuevo contenido</p>");
    NOTA: "beforeend" inserta el contenido al final del elemento, "afterbeginning" lo inserta al inicio, "beforebegin" lo inserta antes del elemento
     y "afterend" lo inserta después del elemento.
  .style.display: propiedad que permite cambiar el estilo de visualización de un elemento HTML.
    eg:
    const element = document.querySelector(".my-element");
    element.style.display = "none"; //oculta el elemento
  .value: propiedad que permite obtener o establecer el valor de un campo de entrada (input) en HTML.
    eg:
    const input = document.querySelector("input");
    input.value = "Nuevo valor"; //establece el valor del input
  .classList.remove(): método que elimina un elemento del DOM.
    eg:
    const element = document.querySelector(".my-element");
    element.classList.remove("my-class"); //elimina la clase "my-class" del elemento
  .classList.add(): método que agrega una clase a un elemento HTML.
    eg:
    const element = document.querySelector(".my-element");
    element.classList.add("my-class"); //agrega la clase "my-class" al elemento
  .textContent: propiedad que permite obtener o establecer el contenido de texto de un elemento HTML, similar a innerText pero sin interpretar HTML.
    eg:
    <div id="example">This is some text content</div>
    const element = document.getElementById("example");
    console.log(element.textContent); // "This is some text content"
  .appendChild(): método que agrega un nodo como hijo de otro nodo en el DOM.
    eg:
    const parentElement = document.querySelector(".parent");
    const newElement = document.createElement("div");
    newElement.textContent = "Nuevo hijo";
    parentElement.appendChild(newElement); //agrega newElement como hijo de parentElement
  .remove(): método que elimina un elemento del DOM.
    eg:
    const element = document.querySelector(".my-element");
    element.remove(); //elimina el elemento del DOM
*/

/* MÉTODOS */
/* Un método es una función asociada a un objeto en JS

  Métodos de string:
  .repeat(): devuelve una nueva cadena de texto que repite la cadena original un número específico de veces.
    eg:
    const activity = "Code! ";
    activity.repeat(3);
    console.log(activity); // "Code! Code! Code! "
  .replace(): reemplaza una parte de la cadena de texto por otra.
    eg:
    const text = "Hello, world!";
    const newText = text.replace("world", "JavaScript"); 
    console.log(newText); // "Hello, JavaScript!"
  .match(): busca una cadena de texto dentro de otra y devuelve un array con las coincidencias encontradas.
    eg:
    const str = 'example string';
    const regex = /example/;
    const result = str.match(regex); // Returns ['example']
    eg2:
    function isInvalidInput(str) {
      const regex = /\d+e\d+/i;
      return str.match(regex); //[ '1e3', index: 0, input: '1e3', groups: undefined ]
    }
    si devuelve null, significa que no se encontraron coincidencias.
  .toLowerCase(): convierte todos los caracteres de la cadena a minúsculas.
    eg:
    const text = "Hello, World!";
    const lowerText = text.toLowerCase();
    console.log(lowerText); // "hello, world!"
  .from(): crea una nueva cadena a partir de un objeto iterable (como un array o un objeto similar a un array).
    eg:
    const str = "hello";
    const arr = Array.from(str);
    console.log(arr); // ["h", "e", "l", "l", "o"]
  .split(): divide una cadena en un array de subcadenas, utilizando un separador especificado.
    eg:
    const text = "apple, banana, orange";
    const fruits = text.split(", ");
    console.log(fruits); // ["apple", "banana", "orange"]
    si el argumento se deja vacío, retorna un array que contiene el string.
    eg:
    const text = "hello";
    const chars = text.split();
    console.log(chars); // ["hello"];

  Métodos de array:
  .push(): agrega un elemento al final del array. En caso de devolver un valor, devuelve la nueva longitud del array.
    eg:
    const fruits = ["apple", "banana"];
    fruits.push("orange");
    console.log(fruits); // ["apple", "banana", "orange"]
  .pop(): elimina el último elemento del array y lo devuelve.
    eg:
    const fruits = ["apple", "banana", "orange"];
    const lastFruit = fruits.pop();
    console.log(fruits); // ["apple", "banana"]
    console.log(lastFruit); // "orange"
  .unshift(): agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.
    eg:
    const fruits = ["banana", "orange"];
    const newFruit = fruits.unshift("apple");
    console.log(fruits); // ["apple", "banana", "orange"]
    console.log(newFruit); // 3
  .shift(): elimina el primer elemento del array y lo devuelve.
    eg:
    const fruits = ["apple", "banana", "orange"];
    const firstFruit = fruits.shift();
    console.log(fruits); // ["banana", "orange"]
    console.log(firstFruit); // "apple"
  .includes(): verifica si un array contiene un elemento específico y devuelve true o false.
    eg:
    const fruits = ["apple", "banana", "orange"];
    const hasBanana = fruits.includes("banana");
    console.log(hasBanana); // true
  .from(): crea un nuevo array a partir de un objeto iterable (como una cadena de texto o un array).
    eg:
    const str = "hello";
    const arr = Array.from(str);
    console.log(arr); // ["h", "e", "l", "l", "o"]
  .map(): su argumento es una función.
    se usa para iterar un array y devolver uno nuevo con los resultados de aplicar una función a cada elemento del array original.
    eg:
    const numbers = [1, 2, 3];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6]
  .join(): une todos los elementos de un array en una cadena de texto, separándolos por un separador especificado. Devuelve una cadena.
    eg:
    const fruits = ["apple", "banana", "orange"];
    const fruitString = fruits.join(", ");
    console.log(fruitString); // "apple, banana, orange"
  .sort(): convierte los elementos de un array en un string y los ordena basado en sus valores de UTF-16 encoding.
   eg:
    const numbers = [3, 1, 4, 2];
    numbers.sort();
    console.log(numbers); // [1, 2, 3, 4]
  .find(): recupera el primer elemento de un array que cumple con una condición especificada en una función de callback.
    si ningún elemento cumple con la condición, devuelve undefined.
    eg:
    const numbers = [1, 2, 3, 4, 5];
    const found = numbers.find(num => num > 3);
    console.log(found); // 4
  .indexOf(): devuelve el índice del primer elemento que coincide con el valor especificado en un array. Si no se encuentra, devuelve -1.
    eg:
    const fruits = ["apple", "banana", "orange"];
    const index = fruits.indexOf("banana");
    console.log(index); // 1
  .forEach(): ejecuta una función proporcionada una vez por cada elemento del array.
    eg:
    const numbers = [1, 2, 3];
    numbers.forEach(num => console.log(num * 2)); // 2, 4, 6
  .filter(): crea un nuevo array con todos los elementos que cumplen con una condición especificada en una función de callback.
    eg:
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // [2, 4]
  .reverse(): invierte el orden de los elementos en un array.
    eg:
    const numbers = [1, 2, 3, 4];
    numbers.reverse();
    console.log(numbers); // [4, 3, 2, 1]
*/

/* CONDICIONALES */
/* 
  Corre un bloque de código si se cumple una condición.
  if (condition) {
    logic;
  } else if (condition) {
    logic;
  } else {
    logic;
  }
  
  Switch statement:
  Se usa para evaluar una expresión y ejecutar diferentes bloques de código según el valor de esa expresión
  switch (expression) {
    case value1:
      // código a ejecutar si expression es igual a value1
      break;
    case value2:
      // código a ejecutar si expression es igual a value2
      break;
    default:
      // código a ejecutar si expression no coincide con ningún case
  }
*/

/* CICLOS */
/* FOR: 
    for (iterator; condition; iteration) {
      logic;
    }
    cuando la condición es falsa, el ciclo se detiene.
  FOR OF:
  Itera sobre los valores de un iterable (como un array o una cadena de texto) y temporalmente lo asigna a una variable.
    for (const value of iterable) {
      logic;
    }
  WHILE:
    Ejecuta un bloque de código mientras una condición sea verdadera.
    while (condition) {
      logic;
    }
*/

/* FUNCIONES */
/*
  son bloques de codigo reutilizables que realizan una tarea específica.
  retornan undefined por defecto si no se especifica un return.

  function name(parameter) {

  }

  para llamar a una función se usa su nombre seguido de paréntesis.
  name(argument);

  una función flecha ()=>{} pero al asignarla a una variable se le asgina un identificador.
    eg:
    const exampleFunction = () => {
      // code goes here
    }
  para llamar a una función flecha se hace de la misma manera que con una función normal.
  Si la funcion flecha tiene un solo parámetro, se pueden omitir los paréntesis.
  Si la función flecha tiene un solo retorno, se pueden omitir las llaves y el return.
    eg:
      const square = x => x * x; // función flecha que calcula el cuadrado de un número
      console.log(square(5)); // 25
  Las funciones pueden recibir parámetros por defecto, que son valores que se pasan a la función cuando se llama.
      const greeting = (name = "Anonymous") => {
      return "Hello " + name;
    } 

    console.log(greeting("John")); // Hello John
    console.log(greeting()); // Hello Anonymous
    */

/* Escape secuence */
/* escape secuence: 
  \n: nueva línea.
  \t: tabulación.
  \\: barra invertida.
  \": comillas dobles.
  \': comillas simples.
*/

/* DOM: Document Object Model */
/* 
La forma como JavaScript interactúa con el HTML y CSS de una página web. Usan el objeto document para acceder y manipular el contenido de la página.
*/

/* MÉTODOS DE DOCUMENT */
/* 
  .querySelector(): toma un selector CSS como argumento y devuelve el primer elemento que coincide con ese selector en el documento.
    eg: let element = document.querySelector(".class-name");
  .getElementById(): toma un ID como argumento y devuelve el elemento con ese ID en el documento.
    eg: let element = document.getElementById("element-id");
  .querySelectorAll(): toma un selector CSS como argumento y devuelve una lista de todos los elementos que coinciden con ese selector en el documento.
    eg: let elements = document.querySelectorAll(".class-name");
    Un nodeList es una colección de nodos que se puede iterar, pero no es un array y tambien tiene algunos metodos comunes a los arrays.
    console.log(elements); // NodeList con todos los elementos que coinciden con el selector
  .createElement(): crea un nuevo elemento HTML del tipo especificado.
    eg: let newElement = document.createElement("div");
  .createTextNode(): crea un nuevo nodo de texto con el contenido especificado.
    eg: let textNode = document.createTextNode("Hello, world!");
*/

/* MATH OBJECT */
/* 
  Math.random(): genera un número pseudoaleatorio entre 0 (incluido) y 1 (excluido).
   eg:
    const randomNumber = Math.random();
    console.log(randomNumber); // un número aleatorio entre 0 y 1

  Math.floor(): redondea un número hacia abajo al entero más cercano.
  eg:
    const number = 4.7;
    const roundedNumber = Math.floor(number);
    console.log(roundedNumber); // 4
  Math.abs(): devuelve el valor absoluto de un número, es decir, su valor sin signo.
  eg:
    const number = -5;
    const absoluteValue = Math.abs(number);
    console.log(absoluteValue); // 5
*/

/* TIPOS DE ERRORES */
/* 
  SyntaxError: Error de sintaxis, ocurre cuando el código no sigue las reglas del lenguaje.Algo que no se puede interpretar.
  ReferenceError: Error de referencia, ocurre cuando se intenta acceder a una variable que no ha sido declarada o no está en el alcance actual.
  TypeError: Error de tipo, ocurre cuando se intenta realizar una operación en un valor que no es del tipo esperado.
*/

/* BUENAS PRÁCTICAS */
/* 
  En programación, es una buena práctica nombrar las variables de manera descriptiva para que su propósito sea claro.
  eg:
  let isRunning = true;
  let hasCompleted = false;
*/

/* FUNCIONAMIENTO DE JS */
/* 
  Valores de un campo de entrada HTML se reciben como cadenas en JavaScript. Necesitarás convertir estas cadenas en números antes de realizar cálculos.

  Javascript tiene una característica llamada template literal, que te permite interpolar variables directamente dentro de una cadena. 
  Las plantillas literales se denotan con comillas invertidas ``, en lugar de comillas simples o dobles. Las variables se pueden pasar a una plantilla
  literal rodeándolas con ${} – el valor de la variable se insertará en la cadena.
  */

/* REGEX */
/* 
  Expresiones regulares (regex) son patrones utilizados para buscar y manipular texto. Se utilizan para validar, buscar o reemplazar texto en cadenas.
  Se definen entre barras inclinadas (/.../).
  eg: /abc/ busca la secuencia "abc" en una cadena.
  
  \s: representa un espacio en blanco (incluye espacios, tabulaciones y saltos de línea).
  []: define un conjunto de caracteres. Por ejemplo, [aeiou] coincide con cualquier vocal.
  g: (global)bandera que indica una búsqueda global, es decir, busca todas las coincidencias en lugar de detenerse en la primera.
  i:(insensitive) bandera que indica una búsqueda insensible a mayúsculas y minúsculas.

  eg:
    function cleanInputString(str) {
      const regex = /[+-\s]/g;
      return str.replace(regex,"" )
    }//reemueve los caracteres +, - y espacios en blanco de la cadena de entrada.
*/

/*alert()*/
/* es una función integrada de los navegadores que sirve para mostrar un mensaje a los usuarios */

/* Number constructor */
/* Es una función que convierte un valor en un número. Si no puede ser convertido devuelve un NaN */

/* Funciones event listener */
/* se hacen con el el fin de asociarse a un eventListener y su argumento suele se un parametro "e"
  En estas también es común usar la funcion preventDefault() para prevenir la acción por defector de un evento
*/

/* Web Audio API */
/* 
  Es una API que permite a los desarrolladores crear y manipular audio en aplicaciones web. 
  Permite reproducir, procesar y analizar audio de manera eficiente.
  Para crear un elemento de audio HTML5:
  const audio = new Audio();
*/

/* Date() constructor */
/* 
const currentDate = new Date(); //se crea un objeto Date
const day = date.getDate();// obtiene el día del mes (1-31)
const month = date.getMonth() + 1; // obtiene el mes (0-11, por lo que se suma 1 para obtener el mes correcto)
const year = date.getFullYear(); // obtiene el año completo (4 dígitos)
const hours = date.getHours(); // obtiene la hora (0-23)
const minutes = date.getMinutes(); // obtiene los minutos (0-59)
*/

/* Operador spread (...) */
/* 
 Permite copiar todos los elementos de un array a otro y también para concatenar arrays.
  eg:
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const combinedArray = [...array1, ...array2];
  console.log(combinedArray); // [1, 2, 3, 4
*/

/* Operador concatenación .? */
/* 
  El operador de concatenación (.) se utiliza para acceder a propiedades de un objeto o llamar a métodos de un objeto.
  El operador de encadenamiento opcional (?.) se utiliza para acceder a propiedades de un objeto sin lanzar un error si la propiedad no existe.
  eg:
  const user = { name: "John", age: 30 };
  console.log(user.name); // "John"
  console.log(user?.address?.city); // undefined, no lanza error si address o city no existen
*/

/* 
nested objects, object destructuring, and default parameters son conceptos relacionados con la manipulación de objetos en JavaScript.
  nested objects: son objetos que contienen otros objetos como propiedades. Permiten organizar datos de manera estructurada y jerárquica.
  object destructuring: es una sintaxis que permite extraer propiedades de un objeto y asignarlas a variables individuales de manera más concisa.
   eg:
    const developerObj = {
      name: "Jessica Wilkins",
      isDeveloper: true
    };

    // Object destructuring
    const { name, isDeveloper } = developerObj;
  default parameters: son valores predeterminados que se asignan a los parámetros de una función si no se proporcionan argumentos al llamar a la función.
  Estos conceptos son útiles para trabajar con datos complejos y mejorar la legibilidad del código.
*/

/* Object methods */
/* 
  .freeze(): es un método que se utiliza para evitar que un objeto sea modificado. Una vez que se aplica, no se pueden agregar, eliminar o modificar propiedades del objeto.
  eg:
  const obj = { name: "John", age: 30 };
  Object.freeze(obj);
  obj.age = 31; // No tendrá efecto, ya que el objeto está congelado
  console.log(obj.age); // 30, el valor no ha cambiado.

*/
function RecursionChallenge(num) { 
  let resultado = 1;
  const token = "oj8nbz3d0c";
  for(let i = 2; i <= num; i++){
    resultado *= i;
  }

  let digitos = resultado.toString().split('');
  let letras = token.split('');
  let finalOutput = '';

  for (let i = 0; i<Math.max(digitos.length, letras.length); i++){
    if(i<digitos.length){
      finalOutput += digitos[i];
    }
    if(i<letras.length){
      finalOutput += letras[i];
    }
  }

  return finalOutput; 
}


function StringChallenge(num) { 
  const token = 'oj8nbz3d0c';
  let division = num/60;
  let module = num%60;
  let result = `${Math.floor(division)}:${module}`

  let letras = result.split('');
  let letrasToken = token.split('')
  let finalOutput = '';

  for(let i = 0; i<Math.max(letras.length, letrasToken.length); i++){
    if(i<letras.length){
      finalOutput += letras[i];
    }
    if(i<letrasToken.length){
      finalOutput += letrasToken[i]
    }
  }


  return finalOutput; 

}
   
// keep this function call here 
console.log(StringChallenge(readline()));