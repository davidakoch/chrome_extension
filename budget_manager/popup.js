$(function(){

	chrome.storage.sync.get('total', function(budget){
		$('#total').text(budget.total);
	})

		//get element by class...then add a click event
		/*$('#spendAmount').click(function(){
		chrome.storage.sync.get('total', function(budget){
			var newTotal = 0;
			if (budget.total){
				newTotal += parseInt(budget.total);
			}*/
		//here is pure javascript code...not jquery	
		document.getElementById("spendAmount").onclick = 
  		function(){
		chrome.storage.sync.get('total', function(budget){
			var newTotal = 0;
			if (budget.total){
				newTotal += parseInt(budget.total);
			}
			

			//create a variable that holds the amount value
			//...what's the pure javascript equivalent of .val

			var amount = document.getElementById("amount").value;
			if(amount){
				newTotal += parseInt(amount);
			}
			chrome.storage.sync.set({'total': newTotal});

			//find the javascript equivalent of text
			$('#total').text(newTotal);
			$('#amount').val('')
		})
	}
});