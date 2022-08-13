function createPopup(HTML, options) {
  if (typeof options !== "object") {
    if (typeof options !== "undefined") {
      console.warn('typeof options !== "object"\nFalling back to `{}`');
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