// A Factory that returns an array of trips
angular.module('emiratesProjectApp').factory('tripDataFactory', function(){
	var trips2000 = [
		{
			location: "dubai",
			description: "",
			totalPrice: "1515",
			imageUrl: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/1079/Dubai-48863.jpg",
			lodges: [
				{
					title: "Hotel Studio Apt. Burj Khalifa View",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/91562257/7b53642b_original.jpg?aki_policy=xx_large",
					description: "Hotel Studio Apartment with Burj Khalifa View, Very Spacious, Fully Furnished with Fully equip kitchen. Free Facilities like Gym, Swimming Pool, Steam, Sauna, Jacuzzi. Property have All day Cafe, Multi Cuisine Restaurant with room service.",
					price: "1106",
					num_guests: 2
				},
				{
					title: "Fairmont Residence Palm Jumeirah!!",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "https://a2.muscache.com/im/pictures/70389640/6c3a71c1_original.jpg?aki_policy=xx_large",
					description: "Apartment with direct access to the beach! With most hotel facilities!",
					price: "1469",
					num_guests:  4
				},
				{
					title: "Fully Funished Studio Apartment1",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "https://a2.muscache.com/im/pictures/991ce7c5-5746-4a7b-ba44-61f169f93d21.jpg?aki_policy=xx_large",
					description: "Beautiful Studio with free wifi (100 Mb/s) speed, 5 minutes drive to Internet City & Media City, daily free housekeeping service, access to Gym & Pool, free parking, no hidden cost, 24/7 reception desk. close to Metro station & good attractions.",
					price: "685",
					num_guests: 2
				},
				{
					title: "Full 1 Bedroom Flat Downtown Dubai",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "https://a2.muscache.com/im/pictures/93965442/0145c475_original.jpg?aki_policy=xx_large",
					price: "829",
					num_guests: 4
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 757,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						abbr: "SF",
						destination: "Dubai",
						endTime: "07:25"
					},
					inboundFlight: {
						price: 757,
						startTime: "December 01, 2015 08:55",
						startLocation: "Dubai" ,
						abbr: "DXB",
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
				{
					outboundFlight:  {
						price: 1188,
						startTime: "November 25, 2015 03:40",
						startLocation: "Dubai",
						abbr: "DXB",
						destination: "San Francisco, CA",
						endTime: "07:25"
					},
					inboundFlight: {
						price: 1188,
						startTime: "December 01, 2015 08:55",
						startLocation: "Dubai" ,
						abbr: "SF",
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
			]
		},
		{
			location: "Beijing",
			description: "",
			totalPrice: "1515",
			imageUrl: "http://www.conquerthewallmarathon.com/wp-content/uploads/2014/05/afternoon-beijing-china.jpg",
			lodges: [
				{
					title: "Bright Hotel Style room",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "https://a0.muscache.com/im/pictures/109050986/e0a7c38e_original.jpg?aki_policy=xx_large",
					description: "Hope you can treat it as your house. I love the outside view most through the window.You can cook and take a rest at balcony. This room is in the area most Beijinger lived who worked in inner city,so the traffic is quiet good.",
					price: "246",
					num_guests: 2
				},
				{
					title: "A Place You Can Call It Home",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/69533371/90d666be_original.jpg?aki_policy=xx_large",
					description: "I hope to provide a place you can call it HOME, not only a place to stay. Wish your trip starts with joyful memories with us. Small private bedroom with VPN enabled Internet. For travelers that need tourist visa, please reach me for help.",
					price: "194",
					num_guests:  2
				},
				{
					title: "Sanlitun Embassy Bed+Bath+Balcony",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/17693924/a40a2f52_original.jpg?aki_policy=xx_large",
					description: "Our Japanese style 3 level home in a quiet garden is unique in Beijing. Large comfy room and bed to private balcony. Private 2-room downstairs bathroom or use the 2/F bathroom. Near transport, restaurants, mall and shops. Freegym, air-con, swim pool, bicycles, local knowledge and friendship.",
					price: "262",
					num_guests: 2
				},
				{
					title: "Sofabed besides Peking University",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "https://a1.muscache.com/im/pictures/97360760/aeb7a94e_original.jpg?aki_policy=xx_large",
					price: "84",
					num_guests: 1
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 690,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "02:45"
					},
					inboundFlight: {
						price: 690,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
				{
					outboundFlight:  {
						price: 691,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "10:30"
					},
					inboundFlight: {
						price: 800,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				}
			]
		},
		{
			location: "Mumbai",
			description: "",
			totalPrice: "1515",
			imageUrl: "http://cdn.ek.aero/us/english/images/Mumbai_tcm272-2256655.jpg",
			lodges: [
				{
					title: "Bright Hotel Style room",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "https://a0.muscache.com/im/pictures/109050986/e0a7c38e_original.jpg?aki_policy=xx_large",
					description: "Hope you can treat it as your house. I love the outside view most through the window.You can cook and take a rest at balcony. This room is in the area most Beijinger lived who worked in inner city,so the traffic is quiet good.",
					price: "246",
					num_guests: 2
				},
				{
					title: "A Place You Can Call It Home",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/69533371/90d666be_original.jpg?aki_policy=xx_large",
					description: "I hope to provide a place you can call it HOME, not only a place to stay. Wish your trip starts with joyful memories with us. Small private bedroom with VPN enabled Internet. For travelers that need tourist visa, please reach me for help.",
					price: "194",
					num_guests:  2
				},
				{
					title: "Sanlitun Embassy Bed+Bath+Balcony",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/17693924/a40a2f52_original.jpg?aki_policy=xx_large",
					description: "Our Japanese style 3 level home in a quiet garden is unique in Beijing. Large comfy room and bed to private balcony. Private 2-room downstairs bathroom or use the 2/F bathroom. Near transport, restaurants, mall and shops. Freegym, air-con, swim pool, bicycles, local knowledge and friendship.",
					price: "262",
					num_guests: 2
				},
				{
					title: "Sofabed besides Peking University",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "https://a1.muscache.com/im/pictures/97360760/aeb7a94e_original.jpg?aki_policy=xx_large",
					price: "84",
					num_guests: 1
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 690,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "02:45"
					},
					inboundFlight: {
						price: 690,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
				{
					outboundFlight:  {
						price: 691,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "10:30"
					},
					inboundFlight: {
						price: 800,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				}
			]
		},
		{
			location: "Dakha",
			description: "",
			totalPrice: "1515",
			imageUrl: "http://cdn.ek.aero/us/english/images/Dhaka_tcm272-2167677.jpg",
			lodges: [
				{
					title: "Bright Hotel Style room",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "https://a0.muscache.com/im/pictures/109050986/e0a7c38e_original.jpg?aki_policy=xx_large",
					description: "Hope you can treat it as your house. I love the outside view most through the window.You can cook and take a rest at balcony. This room is in the area most Beijinger lived who worked in inner city,so the traffic is quiet good.",
					price: "246",
					num_guests: 2
				},
				{
					title: "A Place You Can Call It Home",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/69533371/90d666be_original.jpg?aki_policy=xx_large",
					description: "I hope to provide a place you can call it HOME, not only a place to stay. Wish your trip starts with joyful memories with us. Small private bedroom with VPN enabled Internet. For travelers that need tourist visa, please reach me for help.",
					price: "194",
					num_guests:  2
				},
				{
					title: "Sanlitun Embassy Bed+Bath+Balcony",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/17693924/a40a2f52_original.jpg?aki_policy=xx_large",
					description: "Our Japanese style 3 level home in a quiet garden is unique in Beijing. Large comfy room and bed to private balcony. Private 2-room downstairs bathroom or use the 2/F bathroom. Near transport, restaurants, mall and shops. Freegym, air-con, swim pool, bicycles, local knowledge and friendship.",
					price: "262",
					num_guests: 2
				},
				{
					title: "Sofabed besides Peking University",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "https://a1.muscache.com/im/pictures/97360760/aeb7a94e_original.jpg?aki_policy=xx_large",
					price: "84",
					num_guests: 1
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 690,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "02:45"
					},
					inboundFlight: {
						price: 690,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
				{
					outboundFlight:  {
						price: 691,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "10:30"
					},
					inboundFlight: {
						price: 800,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				}
			]
		},
		{
			location: "Dakha",
			description: "",
			totalPrice: "1515",
			imageUrl: "http://cdn.ek.aero/us/english/images/Dhaka_tcm272-2167677.jpg",
			lodges: [
				{
					title: "Bright Hotel Style room",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "https://a0.muscache.com/im/pictures/109050986/e0a7c38e_original.jpg?aki_policy=xx_large",
					description: "Hope you can treat it as your house. I love the outside view most through the window.You can cook and take a rest at balcony. This room is in the area most Beijinger lived who worked in inner city,so the traffic is quiet good.",
					price: "246",
					num_guests: 2
				},
				{
					title: "A Place You Can Call It Home",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/69533371/90d666be_original.jpg?aki_policy=xx_large",
					description: "I hope to provide a place you can call it HOME, not only a place to stay. Wish your trip starts with joyful memories with us. Small private bedroom with VPN enabled Internet. For travelers that need tourist visa, please reach me for help.",
					price: "194",
					num_guests:  2
				},
				{
					title: "Sanlitun Embassy Bed+Bath+Balcony",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/17693924/a40a2f52_original.jpg?aki_policy=xx_large",
					description: "Our Japanese style 3 level home in a quiet garden is unique in Beijing. Large comfy room and bed to private balcony. Private 2-room downstairs bathroom or use the 2/F bathroom. Near transport, restaurants, mall and shops. Freegym, air-con, swim pool, bicycles, local knowledge and friendship.",
					price: "262",
					num_guests: 2
				},
				{
					title: "Sofabed besides Peking University",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "https://a1.muscache.com/im/pictures/97360760/aeb7a94e_original.jpg?aki_policy=xx_large",
					price: "84",
					num_guests: 1
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 690,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "02:45"
					},
					inboundFlight: {
						price: 690,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
				{
					outboundFlight:  {
						price: 691,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "10:30"
					},
					inboundFlight: {
						price: 800,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				}
			]
		},
		{
			location: "Johannesburg",
			description: "",
			totalPrice: "1515",
			imageUrl: "http://cdn.ek.aero/us/english/images/Johannesburg_tcm272-2376032.jpg",
			lodges: [
				{
					title: "Bright Hotel Style room",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "https://a0.muscache.com/im/pictures/109050986/e0a7c38e_original.jpg?aki_policy=xx_large",
					description: "Hope you can treat it as your house. I love the outside view most through the window.You can cook and take a rest at balcony. This room is in the area most Beijinger lived who worked in inner city,so the traffic is quiet good.",
					price: "246",
					num_guests: 2
				},
				{
					title: "A Place You Can Call It Home",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/69533371/90d666be_original.jpg?aki_policy=xx_large",
					description: "I hope to provide a place you can call it HOME, not only a place to stay. Wish your trip starts with joyful memories with us. Small private bedroom with VPN enabled Internet. For travelers that need tourist visa, please reach me for help.",
					price: "194",
					num_guests:  2
				},
				{
					title: "Sanlitun Embassy Bed+Bath+Balcony",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/17693924/a40a2f52_original.jpg?aki_policy=xx_large",
					description: "Our Japanese style 3 level home in a quiet garden is unique in Beijing. Large comfy room and bed to private balcony. Private 2-room downstairs bathroom or use the 2/F bathroom. Near transport, restaurants, mall and shops. Freegym, air-con, swim pool, bicycles, local knowledge and friendship.",
					price: "262",
					num_guests: 2
				},
				{
					title: "Sofabed besides Peking University",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "https://a1.muscache.com/im/pictures/97360760/aeb7a94e_original.jpg?aki_policy=xx_large",
					price: "84",
					num_guests: 1
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 690,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "02:45"
					},
					inboundFlight: {
						price: 690,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
				{
					outboundFlight:  {
						price: 691,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						destination: "Beijing",
						endTime: "10:30"
					},
					inboundFlight: {
						price: 800,
						startTime: "December 01, 2015 11:05",
						startLocation: "Beijing" ,
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				}
			]
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
		},

		{
			location: "dubai",
			description: "",
			totalPrice: "1515",
			imageUrl: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/1079/Dubai-48863.jpg",
			lodges: [
				{
					title: "Hotel Studio Apt. Burj Khalifa View",
					hostImg: "./assets/images/avatar/1.jpg",
					imageUrl: "https://a1.muscache.com/im/pictures/91562257/7b53642b_original.jpg?aki_policy=xx_large",
					description: "Hotel Studio Apartment with Burj Khalifa View, Very Spacious, Fully Furnished with Fully equip kitchen. Free Facilities like Gym, Swimming Pool, Steam, Sauna, Jacuzzi. Property have All day Cafe, Multi Cuisine Restaurant with room service.",
					price: "1106",
					num_guests: 2
				},
				{
					title: "Fairmont Residence Palm Jumeirah!!",
					hostImg: "./assets/images/avatar/2.jpg",
					imageUrl: "https://a2.muscache.com/im/pictures/70389640/6c3a71c1_original.jpg?aki_policy=xx_large",
					description: "Apartment with direct access to the beach! With most hotel facilities!",
					price: "1469",
					num_guests:  4
				},
				{
					title: "Fully Funished Studio Apartment1",
					hostImg: "./assets/images/avatar/3.jpg",
					imageUrl: "https://a2.muscache.com/im/pictures/991ce7c5-5746-4a7b-ba44-61f169f93d21.jpg?aki_policy=xx_large",
					description: "Beautiful Studio with free wifi (100 Mb/s) speed, 5 minutes drive to Internet City & Media City, daily free housekeeping service, access to Gym & Pool, free parking, no hidden cost, 24/7 reception desk. close to Metro station & good attractions.",
					price: "685",
					num_guests: 2
				},
				{
					title: "Full 1 Bedroom Flat Downtown Dubai",
					hostImg: "./assets/images/avatar/4.jpg",
					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
					description: "https://a2.muscache.com/im/pictures/93965442/0145c475_original.jpg?aki_policy=xx_large",
					price: "829",
					num_guests: 4
				},
			],
			roundtripFlights: [
				{
					outboundFlight:  {
						price: 757,
						startTime: "November 25, 2015 03:40",
						startLocation: "San Francisco, CA",
						abbr: "SF",
						destination: "Dubai",
						endTime: "07:25"
					},
					inboundFlight: {
						price: 757,
						startTime: "December 01, 2015 08:55",
						startLocation: "Dubai" ,
						abbr: "DXB",
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
				{
					outboundFlight:  {
						price: 1188,
						startTime: "November 25, 2015 03:40",
						startLocation: "Dubai",
						abbr: "DXB",
						destination: "San Francisco, CA",
						endTime: "07:25"
					},
					inboundFlight: {
						price: 1188,
						startTime: "December 01, 2015 08:55",
						startLocation: "Dubai" ,
						abbr: "SF",
						destination: "San Francisco, CA",
						endTime: "12:55"
					} 
				},
			]
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
					about: "Cozy up in our recently renovated cabin. 2 bedrooms, 2 baths and a private yard with fire pit and hot tub! Heavenly Village is a 5-minute drive. Casinos not much farther.",
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
					about: "Cozy up in our recently renovated cabin. 2 bedrooms, 2 baths and a private yard with fire pit and hot tub! Heavenly Village is a 5-minute drive. Casinos not much farther.",
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

// A Factory that returns an array of trips
// angular.module('emiratesProjectApp').factory('tripDataFactory', function(){
// 	var trips2500 = [
// 		{
// 			location: "dubai",
// 			description: "",
// 			totalPrice: "1515",
// 			imageUrl: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/1079/Dubai-48863.jpg",
// 			lodges: [
// 				{
// 					title: "Hotel Studio Apt. Burj Khalifa View",
// 					hostImg: "./assets/images/avatar/1.jpg",
// 					imageUrl: "https://a1.muscache.com/im/pictures/91562257/7b53642b_original.jpg?aki_policy=xx_large",
// 					description: "Hotel Studio Apartment with Burj Khalifa View, Very Spacious, Fully Furnished with Fully equip kitchen. Free Facilities like Gym, Swimming Pool, Steam, Sauna, Jacuzzi. Property have All day Cafe, Multi Cuisine Restaurant with room service.",
// 					price: "1106",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Fairmont Residence Palm Jumeirah!!",
// 					hostImg: "./assets/images/avatar/2.jpg",
// 					imageUrl: "https://a2.muscache.com/im/pictures/70389640/6c3a71c1_original.jpg?aki_policy=xx_large",
// 					description: "Apartment with direct access to the beach! With most hotel facilities!",
// 					price: "1469",
// 					num_guests:  4
// 				},
// 				{
// 					title: "Fully Funished Studio Apartment1",
// 					hostImg: "./assets/images/avatar/3.jpg",
// 					imageUrl: "https://a2.muscache.com/im/pictures/991ce7c5-5746-4a7b-ba44-61f169f93d21.jpg?aki_policy=xx_large",
// 					description: "Beautiful Studio with free wifi (100 Mb/s) speed, 5 minutes drive to Internet City & Media City, daily free housekeeping service, access to Gym & Pool, free parking, no hidden cost, 24/7 reception desk. close to Metro station & good attractions.",
// 					price: "685",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Full 1 Bedroom Flat Downtown Dubai",
// 					hostImg: "./assets/images/avatar/4.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "https://a2.muscache.com/im/pictures/93965442/0145c475_original.jpg?aki_policy=xx_large",
// 					price: "829",
// 					num_guests: 4
// 				},
// 			],
// 			roundtripFlights: [
// 				{
// 					outboundFlight:  {
// 						price: 757,
// 						startTime: "November 25, 2015 03:40",
// 						startLocation: "San Francisco, CA",
// 						abbr: "SF",
// 						destination: "Dubai",
// 						endTime: "07:25"
// 					},
// 					inboundFlight: {
// 						price: 757,
// 						startTime: "December 01, 2015 08:55",
// 						startLocation: "Dubai" ,
// 						abbr: "DXB",
// 						destination: "San Francisco, CA",
// 						endTime: "12:55"
// 					} 
// 				},
// 				{
// 					outboundFlight:  {
// 						price: 1188,
// 						startTime: "November 25, 2015 03:40",
// 						startLocation: "Dubai",
// 						abbr: "DXB",
// 						destination: "San Francisco, CA",
// 						endTime: "07:25"
// 					},
// 					inboundFlight: {
// 						price: 1188,
// 						startTime: "December 01, 2015 08:55",
// 						startLocation: "Dubai" ,
// 						abbr: "SF",
// 						destination: "San Francisco, CA",
// 						endTime: "12:55"
// 					} 
// 				},
// 			]
// 		},
// 		{
// 			location: "Beijing",
// 			description: "",
// 			totalPrice: "1515",
// 			imageUrl: "http://www.conquerthewallmarathon.com/wp-content/uploads/2014/05/afternoon-beijing-china.jpg",
// 			lodges: [
// 				{
// 					title: "Bright Hotel Style room",
// 					hostImg: "./assets/images/avatar/1.jpg",
// 					imageUrl: "https://a0.muscache.com/im/pictures/109050986/e0a7c38e_original.jpg?aki_policy=xx_large",
// 					description: "Hope you can treat it as your house. I love the outside view most through the window.You can cook and take a rest at balcony. This room is in the area most Beijinger lived who worked in inner city,so the traffic is quiet good.",
// 					price: "246",
// 					num_guests: 2
// 				},
// 				{
// 					title: "A Place You Can Call It Home",
// 					hostImg: "./assets/images/avatar/2.jpg",
// 					imageUrl: "https://a1.muscache.com/im/pictures/69533371/90d666be_original.jpg?aki_policy=xx_large",
// 					description: "I hope to provide a place you can call it HOME, not only a place to stay. Wish your trip starts with joyful memories with us. Small private bedroom with VPN enabled Internet. For travelers that need tourist visa, please reach me for help.",
// 					price: "194",
// 					num_guests:  2
// 				},
// 				{
// 					title: "Sanlitun Embassy Bed+Bath+Balcony",
// 					hostImg: "./assets/images/avatar/3.jpg",
// 					imageUrl: "https://a1.muscache.com/im/pictures/17693924/a40a2f52_original.jpg?aki_policy=xx_large",
// 					description: "Our Japanese style 3 level home in a quiet garden is unique in Beijing. Large comfy room and bed to private balcony. Private 2-room downstairs bathroom or use the 2/F bathroom. Near transport, restaurants, mall and shops. Freegym, air-con, swim pool, bicycles, local knowledge and friendship.",
// 					price: "262",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Sofabed besides Peking University",
// 					hostImg: "./assets/images/avatar/4.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "https://a1.muscache.com/im/pictures/97360760/aeb7a94e_original.jpg?aki_policy=xx_large",
// 					price: "84",
// 					num_guests: 1
// 				},
// 			],
// 			roundtripFlights: [
// 				{
// 					outboundFlight:  {
// 						price: 690,
// 						startTime: "November 25, 2015 03:40",
// 						startLocation: "San Francisco, CA",
// 						destination: "Beijing",
// 						endTime: "02:45"
// 					},
// 					inboundFlight: {
// 						price: 690,
// 						startTime: "December 01, 2015 11:05",
// 						startLocation: "Beijing" ,
// 						destination: "San Francisco, CA",
// 						endTime: "12:55"
// 					} 
// 				},
// 				{
// 					outboundFlight:  {
// 						price: 691,
// 						startTime: "November 25, 2015 03:40",
// 						startLocation: "San Francisco, CA",
// 						destination: "Beijing",
// 						endTime: "10:30"
// 					},
// 					inboundFlight: {
// 						price: 800,
// 						startTime: "December 01, 2015 11:05",
// 						startLocation: "Beijing" ,
// 						destination: "San Francisco, CA",
// 						endTime: "12:55"
// 					} 
// 				}
// 			]
// 		},
// 	]

// 	var trips5000 = [
// 		{
// 			location: "Peru",
// 			description: "A beautiful getaway in the exotic country of Peru",
// 			totalPrice: "2000",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/1.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/2.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests:  2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/3.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/4.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/1.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 			],
// 			roundtripFlights: [
// 				{
// 					outboundFlight:  {
// 						price: 800,
// 						startTime: "December 17, 2015 03:24:00",
// 						startLocation: "San Francisco, CA",
// 						destination: "",
// 						endTime: ""
// 					},
// 					inboundFlight: {
// 						price: 800,
// 						startTime: "December 17, 2015 03:24:00",
// 						startLocation: "San Francisco, CA" ,
// 						destination: "",
// 						endTime: ""
// 					} 
// 				}
// 			]
// 		},
// 		{
// 			location: "Maldives",
// 			description: "Enjoy a relaxing stay in the Maldives",
// 			totalPrice: "1500",
// 			imageUrl: "./assets/images/france.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://cdni.condenast.co.uk/646x430/a_c/ayada_cnt_25aug11_pr.jpg",
// 					description: "Maldives Beach Lodge",
// 					price: "300"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "New York City",
// 			description: "Experience the excitement of New York",
// 			totalPrice: "3000",
// 			imageUrl: "./assets/images/tahoe.jpeg",
// 			lodges: [
// 				{
// 					imageUrl: "http://www.famousnychotels.com/bpcms/ImageUpload/hotelphotos/warwickny.jpg",
// 					description: "Warwick Hotel",
// 					price: "1000"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "San Francisco",
// 			description: "Find love in the most beutiful city in the world",
// 			totalPrice: "1200",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://www.socketsite.com/wp-content/uploads/2014/03/Hotel-Mirabelle.jpg",
// 					description: "Hotel Mirabelle",
// 					price: "600"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Berlin",
// 			description: "Come experience this burgeoning center of world culture",
// 			totalPrice: "500",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "",
// 					description: "",
// 					price: "400"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Hawaii",
// 			description: "Come for fun in the sun!",
// 			totalPrice: "1700",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/U.S./876/493/aqua_hotel_hawaii.jpg",
// 					description: "Hawaii Resort",
// 					price: "700"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Japan",
// 			description: "A beautiful getaway in the exotic country of Japan",
// 			totalPrice: "3000",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://insidekyoto.smugmug.com/Kyoto-Hotels/The-Gion-House/i-WXBXWht/0/M/gion-house-3-M.jpg",
// 					description: "Ryokan Inn",
// 					price: "200"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Los Angeles",
// 			description: "Party with the stars in the City of Angels",
// 			totalPrice: "1000",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://assets.sheratonlax.com/XLGallery/md/she344ex22426.jpg",
// 					description: "Sheraton Los Angeles",
// 					price: "400"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		}
// 	]

// 	var trips8000 = [
// 		{
// 			location: "Peru",
// 			description: "A beautiful getaway in the exotic country of Peru",
// 			totalPrice: "2000",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/1.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/2.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests:  2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/3.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/4.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 				{
// 					title: "Ocean view apartment",
// 					hostImg: "./assets/images/avatar/1.jpg",
// 					imageUrl: "http://media-cdn.tripadvisor.com/media/photo-o/08/27/95/9a/belmond-sanctuary-lodge.jpg",
// 					description: "Blemond Sanctuary Lodge",
// 					price: "500",
// 					num_guests: 2
// 				},
// 			],
// 			roundtripFlights: [
// 				{
// 					outboundFlight:  {
// 						price: 800,
// 						startTime: "December 17, 2015 03:24:00",
// 						startLocation: "San Francisco, CA",
// 						destination: "",
// 						endTime: ""
// 					},
// 					inboundFlight: {
// 						price: 800,
// 						startTime: "December 17, 2015 03:24:00",
// 						startLocation: "San Francisco, CA" ,
// 						destination: "",
// 						endTime: ""
// 					} 
// 				}
// 			]
// 		},
// 		{
// 			location: "Maldives",
// 			description: "Enjoy a relaxing stay in the Maldives",
// 			totalPrice: "1500",
// 			imageUrl: "./assets/images/france.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://cdni.condenast.co.uk/646x430/a_c/ayada_cnt_25aug11_pr.jpg",
// 					description: "Maldives Beach Lodge",
// 					price: "300"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "New York City",
// 			description: "Experience the excitement of New York",
// 			totalPrice: "3000",
// 			imageUrl: "./assets/images/tahoe.jpeg",
// 			lodges: [
// 				{
// 					imageUrl: "http://www.famousnychotels.com/bpcms/ImageUpload/hotelphotos/warwickny.jpg",
// 					description: "Warwick Hotel",
// 					price: "1000"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "San Francisco",
// 			description: "Find love in the most beutiful city in the world",
// 			totalPrice: "1200",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://www.socketsite.com/wp-content/uploads/2014/03/Hotel-Mirabelle.jpg",
// 					description: "Hotel Mirabelle",
// 					price: "600"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Berlin",
// 			description: "Come experience this burgeoning center of world culture",
// 			totalPrice: "500",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "",
// 					description: "",
// 					price: "400"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Hawaii",
// 			description: "Come for fun in the sun!",
// 			totalPrice: "1700",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/U.S./876/493/aqua_hotel_hawaii.jpg",
// 					description: "Hawaii Resort",
// 					price: "700"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Japan",
// 			description: "A beautiful getaway in the exotic country of Japan",
// 			totalPrice: "3000",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://insidekyoto.smugmug.com/Kyoto-Hotels/The-Gion-House/i-WXBXWht/0/M/gion-house-3-M.jpg",
// 					description: "Ryokan Inn",
// 					price: "200"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		},
// 		{
// 			location: "Los Angeles",
// 			description: "Party with the stars in the City of Angels",
// 			totalPrice: "1000",
// 			imageUrl: "./assets/images/dubai.jpg",
// 			lodges: [
// 				{
// 					imageUrl: "http://assets.sheratonlax.com/XLGallery/md/she344ex22426.jpg",
// 					description: "Sheraton Los Angeles",
// 					price: "400"
// 				}
// 			],
// 			flight: {
// 				departureDate: new Date(),
// 				arrivalDate: new Date(),
// 				returnDepartureDate: new Date().setDate(new Date().getDate() + 7),
// 				returnArrivalDate: new Date().setDate(new Date().getDate() + 7)
// 			}
// 		}
// 	]

// 	var trips = trips2500;
// 	return trips;
// });