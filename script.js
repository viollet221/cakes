function buttonClick() {
  const name = document.getElementsByTagName("input")[0].value;
  const email = document.getElementsByTagName("input")[1].value;

  if (name === "") {
    alert("Пожалуйста заполните поле имени");

    document.getElementsByTagName("input")[0].style.backgroundColor = "red";

    return;
  } else {
    document.getElementsByTagName("input")[0].style.backgroundColor = "";
  }

  if (email === "") {
    alert("Пожалуйста заполните поле емейла");

    document.getElementsByTagName("input")[1].style.backgroundColor = "red";

    return;
  } else {
    document.getElementsByTagName("input")[1].style.backgroundColor = "";
  }

  alert(
    "Привет, меня зовут " +
      document.getElementsByTagName("input")[0].value +
      "!"
  );
}
