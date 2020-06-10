/* Model js */
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".button");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//var form = document.querySelector('formElem');
//var data = new FormData();
//console.log(data);

/*Age calculator*/
const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

/* Update User */



/* Delete User */

function userDelete() {
    var tg = document.getElementById('datarow');
    tg.parentNode.removeChild(tg);
}

/* Form js */

const form = document.forms[0];

form.addEventListener("submit", function(event) {
        event.preventDefault();
        new FormData(form);
    form.clear;
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    
    const entries = [...data.entries()];
    var ret =
      "<tr id ='datarow'>" +
        "<td>" + entries[0][1] + "</td>" +
        "<td>" + getAge(entries[1][1]) + "</td>" +
        "<td>" + entries[1][1] + "</td>" +
        "<td>" + entries[2][1] + "</td>" +
        "<td>" + entries[3][1] + "</td>" +
        "<td>" +
          "</button>" + "<button type='button' " +
                  "onclick='userDelete();' " +
                  "class='button-red'>" +
                  "Delete" +
          "</button>" +"</td>" +
      "</tr>"
    
    document.getElementById("dataTable").innerHTML +=ret;
});



/* search table */

function searchtable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
