# Taller 2

En este taller,se debe continuar incorporando funcionalidades de JavaScript básico en el proyecto del hospital. Además de manipular el DOM, validar datos, y manejar errores, se solicita la entrada de información del usuario a través de un prompt, mostrando los resultados por consola o como alertas en el navegador.

## Estructura de carpetas 🚀
```
m3t2 
├──css/
│ ├──main.css 
│ ├──main.css.map
│ ├──style.css
│ └──style.css.map
├──img/
│ ├──consultas.webp
│ ├──especialidades.webp
│ ├──favicon.ico
│ ├──hospital.svg
│ ├──Las casitas.png
│ ├──medicos1.jpg
│ ├──medicos2.jpg
│ ├──medicos3.jpg
│ ├──medicos4.jpg
│ └──urgencias.webp
├──js/
│ ├──bootstrap.min.js
│ ├──contacto.js
│ ├──global.js
│ └──index.js
├──scss/
│ ├──abstracts/
│ │  └──_variables.scss
│ ├──base/
│ │  └──_normalize.scss
│ ├──components/
| |  ├──_buttons.scss
│ │  └──_icons.scss 
│ ├──layout/
| |  ├──_footer.scss
│ │  ├──_forms.scss
| |  ├──_grid.scss
│ │  ├──_header.scss 
│ │  └──_navbar.scss
│ ├──pages/
| |  ├──_contacto.scss
│ │  ├──_home.scss
| |  └──_medicos.scss
│ ├──themes/
│ │  └──_default.scs
│ ├──utils/
│ │  └──_mixsins.scss
│ ├──vendors/
│ │  └──_bootstrap.scss
│ ├──main.css
│ ├──main.css.map
│ ├──main.scss
│ └──style.scss
├─contacto.hmtl
├─index.hmtl
├─medicos.hmtl
├─contacto.hmtl
├─package.json
├─README.md
╹
```

### Página de inicio 📋

```
index.html
```

## Desarrollo evaluación:

### 1. Manejo del Entorno de Ejecución y Consola

  Se implementa en `index.js` y `global.js`.

### 2. Manejo de Variables, Operadores y Prompt 

  El promp se implementa en el botón "Reservar Cita" en el encabezado de todas las páginas, se encuentra en el archivo `global.js`, al igual que el uso de las variables y operadores.

### 3. Ciclos e Iteraciones: Uso en la Interfaz 

  Se implementa en la página de inicio específicamente en la sección de espacialidades médicas.
  El código se encuentra en `index.js`.

### 4. Manejo de Errores con try/catch y Debugging 

  Se implementa en `global.js` en la función `reserve`;


## Recursos ✒️

