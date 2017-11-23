$(function(){
	$('#spendAmount').click(function(){
		chrome.storage.sync.get('total', function(budget){
			var newTotal = 0;
			if (budget.total){
				newTotal += parseInt(budget.total);
			}
			//create a variable that holds the amount value
			//...what's the pure javascript equivalent of .val
			var amount = $('#amount').val();
			if(amount){
				newTotal += parseInt(amount);
			}
			chrome.storage.sync.set({'total': newTotal});

			//find the javascript equivalent of text
			$('#total').text(newTotal);
			$('#amount').val('')
		})
	})
});