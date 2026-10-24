// ProFund Liberty Group LLC — small site script (menu, forms, footer year)
(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Web3Forms submission (falls back to a normal form post if JavaScript is off)
  var PLACEHOLDER_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
  document.querySelectorAll("form.js-web3form").forEach(function (form) {
    var status = form.querySelector(".form-status");
    var button = form.querySelector('button[type="submit"]');

    function show(msg, ok) {
      status.textContent = msg;
      status.className = "form-status show " + (ok ? "ok" : "err");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var key = form.querySelector('input[name="access_key"]').value;
      if (!key || key === PLACEHOLDER_KEY) {
        show("This form is not connected yet. Please contact us directly by phone or email for now.", false);
        return;
      }

      var data = Object.fromEntries(new FormData(form).entries());
      var original = button.textContent;
      button.disabled = true;
      button.textContent = "Sending…";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            form.reset();
            show("Thank you! Your request was received. A member of our team will be in touch soon.", true);
          } else {
            show(json.message || "Something went wrong. Please try again or contact us directly.", false);
          }
        })
        .catch(function () {
          show("We couldn't send your request. Please check your connection and try again.", false);
        })
        .finally(function () {
          button.disabled = false;
          button.textContent = original;
        });
    });
  });
})();