* [unDraw](https://undraw.co)
* [DALL-E](https://openai.com/index/dall-e-3/)

## Event Loop en JavaScript

El Event Loop es un componente fundamental en JavaScript que permite la ejecución asíncrona de código. Funciona como un bucle continuo que gestiona la ejecución de tareas y eventos en un programa JavaScript.

#### El Event Loop opera de la siguiente manera:

    1. Pila de llamadas (Call Stack): Ejecuta el código síncrono línea por línea.
    2. Cola de mensajes (Message Queue): Almacena callbacks de eventos y funciones asíncronas.
    3. Ciclo continuo: El Event Loop revisa constantemente si la pila de llamadas está vacía.
    4. Ejecución de tareas: Cuando la pila está vacía, toma el primer mensaje de la cola y lo ejecuta

#### Componentes principales Pila de llamadas (Call Stack)

    - Almacena las funciones que se están ejecutando actualmente3
    - Funciona bajo el principio LIFO (Last In, First Out)3

#### Cola de mensajes (Message Queue)

    - Contiene callbacks de eventos y funciones asíncronas.
    - Sigue el principio FIFO (First In, First Out).

#### API del navegador

    - Maneja operaciones asíncronas como temporizadores, solicitudes HTTP, etc.

#### Proceso de ejecución

    1. El código síncrono se ejecuta inmediatamente en la pila de llamadas.
    2. Las operaciones asíncronas se envían a las API del navegador.
    3. Cuando las operaciones asíncronas se completan, sus callbacks se colocan en la cola de mensajes.
    4. El Event Loop verifica constantemente si la pila de llamadas está vacía.
    5. Si la pila está vacía, toma el primer mensaje de la cola y lo ejecuta.

## Manejo de Variables, Prompts y Debugger

  ### 1. Variables

  #### glogal.js
  ```javascript
  const reserve = () => {
  let name        = '';
  let mail        = '';
  let phoneNumber = '';
  // ... resto del código
  }
  ```
  Las variables `name`, `mail`, `phoneNumber` tienen un alcance limitado a la función `reserve`. Son accesibles en cualquier parte de la función, pero no fuera de esta.

  #### index.js
  ```javascript
  const div_especialidades = document.getElementById('div_detalle_especialidades');
  div_especialidades.style.display = 'none';
  // ... resto del código
  ```
  La variable `div_especialidades` se declara al inicio del documento como una variable global, se puede acceder a ella desde cualquier parte de la página, pero su valor no puede ser cambiado porque fue declarado como una constante.

  ### 2. Prompts
  ```javascript
  // .. 
  while (name.trim() === ''){
    name = prompt('Ingresa tu nombre completo:');
  }
  while (mail.trim() === ''){
    mail = prompt('Ingresa tu email:');
  }
  while (phoneNumber.trim() === ''){
    phoneNumber = prompt('Ingresa tu número de teléfono:');
  }
  // ... resto del código
  ```

  El código anterior utiliza la función prompt() de JavaScript para solicitar información al usuario de manera interactiva. 
  El prompt() se utiliza dentro de bucles while para asegurar que el usuario proporcione la información solicitada y esta no sea vacía.

  ### 3. Debugger

  El debugger en JavaScript es una herramienta esencial para encontrar y resolver errores en el código. 

  ```javascript
  const reserve = () => {
    let name        = '';
    let mail        = '';
    let phoneNumber = '';
    try {
      while (name.trim() === ''){
        name = prompt('Ingresa tu nombre completo:');
      }
      while (mail.trim() === ''){
        mail = prompt('Ingresa tu email:');
      }
      while (phoneNumber.trim() === ''){
        phoneNumber = prompt('Ingresa tu número de teléfono:');
      }
      if (isNaN(phoneNumber)) {
        throw new Error("El teléfono debe ser un número.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Hubo un error al procesar el teléfono.");
      return;
    }
    debugger;
    const patientData = { name, mail, phoneNumber};
    console.log(`Los datos inbgresados para la reserva: ${JSON.stringify(patientData)}`);
    alert(`Nombre: ${patientData.name}, email: ${patientData.mail}, número teléfonico ${patientData.phoneNumber}.`);
  };
  // ... resto del código
  ```
  Funcionamiento

    1. Cuando el flujo de ejecución llega a la línea debugger, el programa se pausa.
    2. Si las herramientas de desarrollo del navegador están abiertas, el control se transfiere a ellas.
    4. Al estar pausado es posible revisar los valores en las variables anteriores a la linea debugger.
    5. Si las herramientas de desarrollo no están abiertas, la declaración debugger no tiene efecto.

  ### 4. Operadores

  Se utiliza en operador `===` para comprar verificar que el usuario ingresa valores en el nombre, email y número telefónico en los prompts.

 ```javascript
  while (name.trim() === ''){
    name = prompt('Ingresa tu nombre completo:');
  }
  while (mail.trim() === ''){
    mail = prompt('Ingresa tu email:');
  }
  while (phoneNumber.trim() === ''){
    phoneNumber = prompt('Ingresa tu número de teléfono:');
  }
 // ... resto del código
  ```

  ### 5. Try/Catch

  El uso de try/catch en JavaScript es una técnica para el manejo de errores y excepciones. Esta estructura permite ejecutar código que podría generar un error de manera controlada, capturando y manejando esos errores sin que la ejecución del programa se detenga abruptamente.

  
## Autor
Desarrollado Ana Moraga.