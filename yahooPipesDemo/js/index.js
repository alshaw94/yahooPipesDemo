var feedURL = "http://pipes.yahoo.com/pipes/pipe.run?_id=62dc32b0248dc081784a65ae88ddb33a&_render=json";

$(document).on('pagecreate', '#feedPage', function(event) {
	
	
	<!-- Use an HTML GET request to obtain data from a Yahoo Pipe
	<!-- The Yahoo pipe currently parses the BBC News RSS feed  -->
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL,false);
	xmlhttp.send();
		
		
	<!-- parse the resulting JSON into Javascript Data Object -->
	<!-- you can use a live parser to inspect the contents of the JSON
	<!-- http://json.parser.online.fr/ -->
	var bbc= JSON.parse(xmlhttp.responseText);
	
	
	<!-- Define Ractive binding -->
	var ractive = new Ractive({
    	el: 'container', <!-- where -->
    	template: '#myTemplate', <!-- how -->
    	data: { bbc : bbc.value.items } <!-- what - specify the list of news articles 'items' using dot notation-->
	});
	
});