# Fundamentos lógicos

## ¿Qué es una proposición?

Una proposición es una oración que puede ser verdadera o falsa, pero no ambas cosas a la vez.

Ejemplos:

- El Clubhouse está en el segundo piso (Proposición)
- 6 + 5 = 10 (Proposición)
- ¿Quién ganará el partido de fútbol? (No proposición)
- El número 7 es par. (Proposición)
- El gato negro. (No proposición)
- Todos los gatos tienen cuatro patas. (Proposición)
- 2 + 2 (No proposición)
- ¿Cuántos años tienes? (No proposición)

## ¿Qué son las tablas de verdad?

Las tablas de verdad en lógica de programación son una herramienta representada en varios gráficos de filas y columnas que muestran todos los posibles escenarios y condiciones para que un enunciado sea verdadero o falso. Esto se logra a través del uso de booleanos conectados con operadores lógicos.

## Premisas

Cada argumento (en matemáticas, programación e incluso la vida misma) está compuesto por una o más premisas y siempre tendrá una conclusión que debe ser verdadera o falsa, pero nunca las dos cosas a la vez. Si te preguntan: ¿Te gustó la comida?, es incorrecto decir: sí no. Solo debe haber una opción como respuesta.

Una premisa es una declaración que sirve como base para dar evidencia o apoyo a un argumento. Por otro lado, la conclusión es el resultado o enunciado al que llegamos gracias a las premisas:

- Premisa 1: Todos los perros tienen cuatro patas.
- Premisa 2: Toby es un perro.
- Conclusión: Toby tiene cuatro patas.

## ¿Qué es un booleano?

Un booleano es un tipo de dato que puede expresar únicamente uno de estos dos valores de verdad: true o false y también se pueden representar en el sistema binario (1 y 0 respectivamente).

## Aprender con ejemplos

Una tabla de verdad es mucho más fácil de entender cuando ves cómo está estructurada y cómo funciona en ejemplos de la vida diaria, que cuando solo lees su definición.

## ¿Cómo funcionan los booleanos en la vida real?

### Ejemplo 1: ensalada de frutas 🍎 🍌 🍊 🍇

Necesitamos realizar una ensalada de frutas que tenga uvas, manzanas, bananos y naranjas.

- ¿Tienes dichas frutas que componen la receta?
- ¿Compraste manzanas? 👉 Verdadero
- ¿Compraste bananos? 👉 Verdadero
- ¿Compraste naranjas? 👉 Falso
- ¿Compraste uvas? 👉 Verdadero

Conclusión: falso, No podemos hacer la ensalada de frutas porque no tenemos naranjas.

### Ejemplo 2: la bebida 🥤

Necesitamos una bebida para acompañar la ensalada de frutas. ¿Qué opciones tenemos?

- ¿Tienes agua? 👉 Verdadero
- ¿Tienes jugo de naranja? 👉 Falso

Conclusión: verdadero, aunque no hay naranjas, el agua es una bebida que también me quitará la sed.

## Conjuncción (AND)

En la conjunción la conclusión es verdadera sólo si ambos valores son verdaderos.
Es falso cuando al menos uno de los valores es falso.
Aquí encontrarás el ejemplo que vimos de la ensalada 🥗.

### tabla de verdad AND:

| P   | Q   | P ^ Q |
| --- | --- | ----- |
| V   | V   | V     |
| V   | F   | F     |
| F   | V   | F     |
| F   | F   | F     |

## Disyunción (OR)

En la disyunción la conclusión es verdadera si al menos uno de los valores es verdadero.
Es falso cuando ambos valores son falsos.
Aquí encontrarás el ejemplo que vimos de la bebida 🥤.

### tabla de verdad OR:

| P   | Q   | P v Q |
| --- | --- | ----- |
| V   | V   | V     |
| V   | F   | V     |
| F   | V   | V     |
| F   | F   | F     |

## Negación (NOT)

En la negación la conclusión es verdadera si el valor es falso.

### tabla de verdad NOT:

| P   | ¬P  |
| --- | --- |
| V   | F   |
| F   | V   |

## ¿Qué es un algoritmo?

Se denomina algoritmo a un grupo finito de operaciones organizadas de manera lógica y ordenada que permite solucionar un determinado problema. Se trata de una serie de instrucciones o reglas establecidas que, por medio de una sucesión de pasos, permiten arribar a un resultado o solución.

![algoritmo](https://media1.giphy.com/media/ohdY5OaQmUmVW/giphy.gif?cid=ecf05e47s1xqsuqw3qqb6a4xhqud0q49tpwikf3o32mr25ut&ep=v1_gifs_related&rid=giphy.gif&ct=g)

## ¿Qué es un diagrama de flujo?

Un diagrama de flujo es una representación gráfica de un proceso. Cada paso del proceso es representado por un símbolo diferente que contiene una breve descripción de la etapa de proceso. Los símbolos gráficos del flujo del proceso están unidos entre sí con flechas que indican la dirección de flujo del proceso.

![ejemplo diagrama de flujo](https://i.postimg.cc/gJZGWJs6/Diagrama-de-Flujo.png)

## Elementos de un diagrama de flujo

![Elementos de un diagrama de flujo](https://www.smartdraw.com/flowchart/img/simbolos-de-diagramas-de-flujo.png)

---

[Página para realizar diagramas de flujo](https://www.drawio.com/)
