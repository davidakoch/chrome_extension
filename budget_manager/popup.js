$(function(){
	$('#spendAmount').click(function(){
		chrome.storage.sync.get('total', function(budget){
			var newTotal = 0;
			if (budget.total){
				newTotal += parseInt(budget.total);
				
			}
		})
	})
});