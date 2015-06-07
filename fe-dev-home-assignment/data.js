var hotels = [
		{
			"name" : "Jiva Beach Resort",
			"facilities" : ["Free Wifi", "Concierge", "Tennis Court", "Room Service", "Gym", "Golf", "Free Parking",  "Restaurant", "Sauna"],
			"rooms" : [
			 	{
			 		"name" : "Basic 2 Bed",
			 		"occupancy" : 2,
			 		"quantity" : 5,
			 		"price" : 88.99	
		 		},
			 	{	
			 		"name" : "Basic Family Room",
			 		"occupancy" : 4,
			 		"quantity" : 5,
			 		"price" : 98.99
		 		},
			 	{	
			 		"name" : "Deluxe 2 Bed",
			 		"occupancy" : 2,
			 		"quantity" : 5,
			 		"price" : 109.99
		 		},
			 	{			
			 		"name" : "Deluxe Family Room",
			 		"occupancy" : 7,
			 		"quantity" : 5,
			 		"price" :112.99
		 		},		 		
			 	{	
			 		"name" : "Bridal Suite",
			 		"occupancy" : 2,
			 		"quantity" : 5,
			 		"price" : 167.99			 		
		 		},
			 	{		
			 		"name" : "President Suite",
			 		"occupancy" : 2,
			 		"price" : 301.99,
			 		"quantity" : 5
		 		},		 		
			 	{	
			 		"name" : "One+One",
			 		"occupancy" : 2,
			 		"price" : 78.99,
			 		"quantity" : 5
		 		},
		 		{	
			 		"name" : "Single Room",
			 		"occupancy" : 1,
			 		"price" : 28.99,
			 		"quantity" : 5
		 		},
			 	{	
			 		"name" : "Queen Room",
			 		"occupancy" : 2,
			 		"price" : 99.99,
			 		"quantity" : 5
		 		},		 		
			 	{	
			 		"name" : "Basement 1 Bed",
			 		"occupancy" : 2,
			 		"price" : 9.99,
			 		"quantity" : 5
		 		},
			 	{	
			 		"name" : "Mega XL Suite",
			 		"occupancy" : 9,
			 		"price" : 412.99,
			 		"quantity" : 5
		 		}		 		
		 	],
			"images" : [1, 2, 3, 4, 5, 6, 7, 8 , 9 ,10, 11, 12, 13, 14],			
			"reviews" : [
				{
					"sender" : "Malcolm Reynolds",
					"score" : 5,
					"review" : "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl."
				},
				{
					"sender" : "Zoe Washburne",
					"score" : 8,
					"review" : "Duis ac nisi id lorem rhoncus tempus eu sit amet nisi. Aenean ultrices congue ligula, ac molestie velit ultricies a. Nulla ac nunc et nisi placerat interdum sit amet ut erat. Integer vulputate nulla id orci cursus, eget ullamcorper justo ultricies. Nulla lorem dui, euismod non porttitor eu, sagittis in lacus. In suscipit lectus non viverra luctus. Pellentesque egestas, dolor at luctus eleifend, velit dui viverra risus, ac rutrum sapien ante at massa. Donec imperdiet consequat laoreet."
				},
				{
					"sender" : "Hoban Washburne",
					"score" : 3,
					"review" : "Etiam posuere, magna sit amet ullamcorper auctor, odio urna tempor velit, sit amet tincidunt lorem diam a velit. Integer a dapibus nunc. In iaculis vel sem ut gravida."
				},
				{
					"sender" : "Inara Serra",
					"score" : 10,
					"review" : "Etiam condimentum sodales dui in vestibulum. Vivamus euismod egestas porttitor. Proin dictum tempor euismod. Suspendisse elit nulla, elementum eu ornare in, tempus in massa. Proin elit sem, posuere nec tempor eget, suscipit sit amet dui. Aliquam in vehicula lorem. Praesent vitae vestibulum ante, nec vestibulum metus. Morbi commodo diam in leo semper ornare. Phasellus et diam magna."
				},
				{
					"sender" : "Jayne Cobb",
					"score" : 9,
					"review" : "Maecenas cursus ut erat vitae vestibulum. Fusce feugiat dignissim augue consequat condimentum. Donec risus felis, ultricies a velit sed, varius ullamcorper enim. Suspendisse ultrices non tortor non lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				},
				{
					"sender" : "Kaylee Frye",
					"score" : 4,
					"review" : "Donec adipiscing lacus sed neque cursus ullamcorper. Vestibulum tellus lectus, molestie vitae augue et, egestas convallis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec porttitor mi vitae mauris aliquam, non accumsan odio tincidunt. Aliquam semper enim quam, ac cursus lectus dignissim vitae. Suspendisse nec rutrum ligula."
				},
				{
					"sender" : "Simon Tam",
					"score" : 7,
					"review" : "Nullam et leo placerat lectus fringilla varius vel a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh eros, blandit at aliquam eu, ullamcorper eu diam. Etiam id viverra lacus, rutrum suscipit nulla. Maecenas adipiscing, mi sit amet iaculis congue, urna massa vestibulum tortor, a tempus nibh tortor id dui."
				},
				{
					"sender" : "River Tam",
					"score" : 2,
					"review" : "Maecenas semper, orci eget cursus aliquam, orci tellus sodales urna, nec varius nisi arcu gravida velit. Proin ultrices egestas nunc, eget dapibus erat sollicitudin in. Fusce fermentum dignissim ipsum sollicitudin tincidunt. Aliquam erat volutpat. Suspendisse in ornare ante."
				},
				{
					"sender" : "Derrial Book",
					"score" : 10,
					"review" : "Nullam purus ante, rhoncus ac malesuada at, bibendum nec urna. Cras lobortis viverra feugiat. Praesent sapien elit, sagittis vel orci sed, congue consequat nulla."
				},
				{
					"sender" : "Sheriff Bourne",
					"score" : 9,
					"review" : "Donec malesuada semper lectus sed sagittis. Sed laoreet consectetur tortor, ac tempus ipsum malesuada non. Aenean dapibus leo sed sapien rhoncus, at dapibus ligula porta. Morbi tincidunt, urna eget ullamcorper aliquam, augue lectus placerat orci, tristique aliquet ipsum nisi id orci. Nulla vulputate lectus justo, eu dapibus lectus sodales ac. Donec volutpat nibh mi. Proin eu justo vitae dolor accumsan ultrices vel non ante."
				},
				{
					"sender" : "Lawrence Dobson",
					"score" : 3,
					"review" : "Sed consectetur, lorem vitae laoreet tempus, neque elit fringilla nisl, nec tempus urna quam eu nulla. Nunc tempor nec magna vel viverra. In dapibus aliquam velit, ut malesuada nibh ornare eget. Suspendisse in risus posuere, hendrerit odio id, tincidunt lacus. Nunc fermentum metus sit amet mauris pellentesque, vitae sollicitudin dui facilisis. Etiam at velit id dolor rhoncus porttitor. Vestibulum quis blandit felis."
				},																
				{
					"sender" : "Jubal Early",
					"score" : 7,
					"review" : "Etiam condimentum sodales dui in vestibulum. Vivamus euismod egestas porttitor. Proin dictum tempor euismod. Suspendisse elit nulla, elementum eu ornare in, tempus in massa. Proin elit sem, posuere nec tempor eget, suscipit sit amet dui. Aliquam in vehicula lorem. Praesent vitae vestibulum ante, nec vestibulum metus. Morbi commodo diam in leo semper ornare. Phasellus et diam magna."
				},	
				{
					"sender" : "Fanty and morningo",
					"score" : 8,
					"review" : "Phasellus venenatis tortor ac lectus dapibus, sit amet pellentesque turpis mollis. Nam laoreet magna non leo facilisis auctor. Fusce neque augue, lobortis eget orci vel, lobortis porta lectus. Fusce venenatis, metus quis accumsan auctor, ipsum lectus volutpat tellus, viverra vulputate risus dolor porta lacus"
				},	
				{
					"sender" : "Stitch Hessian",
					"score" : 1,
					"review" : "Sed molestie ipsum ac diam feugiat tempus. Donec sed mi tortor. Donec dolor augue, tincidunt sed dignissim ac, congue ac sapien. Morbi molestie nibh eget neque rutrum tincidunt. Quisque adipiscing pulvinar massa eu laoreet. Aenean ipsum nisl, convallis eget tortor nec, convallis consequat tellus."
				},
				{
					"sender" : "Fess Higgins",
					"score" : 10,
					"review" : "Etiam porttitor ut massa sit amet pellentesque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur facilisis commodo nulla ut laoreet. Integer vel felis sit amet dolor sollicitudin gravida. Nam quis congue lorem. Aenean quis purus leo. Nunc iaculis enim odio, eu feugiat augue porta sit amet. Fusce quis commodo nisl. Nunc laoreet leo vel egestas volutpat. Suspendisse et cursus leo."
				},
				{
					"sender" : "Magistscore Higgins",
					"score" : 9,
					"review" : "Nunc vel suscipit mi. Morbi semper diam urna, sit amet elementum turpis egestas nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer aliquet mi at dui blandit accumsan. Aliquam laoreet enim vel volutpat fermentum. Etiam feugiat arcu mi, sed blandit magna dictum vitae. Ut tristique id nunc ut molestie. Curabitur et augue rhoncus, consectetur mauris vel, laoreet sapien."
				},
				{
					"sender" : "Dr. Mathias",
					"score" : 6,
					"review" : "Mauris in ligula quis orci auctor blandit. Maecenas venenatis quis mi vitae sagittis. Sed tincidunt laoreet mi nec ullamcorper. Pellentesque elementum ut lacus ac iaculis. Sed suscipit ipsum ut bibendum ullamcorper. Cras ac est risus. Praesent in risus velit. Donec placerat hendrerit nibh vitae auctor."
				},
				{
					"sender" : "Adelei Niska",
					"score" : 8,
					"review" : "Sed ut ipsum in tellus tristique venenatis quis sit amet nibh. Phasellus pretium eget est ac consequat. Vivamus accumsan semper dui, nec vestibulum mauris rutrum sollicitudin. Mauris quis lorem fermentum, dignissim eros faucibus, tempor justo. Donec nec interdum risus."
				},				
				{
					"sender" : "Tracey Smith",
					"score" : 9,
					"review" : "Sed felis erat, laoreet vitae tincidunt non, interdum et elit. Nunc sit amet malesuada lorem. Suspendisse sagittis nulla quis elit pulvinar accumsan. Sed massa nibh, consequat ut mi in, consectetur pharetra nisl. Proin adipiscing semper quam, eget vestibulum risus pharetra ut. Ut sed elit neque."
				},
				{
					"sender" : "Atherton Wing",
					"score" : 4,
					"review" : "Nam sit amet elit in nibh faucibus bibendum sed quis metus. Vivamus aliquam orci sed porta rhoncus. Mauris aliquam purus ut gravida gravida. Mauris sit amet quam enim. Aenean fringilla sed ligula luctus adipiscing. Donec ac augue tortor. In ultricies luctus nulla."
				},
				{
					"sender" : "Monty",
					"score" : 3,
					"review" : "Mauris id adipiscing justo, eget volutpat mauris. Sed lorem ligula, fermentum at interdum eu, pulvinar vel felis. Aliquam malesuada eros augue, at sollicitudin urna accumsan ultrices."
				},
				{
					"sender" : "Lenore",
					"score" : 6,
					"review" : "Sed urna est, sagittis eu ligula sit amet, pellentesque lacinia velit. Sed imperdiet enim non risus bibendum semper. Curabitur gravida consequat magna, nec lobortis elit pretium nec. Morbi eget lacus eget ipsum vehicula pharetra. Donec vehicula aliquam euismod. Nulla facilisi. Donec non est nec eros volutpat placerat in et massa."
				},
				{
					"sender" : "Mr. Universe",
					"score" : 2,
					"review" : "Aliquam scelerisque ullamcorper vehicula. Aenean ut aliquam mi, nec faucibus tortor. Aliquam erat volutpat. Pellentesque et pellentesque mi. Aenean sem neque, cursus lacinia lectus in, egestas aliquet lorem. Sed aliquam, dolor in hendrerit fringilla, dui arcu pulvinar orci, non suscipit urna nibh id odio."
				},	
				{
					"sender" : "Sir Warwick Harrow",
					"score" : 8,
					"review" : "Morbi vel nisi vel nibh rhoncus vestibulum non sagittis nisl. Curabitur varius dolor massa, ut pulvinar mauris blandit a. Phasellus vestibulum arcu turpis, ut consequat risus sagittis ut. Proin non elit sit amet magna lacinia molestie. Sed eget vulputate augue. In hac habitasse platea dictumst. Cras imperdiet leo nec ante dapibus, in mollis risus interdum. Nullam pharetra nibh eu diam tempus, eget lobortis metus vulputate."
				},	
				{
					"sender" : "Simon Tam",
					"score" : 9,
					"review" : "Curabitur quis augue cursus, cursus massa ac, dapibus magna. Curabitur non sapien vel lorem pellentesque rhoncus. Nam sagittis, metus aliquet malesuada egestas, leo purus cursus turpis, tempor pharetra tellus nibh posuere turpis. Cras viverra, nisi eget ornare suscipit, erat velit facilisis elit, quis interdum justo magna a tortor. Donec condimentum quam id felis sollicitudin porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus"
				},									
				{
					"sender" : "Dr. Caron",
					"score" : 10,
					"review" : "Quisque eros sapien, tempus vel ullamcorper nec, faucibus eget ante. Curabitur vel velit ac libero tempus fringilla in dignissim ligula. Integer eget laoreet ligula, eget ultricies ligula. Donec convallis augue a dolor sagittis feugiat. Aliquam adipiscing, ipsum eget pulvinar pulvinar, elit nisl vestibulum ligula, id interdum felis sem quis mi. Sed vel leo nisl. Sed consequat pharetra diam, vitae ultrices augue varius ac."
				},		
				{
					"sender" : "Bridget",
					"score" : 8,
					"review" : "Etiam elementum at est sit amet sagittis. Curabitur euismod tellus leo, vitae porta justo ultricies vitae. Aliquam posuere nunc sit amet mauris interdum lacinia"
				},		
				{
					"sender" : "Bester",
					"score" : 7,
					"review" : "Uspendisse mollis leo et nisl laoreet, a molestie justo consectetur. Aliquam et leo vulputate, tincidunt massa vel, volutpat leo. Suspendisse potenti."
				},														
				{
					"sender" : "Badger",
					"score" : 8,
					"review" : "non convallis enim porttitor. Nulla ut fermentum sem. Aliquam tincidunt, dui malesuada venenatis pulvinar, justo tellus tempus nulla, sit amet pretium orci metus sed purus. Phasellus lobortis cursus lacus vitae volutpat. Nulla at velit ut orci varius placerat. Aenean est elit, adipiscing et nunc varius, accumsan tempus magna. Donec consectetur orci nec mattis hendrerit."
				},				
			],
			"description" : "<p>Located in the heart of Paris, this 5-star hotel offers elegant guest rooms in a Hausmannian-style building. It features a fitness centre, a concierge and a tour desk with ticket service.</p><p>Decorated in a unique style, the air-conditioned guest rooms at the Hotel du Louvre are equipped with satellite TV, a minibar and free Wi-Fi access. Some rooms feature a seating area. All rooms have a private bathroom, some include marble features.</p><p>The hotel restaurant, Brasserie du Louvre, has a traditional Parisian decor and serves traditional French cuisine. A buffet breakfast is served every morning. Guests can also enjoy a cocktail and jazz evenings twice a week in the Defender Bar.</p><p>The 4 facades and terrace of this hotel overlook the famous Louvre Museum, the Op�ra Garnier and the Com�die Fran�aise theatre.</p><p>Hotel du Louvre is situated 2 minutes from Palais Royal Metro Station, providing direct access to the Champs Elysees and the Place de la Bastille. Public parking is available nearby.</p>"
		
}
];