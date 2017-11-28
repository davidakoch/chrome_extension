$(function(){

	chrome.storage.sync.get('total', function(budget){
		$('#total').text(budget.total);
	})

		//here is pure javascript code...not jquery	
		document.getElementById("spendAmount").onclick = 
  		function(){
		chrome.storage.sync.get('total', function(budget){
			var newTotal = 0;
			if (budget.total){
				newTotal += parseInt(budget.total);
			}

			var amount = document.getElementById("amount").value;
			if(amount){
				newTotal += parseInt(amount);
			}

			chrome.storage.sync.set({'total': newTotal});

			document.getElementById("total").innerHTML = newTotal;
			$('#amount').val('')
	
		})
	}
});