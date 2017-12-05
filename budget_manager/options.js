
	chrome.storage.sync.get('limit', function(budget){
		//$('#limit').val(budget.limit);
		document.getElementById("limit").value = budget.limit;
	})

	document.getElementById("saveLimit").onclick =
	function(){
		var limit = document.getElementById("limit").value;
		if(limit){
			chrome.storage.sync.set({'limit': limit}, function(){
				close();
			})
		}
	}	

	document.getElementById("resetTotal").onclick = 
		function(){
		chrome.storage.sync.set({'total': 0});
	}