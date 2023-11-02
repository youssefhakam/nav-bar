# nav-bar

`nav-bar` is a customizable and responsive navigation bar web component that you can easily integrate into your HTML projects.

## Features

- Easily add a responsive navigation bar to your web pages.
- Customize the navigation bar's appearance using attributes.
- Option to use default styles for a quick setup or apply your own styles.

## Installation

You can install `nav-bar` via npm:

```bash
npm install nav-component
```
## Usage

1. Import the `nav-bar` element in your HTML file.

```html
       <script type="module">
        import "nav-bar";
       </script>
```
   
2. Use the nav-bar element in your HTML with customizable attributes.
 ```html
    <nav-bar
        items="Home, Products, About, Contact"
        href_items="#home, #products, #about, #contact"
        style_nav="background-color: #333; color: white;"
        style_a="text-decoration: none; color: white;"
        default="false"
    ></nav-bar>
```
Attributes :

items: Comma-separated list of navigation item labels.
href_items: Comma-separated list of corresponding item URLs.
style_nav: Custom styles for the navigation bar itself.
style_a: Custom styles for the navigation links.
default: Set to "true" to use default styles, or "false" to apply custom styles.

## Examples
Check the provided index.html file for usage examples and further customization.

## Acknoledgments

This project was inspired by the need for a simple and customizable navigation bar component.
