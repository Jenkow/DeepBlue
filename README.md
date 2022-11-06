# Deep Blue

> Ecommerce en desarrollo.

## Instalación

Deep Blue requiere [Node.js](https://nodejs.org/) v10+ para funcionar.

Para ejecutar localmente:

```sh
$ git clone https://github.com/Jenkow/DeepBlue.git
$ cd DeepBlue
$ npm install
$ npm start
```

## Firebase

Deep Blue usa Firestore como base de datos. Para poder cargar poructos se deberá crear una colección llamada "products" donde cada producto sera un documento perteneciente a dicha colección. Cada documento deberá precentar los siguientes campos:

| CAMPO | DESCRIPCIÓN |
| ------ | ------ |
| category | campera, buzo, pantalón, remera |
| description | Descripción del producto |
| img | Url de la imagen |
| name | Nombre del producto |
| price | Precio del producto |
| stock | Stock del producto |

Cada orden creada se guardará en una colección llamada "orders", donde cada documento tendrá los siguentes campos:

| CAMPO | DESCRIPCIÓN |
| ------ | ------ |
| buyer | { name, mail, phone } |
| items | { id, name, price, quantity } |
| total | Monto total de la compra |

## Variables de entorno

Ver [`.env.example`](https://github.com/Jenkow/DeepBlue/blob/main/env.example) como ejemplo.
