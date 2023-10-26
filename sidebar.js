collapse_toogle_button = document.getElementById("collapse");
collapse = false;

collapse_toogle_button.addEventListener("click", function () {
  console.log("clicked");
  var hide_elements = document.getElementsByClassName("hide-on-collapse");

  var body = document.getElementsByTagName("body")[0];
  for (let i = 0; i < hide_elements.length; i++) {
    const element = hide_elements[i];
    if (collapse) {
      element.style.display = "flex";
      body.style.gridTemplateColumns = "420px 1fr";
    } else {
      element.style.display = "none";
      body.style.gridTemplateColumns = "auto 1fr";
    }
  }
  collapse = !collapse;
});
