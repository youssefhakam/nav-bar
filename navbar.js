class CustomNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const items = this.getAttribute("items").split(", ");
    const hrefItems = this.getAttribute("href_items").split(", ");
    const isDefault = this.getAttribute("default") === "true";
    const styleNav = this.getAttribute("style_nav") || "";
    const styleA = this.getAttribute("style_a") || "";

    // Apply custom styles to the custom-navbar element when 'default' is false
    if (!isDefault) {
      this.style.cssText = styleNav;
    } else {
      // Apply default styles when 'default' is true
      this.style.display = "flex";
      this.style.flexWrap = "wrap";
      this.style.alignItems = "center";
      this.style.justifyContent = "center";
      this.style.padding = "0.5rem";
      this.style.gap = "0.5rem";
      this.style.borderBottom = "solid 1px #aaa";
      this.style.backgroundColor = "#eee";
    }

    // Create and apply styles to each link in the custom-navbar
    items.forEach((item, index) => {
      const link = document.createElement("a");
      link.href = hrefItems[index];
      link.textContent = item;

      if (!isDefault) {
        link.style.cssText = styleA;
      } else {
        link.style.display = "inline-block";
        link.style.minWidth = "9rem";
        link.style.padding = "0.5rem";
        link.style.borderRadius = "0.2rem";
        link.style.border = "solid 1px #aaa";
        link.style.textAlign = "center";
        link.style.textDecoration = "none";
        link.style.color = "black";

        link.addEventListener("mouseover", function () {
          link.style.backgroundColor = "gray";
        });

        link.addEventListener("mouseout", function () {
          link.style.backgroundColor = "";
        });
      }

      this.appendChild(link);
    });
  }
}

customElements.define("nav-bar", CustomNavbar);
