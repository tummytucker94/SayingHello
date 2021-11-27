let name = prompt('Enter first and last name.');

if(name != null){
  document.getElementById('app').innerHTML = "Hello " + name + ", nice to meet you.";
}
