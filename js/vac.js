$(function() {
	// var url = 'https://api.datamarket.azure.com/Bing/Search/v1/Image?Query=%27tahiti%27'
	// var bingAppKey = '/o13fyBB3Jrn73hzuJPL0KKBsCg/9P9xTbtkWh5w/kU';

	var imgSearch = function(location) {
		$.bingSearch({
		    // Required: query text
		    query: location,
		    // Required (unless you use urlBase) by Bing Search API
		    appKey: '/o13fyBB3Jrn73hzuJPL0KKBsCg/9P9xTbtkWh5w/kU'
		    // Optional (defaults to the Bing Search API Web Results Query).
		    // Additional information: This feature allows you to proxy through a server-side
		    //                         script in order to hide your API key, which is exposed to the
		    //                         world if you set it client-side in appKey. An example PHP
		    //                         script is included (searchproxy.php).
		    // urlBase: 'searchproxy.php',
		    // // Optional (defaults to 1): Page Number
		    // pageNumber: parseInt($('#pageNumber').val()),
		    // // Optional (defaults to 10): Page Size
		    // pageSize: 10,
		    // // Optional (defaults to null): Limit to site. Shortcut to adding "site:example.org " to query
		    // limitToSite: 'example.org',
		    // Optional (defaults to false): Print console logging information about search results
		   //debug: false,
		    // Optional: Function is called after search results are retrieved, but before the interator is called
		    beforeSearchResults: function(data) {
		        // Use data.hasMore, data.resultBatchCount
		    },
		    // Optional: Function is called once per result in the current batch
		    searchResultIterator: function(data) {
		        // Use data.ID, data.Title, data.Description, data.Url, data.DisplayUrl, data.Metadata.Type (check for undefined)
		    },
		    // Optional: Function is called after search results are retrieved and after all instances of the interator are called
		    afterSearchResults: function(data) {
		        // Use data.hasMore, data.resultBatchCount
		    },
		    // Optional: Called when there is an error retrieving results
		    fail: function(data) {
		        // data contains an error message
		    }
		});
	}
});