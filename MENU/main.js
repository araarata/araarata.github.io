function visibleFunc() {
	document.querySelector('.ul2').classList.toggle('ul22')
}

function refreshFunc() {
	let indo = '';
	for(i=0;i<mass;i++){
		indo += `<li><input type="text"></li>`;
	}
	document.getElementById('ul1').innerHTML = indo;
	console.log(el)
	
}

function refreshAllFunc() {
	for (i = 0; i < massive.length; i++) {
		mas[i] = massive[i];
	}
	console.log(mas)
}
var schet = 0;

function numberFunc() {
	let n = -1;
	let m = mas.length;
	let a = Math.floor(Math.random() * (n - m + 1)) + m;
	el = a;
	document.querySelector('#h1').innerHTML = mas[a].name;
	mass = mas[a].ingridiens.length;
	var ing = '';
	for(i=0;i<mas[a].ingridiens.length;i++){
		ing += `<li>${mas[a].ingridiens[i]}</li>`
	}
	document.querySelector('.ul2').innerHTML = ing;
	schet += 1;
	document.getElementById('h2').innerHTML = schet;

	let ind = '';
	for(i=0;i<mas[a].ingridiens.length;i++){
		ind += `<li><input type="text"></li>`;
	}
	document.getElementById('ul1').innerHTML = ind;

	document.querySelector('.image').innerHTML = `<img src="img/${mas[a].img}" alt="">`

	mas.splice(a, 1)
	if (mas.length==0){
		for (i = 0; i < massive.length; i++) {
			mas[i] = massive[i];
		}
		schet = 0;
		document.getElementById('h2').innerHTML = schet;
		alert('конец')
	}

	
	console.log(mass)
	console.log(mas[el].ingridiens)
	console.log(el)
	console.log(a)
}

var massive = [
	{
		index: "salat",
		img: '1.png',
		name: "тёплый салат с кальмаром",
		ingridiens: [
			"кальмар", "микс салата", "печенный картофель бэйби", "черри", "лимон", "грецкий орех", "стручковая фасоль", "медовое песто"
		]
	},
	{
		index: "salat",
		img: '2.png',
		name: "салат с лососем и авокадо",
		ingridiens: [
			"аводкадо", "лосось домашнего посола",
			"свежий огурец", "табаджан", "икра мойвы", "кунжутное масло", "соус на самодельном", "помидоры канкасе", "печеная паприка"
		]
	},
	{
		index: "salat",
		img: '3.png',
		name: "Витаминк ",
		ingridiens: ["подквашенная капуста на брусничном соке", "редька", "сельдерей", "мед", "ягоды брусники", "кубанское масло", "зелёное яблоко", "крымский лук", "грецкий орех", "тыквенные семечки"
		]
	},
	{
		index: "salat",
		img: '4.png',
		name: "салат с ростбифом",
		ingridiens: ["салат айсберг", "ромейн", "огурцы", "ростбиф", "соус на самодельном майонезе с имбирём", "посыпается слайсами мендаля", "томаты черри"
		]
	},
	{
		index: "salat",
		img: '5.png',
		name: "спелые томаты с брынзой",
		ingridiens: ["спелые томаты", "огурцы", "красныц болгарский перец", "фермерская брынза, обваленная в прованских травах", "маслины", "украшается крымским луком и базиликом", "заправка-самодельный томатно-базиликовый соус на основе оливкового масла"
		]
	},
	{
		index: "salat",
		img: '6.png',
		name: "спелые томаты с козьим сыром",
		ingridiens: ["спелые томаты", "козий сыр", "укроп", "петрушка", "кинза", "зелёный лук", "тыквенные семечки", "заправка оливковое и тыквенное масла", "бальзамический крем"
		]
	},
	{
		index: "salat",
		img: '8.png',
		name: "салат с яйцом пашот",
		ingridiens: ["перец", "огурец", "томаты", "лук красный", "семечки жаренные подсолнуха", "сметаной заправляется", "украшается листьями шпината", "добавляется яйцо пашот"
		]
	},
	{
		index: "salat",
		img: '9.png',
		name: "деревенский на углях с курицей или креветками",
		ingridiens: ["курица или креветки запеченные на углях", "ромейн", "слайсы пшеничного багета", "перепелинное яйцо", "черри", "пармезан", "подается в свежеиспеченном хлебе", "заправка- самодельный майонез", "анчоусы", " каперсы", "пармезан", "чеснок", "яйцо", "зернистая горчика", "оливковое и подсолнечное масло"
		]
	},
	{
		index: "salat",
		img: '7.png',
		name: "праздничный с домашней бужениной, с лососем",
		ingridiens: ["на выбор домашняя буженина или лосось собственного посола", "печеный картофель и морковь", "горошек", "соленые и свежие огурцы", "украшается перепелинным яцом", "красной икрой", "зеленым луком", "укропом", "петрушкой", "заправка-самодельный майонез", "подается с луковым хлебом"
		]
	},
	{
		index: "salat",
		img: '10.png',
		name: "нежная мимоза",
		ingridiens: ["12 слоев из красной рыбы", "печеный картофель и морковь", "сыр", "отварные яйца", "зеленый лук", "заправка самодельный майонез"
		]
	},
	{
		index: "salat",
		img: '11.png',
		name: "мурманская треска с картошкой",
		ingridiens: ["нежная печень мурманской трески", "печеный картофель в мундире", "отварное яйцо", "соленый огурец", "красный лук", "заправка-соус тар-тар", "сметана", "домашний майонез", "хрен", "чеснок", "маринованные огурцы", "укроп", "петрушка"
		]
	}
	// {
	// 	index: "salat",
	// 	img: '10.png',
	// 	name: "",
	// 	ingridiens: [
	// 	]
	// },
]



var mas = [];
var el = 0;

for (i = 0; i < massive.length; i++) {
	mas[i] = massive[i];
}
var mass = 0;

