document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);

      this.textContent = "Probar";
      var name =  document.getElementById("name").value;
        if(name === "29032510"){ var message = "<p1> ncteoaonr al rabo de rtea </p1>"}
          else {var message = "<p2> Mmmm, esa no es. Pero te dejo probar otra vez</p2>"}
       

      document
        .getElementById("content")
        .innerHTML = message;

  
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);
