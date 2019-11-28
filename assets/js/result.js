var validation = document.getElementById('submit');
validation.addEventListener('click', f_valid);
function f_valid() {
  // Déclaration des variables qui vont récupérer les valeurs des champs de saisie
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  if (isNaN(firstNumber) == true || isNaN(secondNumber)){
    alert('erreur : ce n\'est pas un nombre');
  }else{
    if (secondNumber != 0) {
      /* Déclaration d'une variable result qui contient le reste (modulo) de la division du nombre1 par le nombre2 */
      var result = firstNumber % secondNumber;
      //La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.
      alert(Math.round(result));
    }else{
      alert('erreur : car division par 0');
    }
  }
}
