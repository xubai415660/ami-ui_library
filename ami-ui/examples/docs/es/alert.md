## Alert

Mostrar mensajes de alertas importantes.

### Uso básico

Los componentes de alertas no son elementos overlay de la página y no desaparecen automáticamente.

:::demo Alert provee 4 tipos de temas definidos por `type`, el valor por defecto es `info`.

```html
<template>
  <ami-alert
    title="success alert"
    type="success">
  </ami-alert>
  <ami-alert
    title="info alert"
    type="info">
  </ami-alert>
  <ami-alert
    title="warning alert"
    type="warning">
  </ami-alert>
  <ami-alert
    title="error alert"
    type="error">
  </ami-alert>
</template>
```
:::

### Theme

Alert provee dos diferentes temas  `light` y `dark`.

:::demo Use `effect` para cambiar el tema, por defecto es `light`.

```html
<template>
  <ami-alert
    title="success alert"
    type="success"
    effect="dark">
  </ami-alert>
  <ami-alert
    title="info alert"
    type="info"
    effect="dark">
  </ami-alert>
  <ami-alert
    title="warning alert"
    type="warning"
    effect="dark">
  </ami-alert>
  <ami-alert
    title="error alert"
    type="error"
    effect="dark">
  </ami-alert>
</template>
```
:::

### Personalización del botón de cerrar

Personalizar el botón de cerrar como texto u otros símbolos.

:::demo Alert permite configurar si es posible cerrarla. El texto del botón de cerrado, así como los callbacks de cerrado son personalizables. El atributo `closable` define si el componente puede cerrarse o no. Acepta un `boolean`, que por defecto es `true`. También puede configurar el atributo `close-text` para reemplazar el símbolo de cerrado que se muestra por defecto. El atributo `close-text` debe ser un string. El evento `close` se dispara cuando el componente se cierra.

```html
<template>
  <ami-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </ami-alert>
  <ami-alert
    title="customized close-text"
    type="info"
    close-text="Gotcha">
  </ami-alert>
  <ami-alert
    title="alert with callback"
    type="warning"
    @close="hello">
  </ami-alert>
</template>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
```
:::

### Usar iconos

Mostrar un icono mejora la legibilidad.

:::demo Setear el atributo `show-icon` muestra un icono que corresponde al tipo de Alert que se está mostrando.

```html
<template>
  <ami-alert
    title="success alert"
    type="success"
    show-icon>
  </ami-alert>
  <ami-alert
    title="info alert"
    type="info"
    show-icon>
  </ami-alert>
  <ami-alert
    title="warning alert"
    type="warning"
    show-icon>
  </ami-alert>
  <ami-alert
    title="error alert"
    type="error"
    show-icon>
  </ami-alert>
</template>
```
:::

### Texto centrado

Para centrar el texto utilice el atributo `center`.

:::demo

```html
<template>
  <ami-alert
    title="success alert"
    type="success"
    center
    show-icon>
  </ami-alert>
  <ami-alert
    title="info alert"
    type="info"
    center
    show-icon>
  </ami-alert>
  <ami-alert
    title="warning alert"
    type="warning"
    center
    show-icon>
  </ami-alert>
  <ami-alert
    title="error alert"
    type="error"
    center
    show-icon>
  </ami-alert>
</template>
```
:::

### Con descripción

Descripción incluye un mensaje con información más detallada.

:::demo Además del atributo requerido `title`, se puede agregar el atributo `description` para ayudar a describir la alerta con mas detalles. La descripción puede contener solamente un string y va a usar word wrap automáticamente.

```html
<template>
  <ami-alert
    title="with description"
    type="success"
    description="This is a description.">
  </ami-alert>
</template>
```
:::

### Utilizando icono y descripción

:::demo Finalmente este es un ejemplo utilizando icono y descripción.

```html
<template>
  <ami-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon>
  </ami-alert>
  <ami-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon>
  </ami-alert>
  <ami-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon>
  </ami-alert>
  <ami-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon>
  </ami-alert>
</template>
```
:::

### Atributos
| Atributo    | Descripción                              | Tipo    | Valores aceptados          | Por defecto |
| ----------- | ---------------------------------------- | ------- | -------------------------- | ----------- |
| title       | título                                   | string  | —                          | —           |
| type        | tipo de componente                       | string  | success/warning/info/error | info        |
| description | texto descriptivo. También puede ser pasado con el slot por defecto | string  | —                          | —           |
| closable    | si se puede cerrar o no                  | boolean | —                          | true        |
| center      | si el texto debe estar centrado          | boolean | —                          | false       |
| close-text  | texto de cerrado personalizado           | string  | —                          | —           |
| show-icon   | si un icono del tipo de alerta se debe mostrar | boolean | —                          | false       |
| effect | selecciona tema | string | light/dark | light |

### Slot

| Nombre | Descripción |
|------|--------|
| — | descripción |
| title | El contenido del título de alerta. |

### Eventos
| Nombre del evento | Descripción                           | Parámetros |
| ----------------- | ------------------------------------- | ---------- |
| close             | Se dispara cuando la alerta se cierra | —          |
