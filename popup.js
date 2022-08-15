function createPopup(HTML, options) {
  // Version 1.2.0
  // To be accompanied by popup.css.

  if (typeof HTML !== "string") {
    console.warn("%ccreatePopup:", "font-weight: bold; color: white", `typeof HTML !== "string"; Falling back to \`JSON.stringify(HTML)\``);
    HTML = JSON.stringify(HTML);
  }
  if (typeof options !== "object") {
    if (typeof options !== "undefined") {
      console.warn("%ccreatePopup:", "font-weight: bold; color: white", 'typeof options !== "object"; Falling back to `{}`');
    }
    options = {};
  }

  var dim = document.createElement("div");
  dim.classList.add("popup-dimmer");
  if (typeof options.dim === "object") {
    if (typeof options.dim.color === "string") {
      dim.style.backgroundColor = options.dim.color;
    }
  }
  document.body.appendChild(dim);

  var wrapper = document.createElement("div");
  wrapper.classList.add("popup-wrapper");

  var popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = HTML;
  if (typeof options.popup === "object") {
    if (typeof options.popup.color === "string") {
      popup.style.backgroundColor = options.popup.color;
    }
    if (typeof options.popup.h1Center === "boolean") {
      if (options.popup.h1Center) {
        popup.classList.add("h1-center");
      }
    }
  } else {
    popup.classList.add("h1-center");
  }
  wrapper.appendChild(popup);

  var dismiss = document.createElement("div");
  dismiss.classList.add("popup-dismiss");
  var dismissButton = document.createElement("button");
  dismissButton.innerText = "x";
  dismiss.appendChild(dismissButton);
  wrapper.appendChild(dismiss);

  document.body.appendChild(wrapper);

  dismissButton.addEventListener("click", function () {
    dim.remove();
    wrapper.remove();
  });
}