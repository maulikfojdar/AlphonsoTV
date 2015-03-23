(function(){
	angular.module('alphonsoGrid',[])
	.controller('gridController', ['$http', function($http){
	var controller = this;
	
	this.popup = function(index){
		controller.info = index;
	}
	/*$http.jsonp('http://ads.alphonso.tv:8001/ads').success(function(data){
		alert(data);
	})
	.error(function(data, status){
		alert(status);
	})*/


	this.gallery =
	[
  {
    "id": "26862",
    "type": "Ad",
    "title": "HomeStreet Bank",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/26862.jpg"
  },
  {
    "id": "31248",
    "type": "Ad",
    "title": "CommonSense.org",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/31248.jpg"
  },
  {
    "id": "32562",
    "type": "Ad",
    "title": "Ford The Works",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/32562.jpg"
  },
  {
    "id": "34981",
    "type": "Ad",
    "title": "Air Wick Cactus Flower",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/34981.jpg"
  },
  {
    "id": "44229",
    "type": "Ad",
    "title": "General Mills",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/44229.jpg"
  },
  {
    "id": "44595",
    "type": "Ad",
    "title": "Samsung Galaxy S 4",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/44595.jpg"
  },
  {
    "id": "50736",
    "type": "Ad",
    "title": "Dyson Digital Slim",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/50736.jpg"
  },
  {
    "id": "50840",
    "type": "Ad",
    "title": "Impact Zone Golf Training System",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/50840.jpg"
  },
  {
    "id": "93674",
    "type": "Ad",
    "title": "Mubadala Development Company",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/93674.jpg"
  },
  {
    "id": "123972",
    "type": "Ad",
    "title": "FanDuel.com",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/123972.jpg"
  },
  {
    "id": "128491",
    "type": "Ad",
    "title": "Polly Pocket Wall Party",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/128491.jpg"
  },
  {
    "id": "128590",
    "type": "Ad",
    "title": "NyQuil vs Alka-Seltzer",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/128590.jpg"
  },
  {
    "id": "129102",
    "type": "Ad",
    "title": "Prudential",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/129102.jpg"
  },
  {
    "id": "130510",
    "type": "Ad",
    "title": "Loreal",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/130510.jpg"
  },
  {
    "id": "132500",
    "type": "Ad",
    "title": "Dave and Buster's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/132500.jpg"
  },
  {
    "id": "135995",
    "type": "Ad",
    "title": "Burger King Salad Wraps",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/135995.jpg"
  },
  {
    "id": "137611",
    "type": "Ad",
    "title": "Kohl's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/137611.jpg"
  },
  {
    "id": "137692",
    "type": "Ad",
    "title": "Josh Groban 'All That Echoes'",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/137692.jpg"
  },
  {
    "id": "141155",
    "type": "Ad",
    "title": "Children's Organ Transplant Association",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/141155.jpg"
  },
  {
    "id": "141790",
    "type": "Ad",
    "title": "Macy's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/141790.jpg"
  },
  {
    "id": "158779",
    "type": "Ad",
    "title": "McDonald's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/158779.jpg"
  },
  {
    "id": "199873",
    "type": "Ad",
    "title": "Grey Goose",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/199873.jpg"
  },
  {
    "id": "471133",
    "type": "Ad",
    "title": "Boston College",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/471133.jpg"
  },
  {
    "id": "694136",
    "type": "Ad",
    "title": "Walmart",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/694136.jpg"
  },
  {
    "id": "980278",
    "type": "Ad",
    "title": "Degree Motion Sense",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/980278.jpg"
  },
  {
    "id": "1186939",
    "type": "Ad",
    "title": "Tide+Febreze",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/1186939.jpg"
  },
  {
    "id": "1282603",
    "type": "Ad",
    "title": "Halo",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/1282603.jpg"
  },
  {
    "id": "1644157",
    "type": "Ad",
    "title": "Cleveland Golf",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/1644157.jpg"
  },
  {
    "id": "1928786",
    "type": "Ad",
    "title": "The Shelter Pet Project",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/1928786.jpg"
  },
  {
    "id": "2011905",
    "type": "Ad",
    "title": "Ping G30 Driver",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2011905.jpg"
  },
  {
    "id": "2013095",
    "type": "Ad",
    "title": "2 Minute Booty",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2013095.jpg"
  },
  {
    "id": "2070308",
    "type": "Ad",
    "title": "T-Mobile",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2070308.jpg"
  },
  {
    "id": "2078763",
    "type": "Ad",
    "title": "2015 Chrysler 200 Limited",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2078763.jpg"
  },
  {
    "id": "2097104",
    "type": "Ad",
    "title": "Esurance",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2097104.jpg"
  },
  {
    "id": "2283222",
    "type": "Ad",
    "title": "Dinovite",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2283222.jpg"
  },
  {
    "id": "2298826",
    "type": "Ad",
    "title": "M&M's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2298826.jpg"
  },
  {
    "id": "2387015",
    "type": "Ad",
    "title": "The Ugglys",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2387015.jpg"
  },
  {
    "id": "2388845",
    "type": "Ad",
    "title": "Rapid Advance",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2388845.jpg"
  },
  {
    "id": "2389528",
    "type": "Ad",
    "title": "Verizon Black Friday",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2389528.jpg"
  },
  {
    "id": "2390534",
    "type": "Ad",
    "title": "Shriners Hospitals For Children",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/2390534.jpg"
  },
   {
    "id": "141155",
    "type": "Ad",
    "title": "Children's Organ Transplant Association",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/141155.jpg"
  },
  {
    "id": "141790",
    "type": "Ad",
    "title": "Macy's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/141790.jpg"
  },
  {
    "id": "158779",
    "type": "Ad",
    "title": "McDonald's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/158779.jpg"
  },
  {
    "id": "158779",
    "type": "Ad",
    "title": "McDonald's",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/158779.jpg"
  },
  {
    "id": "199873",
    "type": "Ad",
    "title": "Grey Goose",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/199873.jpg"
  },
  {
    "id": "471133",
    "type": "Ad",
    "title": "Boston College",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/471133.jpg"
  },
  {
    "id": "31248",
    "type": "Ad",
    "title": "CommonSense.org",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/31248.jpg"
  },
  {
    "id": "32562",
    "type": "Ad",
    "title": "Ford The Works",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/32562.jpg"
  },
  {
    "id": "44595",
    "type": "Ad",
    "title": "Samsung Galaxy S 4",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/44595.jpg"
  },
  {
    "id": "50736",
    "type": "Ad",
    "title": "Dyson Digital Slim",
    "location": "Cupertino, CA",
    "network": "NBC",
    "network_logo": "http://assets.alphonso.tv/logo/logo_nbc.png",
    "thumbnail": "http://assets.alphonso.tv/advt_db/50736.jpg"
  }
];

	this.shuffle = function(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
	};

	this.imageGallery = this.shuffle(this.gallery);
	console.log(this.imageGallery);

}]);
})();
