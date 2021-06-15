# helix-extras-todo
This provides a helix extra style button component. Usage:

## Usage
```
<helix-extras-todo 
      button-style="${buttonStyle}"
      name=${name}
      href="${href}"
      link-title="${linkTitle}"
      target="${target}" 
      icon="${icon}">${content}
</helix-extras-todo>
```

For example: 

```
<helix-extras-todo icon="ext-link" button-style="primary">Hello button Primary</helix-extras-todo>
```
## Icons
Current icons available are 'down-arrow', 'right-arrow', 'ext-link'.

## Content
Content is provided by a slot. 

## Button Element

There are two types of elements that can be used inside the helix-extras-todo.

- 'anchor' - which is intended to take the user to another page or another part of the page.
- 'button' which is intended to do an action, this can be used for a form for example.

Due to a bug in Edge CSS custom properties have no impact on text alignment inside buttons.
To align the button use the following CSS:

```
.no-shadowroot {
  helix-extras-todo {
    helix-button {
      .helix--button-button {
        text-align: left;
      }
    }
  }
}
```
<!-- Auto Generated Below -->


## Usage

### Example

<helix-extras-todo href="https://example.com" button-style="primary" icon="down-arrow"><span>Example2</span></helix-extras-todo>



## Properties

| Property      | Attribute     | Description | Type     | Default     |
| ------------- | ------------- | ----------- | -------- | ----------- |
| `button_text` | `button_text` |             | `string` | `undefined` |
| `placeholder` | `placeholder` |             | `string` | `undefined` |


## Slots

| Slot                                                | Description |
| --------------------------------------------------- | ----------- |
| `"default The slot for the content of the button."` |             |


## CSS Custom Properties

| Name                      | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| `--arrow-image`           | The url encoded svg used to represent the arrow.           |
| `--brand-stripe-1`        | The first color stop of the gradient in the brand stripe.  |
| `--brand-stripe-2`        | The second color stop of the gradient in the brand stripe. |
| `--button-border-color-1` | The first color stop in the gradient for the border.       |
| `--button-border-color-2` | The second color stop in the gradient for the border.      |
| `--button-border-color-3` | The third color stop in the gradient for the border.       |
| `--button-text-color`     | The color of the text used in the button.                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
