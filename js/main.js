
// Requête AJAX
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObject = JSON.parse(xhttp.responseText)
        htmlManager.table(myObject);
    }
}
xhttp.open("GET", "info.json", true);
xhttp.send();

let htmlManager = {
   parentElement: document.getElementById('table'),
   table: function (object) {
     for (var i = 0; i < object.length; i++) {
       let tr = document.createElement("tr");
       htmlManager.parentElement.appendChild(tr);

       let tdId = document.createElement("th");
       tdId.innerHTML = object[i].id;
       tr.appendChild(tdId);

       let tdName = document.createElement("th");
       tdName.innerHTML = object[i].name;
       tr.appendChild(tdName);

       let tdAge = document.createElement("th");
       tdAge.innerHTML = object[i].age;
       tr.appendChild(tdAge);

       let tdCity = document.createElement("th");
       tdCity.innerHTML = object[i].city;
       tr.appendChild(tdCity);
    }
   }
}
