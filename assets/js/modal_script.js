const form_for_con = document.getElementById("form-for-consultation");

const toConsultation = () => {
  form_for_con.classList.add("active");
  document.body.classList.toggle("menu_open");
};

const exitConsultation = () => {
  form_for_con.classList.remove("active");
  document.body.classList.toggle("menu_open");
};
