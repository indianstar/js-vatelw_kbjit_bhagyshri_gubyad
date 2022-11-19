// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function multiplication()
{
var b1= parseInt(document.getElementById("box1").value);
var b2= parseInt(document.getElementById("box2").value);
  var table = document.getElementById ('multable');
  var output= "";

  for( var i=1;i<=b1;i++)
  {
    output+= "<tr>";
      for(var j=1;j<= b2 ;j++)
      {
        output += "<td>" + i*j+"</td>";
      }
      output +="</tr>"
    }
    table.innerHTML = output;

}