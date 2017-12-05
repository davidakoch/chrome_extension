	chrome.storage.sync.get(['total', 'limit'], function(budget){
		document.getElementById("total").innerHTML = budget.total; 
		document.getElementById("limit").innerHTML = budget.limit; 
	})

	document.getElementById("resetTotal").onclick = 
		function(){
		document.getElementById("total").innerHTML = 0; 
	}

		//here is pure javascript code...not jquery	
	document.getElementById("spendAmount").onclick = 
  		function(){
		chrome.storage.sync.get(['total', 'limit'], function(budget){
			var newTotal = 0;
			if (budget.total){
				newTotal += parseInt(budget.total);
			}

			var amount = document.getElementById("amount").value;
			if(amount){
				newTotal += parseInt(amount);
			}

			chrome.storage.sync.set({'total': newTotal}, function(){
				if(amount && newTotal >= budget.limit){
					var notifOptions = {
						type: 'basic',
						iconUrl: 'icon48.png',
						title: 'Limit Reached!',
						message: "Uh Oh! Looks like you've reached your limit, Moron!"
					}
				}
			});

			document.getElementById("total").innerHTML = newTotal;
			//$('#amount').val('')
	
		})
	};


