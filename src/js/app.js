import "../style/index.css";

function render(variables = {}) {
  console.log("Las variables actuales son: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.Nombre} ${variables.apellido}</h1>
          <h2>${variables.profesion}</h2>
          <h3>${variables.ciudad}, ${variables.Pais}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,

    background:
      "https://i.pinimg.com/236x/d6/f6/e8/d6f6e8fa7cb99e2d23be259164e9ac44.jpg",

    avatarURL: "https://avatars.githubusercontent.com/u/187560644?v=4",

    socialMediaPosition: "position-left",

    twitter: "https://x.com/Riculer",
    github: "https://github.com/ericmuler",
    linkedin: "https://www.linkedin.com/in/eric-mulero-fernandez-86ba57351/",
    instagram: "https://www.facebook.com/EricMulfer",
    Nombre: "Eric",
    apellido: "Mulero",
    profesion: "Profesión",
    Pais: "País",
    ciudad: "Ciudad"
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
