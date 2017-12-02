$(function(){

	chrome.storage.sync.get('limit', function(budget){
		$('#limit').val(budget.limit);
	})

	$('#saveLimit').click(function(){
		var limit = $('#limit').val();
		if(limit){
			chrome.storage.sync.set({'limit': limit}, function(){
				close();
			})
		}
	})

	/*move resetTotal function and html to 
	popupjs and popup html */
	$('#resetTotal').click(function(){
		chrome.storage.sync.set({'total': 0});
	});
})