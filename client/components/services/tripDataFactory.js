// A Factory that returns an array of trips
angular.module('emiratesProjectApp').factory('tripDataFactory', function(){
	var trips2000 = [
		{
			location: "Peru",
			description: "A beautiful getaway in the exotic country of Peru",
			totalPrice: "2000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests:  2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 800,
						startTime: "December 17, 2015 03:24:00",
						startLocation: "San Francisco, CA",
						destination: "",
						endTime: ""
					},
					inboundFlight: {
						price: 800,
						startTime: "December 17, 2015 03:24:00",
						startLocation: "San Francisco, CA" ,
						destination: "",
						endTime: ""
					} 
				}
			]
		},
		{
			location: "Maldives",
			description: "Enjoy a relaxing stay in the Maldives",
			totalPrice: "1500",
			imageUrl: "./assets/images/france.jpg",
			lodges: [
				{
					imageUrl: "http://cdni.condenast.co.uk/646x430/a_c/ayada_cnt_25aug11_pr.jpg",
					description: "Maldives Beach Lodge",
					price: "300"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "New York City",
			description: "Experience the excitement of New York",
			totalPrice: "3000",
			imageUrl: "./assets/images/tahoe.jpeg",
			lodges: [
				{
					imageUrl: "http://www.famousnychotels.com/bpcms/ImageUpload/hotelphotos/warwickny.jpg",
					description: "Warwick Hotel",
					price: "1000"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "San Francisco",
			description: "Find love in the most beutiful city in the world",
			totalPrice: "1200",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://www.socketsite.com/wp-content/uploads/2014/03/Hotel-Mirabelle.jpg",
					description: "Hotel Mirabelle",
					price: "600"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Berlin",
			description: "Come experience this burgeoning center of world culture",
			totalPrice: "500",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "",
					description: "",
					price: "400"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Hawaii",
			description: "Come for fun in the sun!",
			totalPrice: "1700",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/U.S./876/493/aqua_hotel_hawaii.jpg",
					description: "Hawaii Resort",
					price: "700"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Japan",
			description: "A beautiful getaway in the exotic country of Japan",
			totalPrice: "3000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://insidekyoto.smugmug.com/Kyoto-Hotels/The-Gion-House/i-WXBXWht/0/M/gion-house-3-M.jpg",
					description: "Ryokan Inn",
					price: "200"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Los Angeles",
			description: "Party with the stars in the City of Angels",
			totalPrice: "1000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://assets.sheratonlax.com/XLGallery/md/she344ex22426.jpg",
					description: "Sheraton Los Angeles",
					price: "400"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		}
	]

	var trips5000 = [
		{
			location: "Peru",
			description: "A beautiful getaway in the exotic country of Peru",
			totalPrice: "2000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests:  2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 800,
						startTime: "December 17, 2015 03:24:00",
						startLocation: "San Francisco, CA",
						destination: "",
						endTime: ""
					},
					inboundFlight: {
						price: 800,
						startTime: "December 17, 2015 03:24:00",
						startLocation: "San Francisco, CA" ,
						destination: "",
						endTime: ""
					} 
				}
			]
		},
		{
			location: "Maldives",
			description: "Enjoy a relaxing stay in the Maldives",
			totalPrice: "1500",
			imageUrl: "./assets/images/france.jpg",
			lodges: [
				{
					imageUrl: "http://cdni.condenast.co.uk/646x430/a_c/ayada_cnt_25aug11_pr.jpg",
					description: "Maldives Beach Lodge",
					price: "300"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "New York City",
			description: "Experience the excitement of New York",
			totalPrice: "3000",
			imageUrl: "./assets/images/tahoe.jpeg",
			lodges: [
				{
					imageUrl: "http://www.famousnychotels.com/bpcms/ImageUpload/hotelphotos/warwickny.jpg",
					description: "Warwick Hotel",
					price: "1000"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "San Francisco",
			description: "Find love in the most beutiful city in the world",
			totalPrice: "1200",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://www.socketsite.com/wp-content/uploads/2014/03/Hotel-Mirabelle.jpg",
					description: "Hotel Mirabelle",
					price: "600"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Berlin",
			description: "Come experience this burgeoning center of world culture",
			totalPrice: "500",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "",
					description: "",
					price: "400"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Hawaii",
			description: "Come for fun in the sun!",
			totalPrice: "1700",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/U.S./876/493/aqua_hotel_hawaii.jpg",
					description: "Hawaii Resort",
					price: "700"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Japan",
			description: "A beautiful getaway in the exotic country of Japan",
			totalPrice: "3000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://insidekyoto.smugmug.com/Kyoto-Hotels/The-Gion-House/i-WXBXWht/0/M/gion-house-3-M.jpg",
					description: "Ryokan Inn",
					price: "200"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Los Angeles",
			description: "Party with the stars in the City of Angels",
			totalPrice: "1000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://assets.sheratonlax.com/XLGallery/md/she344ex22426.jpg",
					description: "Sheraton Los Angeles",
					price: "400"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		}
	]

	var trips8000 = [
		{
			location: "Peru",
			description: "A beautiful getaway in the exotic country of Peru",
			totalPrice: "2000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests:  2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
				{
					title: "Ocean view apartment",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "Blemond Sanctuary Lodge",
					price: "500",
					num_guests: 2
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 800,
						startTime: "December 17, 2015 03:24:00",
						startLocation: "San Francisco, CA",
						destination: "",
						endTime: ""
					},
					inboundFlight: {
						price: 800,
						startTime: "December 17, 2015 03:24:00",
						startLocation: "San Francisco, CA" ,
						destination: "",
						endTime: ""
					} 
				}
			]
		},
		{
			location: "Maldives",
			description: "Enjoy a relaxing stay in the Maldives",
			totalPrice: "1500",
			imageUrl: "./assets/images/france.jpg",
			lodges: [
				{
					imageUrl: "http://cdni.condenast.co.uk/646x430/a_c/ayada_cnt_25aug11_pr.jpg",
					description: "Maldives Beach Lodge",
					price: "300"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "New York City",
			description: "Experience the excitement of New York",
			totalPrice: "3000",
			imageUrl: "./assets/images/tahoe.jpeg",
			lodges: [
				{
					imageUrl: "http://www.famousnychotels.com/bpcms/ImageUpload/hotelphotos/warwickny.jpg",
					description: "Warwick Hotel",
					price: "1000"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "San Francisco",
			description: "Find love in the most beutiful city in the world",
			totalPrice: "1200",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://www.socketsite.com/wp-content/uploads/2014/03/Hotel-Mirabelle.jpg",
					description: "Hotel Mirabelle",
					price: "600"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Berlin",
			description: "Come experience this burgeoning center of world culture",
			totalPrice: "500",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "",
					description: "",
					price: "400"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Hawaii",
			description: "Come for fun in the sun!",
			totalPrice: "1700",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/U.S./876/493/aqua_hotel_hawaii.jpg",
					description: "Hawaii Resort",
					price: "700"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Japan",
			description: "A beautiful getaway in the exotic country of Japan",
			totalPrice: "3000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://insidekyoto.smugmug.com/Kyoto-Hotels/The-Gion-House/i-WXBXWht/0/M/gion-house-3-M.jpg",
					description: "Ryokan Inn",
					price: "200"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		},
		{
			location: "Los Angeles",
			description: "Party with the stars in the City of Angels",
			totalPrice: "1000",
			imageUrl: "./assets/images/dubai.jpg",
			lodges: [
				{
					imageUrl: "http://assets.sheratonlax.com/XLGallery/md/she344ex22426.jpg",
					description: "Sheraton Los Angeles",
					price: "400"
				}
			],
			flight: {
				departureDate: new Date(),
				arrivalDate: new Date(),
				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
			}
		}
	]

	var trips = trips2000;
	return trips;
});