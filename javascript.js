document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);

      this.textContent = "Said it!";
      var name =  document.getElementById("name").value;
        if(name === "29032510"){ var message = "<p>Bien! Entraste! Cómo no se te ocurrió antes?</p>"}
          else {var message = "<p> Mmmm, esa no es. Pero te dejo probar otra vez</p>"}
       

      document
        .getElementById("content")
        .innerHTML = message;

  
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);
