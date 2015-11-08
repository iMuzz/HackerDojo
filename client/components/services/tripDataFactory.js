// A Factory that returns an array of trips
angular.module('emiratesProjectApp').factory('tripDataFactory', function(){
	var trips = [
		{
			location: "Peru",
			description: "A beautiful getaway in the exotic country of Peru",
			totalPrice: "2000",
			imageUrl: "http://cdni.condenast.co.uk/646x430/o_r/peru_cnt_9nov09_istock_b.jpg",
			lodge: {
				imageUrl: "",
				description: "",
				price: ""
			},
			flight: {
				departureDate: "",
				arrivalDate: "",
				returnDepartureDate: "",
				returnArrivalDate: ""
			}
		},
	]

	return trips;
});