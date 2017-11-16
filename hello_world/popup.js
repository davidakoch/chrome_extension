/*$(function(){
	$('#name').keyup(function(){
		$('#greet').text('Hello ' + $('#name').val())
	})
})*/

document.getElementById("name").addEventListener("keyup", myFunction);

function myFunction() {
    console.log("hello")
    //var x = document.getElementById("name");
    //x.value = x.value.toUpperCase();
    document.getElementById("greet").innerHTML = "Hello " + document.getElementById("name").value;
}

