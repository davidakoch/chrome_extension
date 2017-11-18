/*$(function(){
	$('#name').keyup(function(){
		$('#greet').text('Hello ' + $('#name').val())
	})
})*/

document.getElementById("name").addEventListener("keyup", myFunction);

function myFunction() {
    console.log("hello")
    document.getElementById("greet").innerHTML = "Hello " + document.getElementById("name").value;
}

