var CashRegister = function() { //class declaration
	// private properties
	var itemList = {
		"apple" : [2],
		"banana" : [4],
		"pear" : [5],
		"rope" : [3.5],
		"orange" : [1]
	}
	
	var currentCash = 100,
		itemListStatus = false,
		tableStatus = false,
		searchResultsMessage = false;
	
	//private method
	/*
	 *	show item list only if itemListStatus is false
	 */
	var showItems = function() {
		if (!itemListStatus) {
			var results = [];
			for (x in itemList) {
				results.push(x);
			}
			createTable(results);
			itemListStatus = true;
		}
	}
	
	/* check for empty item list*/
	var checkItemList = function () {
		return (itemList.length > 0);
	}
	/* refund transaction */
	
	var randomTransaction = function() {
		for (x in itemList) {
			if(Math.round(Math.random())) {
				console.log('yes');
			}
		}
		
		/* 
			get array of list items
			store a value for cost of transaction
			for loop - each item in the list, have a 50% chance of the quantity being 0 or more than 1
			select a random number for the quantity of that item
			add the string of name and quantity and the cost of that many apples
			multiply the quantity of the item and the items price
			add this to the transactionCost
			
			
		*/
	}
	
	// indexOf checks for substring in a string
	var searchItems = function() {
		var results = [];
		var query = document.getElementById("search-form").value.trim().toLowerCase();
		if (query.length > 0) {
			for (x in itemList) {
				if (x.toLowerCase().indexOf(query) != -1) {
					results.push(x);
				}
			}
			
			//check if search table exists and delete
			if (tableStatus) {
				$("#search-table").remove();
				tableStatus = false;
			}
			
			if (searchResultsMessage) {
				$("#search-message").remove();
				searchResultsMessage = false;
			}
			
			if (results.length > 0) {
				createTable(results);
			} else {
				if (!searchResultsMessage) {
					var searchMessage = document.createElement("div");
					searchMessage.id = "search-message";
					var newContent = document.createTextNode("No results found for ");
					searchMessage.appendChild(newContent);
				
					document.body.insertBefore(searchMessage, anchor);
					searchResultsMessage = true;
				}
			}
		} else {
			// TODO
			console.log("please enter search string");
		}
	}
	
	var createTable = function(results) {
		var tbl = document.createElement('table');
		var theaders = document.createElement('thead');
		
		var headerItem = theaders.insertRow();
		headerItem.insertCell().appendChild(document.createTextNode("Item"));
		headerItem.insertCell().appendChild(document.createTextNode("Price"));
		
		for (var i = 0; i < results.length; i++) {
			var tr = tbl.insertRow();
			tr.insertCell().appendChild(document.createTextNode(itemList[results[i]]));
			tr.insertCell().appendChild(document.createTextNode(results[i]));
		}
		

		tbl.id = "search-table";
		tbl.appendChild(theaders);
		document.body.appendChild(tbl);
		tableStatus = true;
		
	}
	
	var obj = { // constructor method 
		publicvar: 10,
		showItems: function() { // public method
			showItems();
		},
		searchItems: function() {
			searchItems();
		}
		
	}
	
	return obj;
}

// Button click event listeners
$("#item-list-button").click(function() {
	cashRegister.showItems();
});


$("#search-button").click(function() {
	cashRegister.searchItems();
});

var cashRegister = new CashRegister;