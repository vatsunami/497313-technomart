var map = document.querySelector(".contact-image");
var write = document.querySelector(".contact-button");
var cart = document.querySelectorAll(".product-buy");

if (map) {
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

if (write) {
  var writePopup = document.querySelector(".modal-write");
  var writeClose = writePopup.querySelector(".modal-close");
  var writeForm = writePopup.querySelector(".write-form");
  var writeName = writePopup.querySelector("[name=name]");
  var writeMail = writePopup.querySelector("[name=email]");
  var writeText = writePopup.querySelector("[name=message]");
  var writeSubmit = writePopup.querySelector(".button");



  var isStorageSupport = true;

  try {
    localStorage.getItem("writeName");
  } catch (err) {
    isStorageSupport = false;
  }

  write.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    writeName.focus();
    if (localStorage.getItem("writeName")) {
      writeName.value = localStorage.getItem("writeName");
      writeMail.value = localStorage.getItem("writeMail");
      writeText.focus();
    }
  });

  writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
    writePopup.classList.remove("modal-error");
  });

  writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeMail.value || !writeText.value) {
      evt.preventDefault();
      writePopup.classList.remove("modal-error");
      void writePopup.offsetWidth;
      writePopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("writeName", writeName.value);
        localStorage.setItem("writeMail", writeMail.value);
      }
    }
  });


  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writePopup.classList.remove("modal-show");
        writePopup.classList.remove("modal-error");
      }
    }
  });
}

if (cart) {
  var cartPopup = document.querySelector(".modal-cart");
  var cartClose = cartPopup.querySelector(".modal-close");

  for (var i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });

    cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    });
  };

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
      }
    }
  });
}
