const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const {Keyboard} = require("vk-io");
const donate_key = 'ключ автодоната';
const request = require('prequest');
const kazna = require('./base/kazna.json');
let user = new VK();
user.setOptions({
	token: '97d7e034a02e7fe27cd8d50c7b45f5e75ced2c119c79b720e0bbc8f903b667debc0462e39fe7645d6685c' // token ot страницы ( не обязательно )
});
let giving = false;
const cars = [
	{
		name: 'Ferrari Enzo V5',
		cost: 1000000,
		id: 1
	},
	{
		name: 'Bugatti Chiron',
		cost: 2200000,
		id: 2
	},
	{
		name: 'McLaren F1',
		cost: 30000000,
		id: 3
	},
	{
		name: 'Lamborghini Avendator',
		cost: 41000000,
		id: 4
	},
	{
		name: 'SSC Tuatara',
		cost: 59000000,
		id: 5
	},
	{
		name: 'Bugatti Veryon',
		cost: 80000000,
		id: 6
	},
	{
		name: 'Лада Нива',
		cost: 100000000,
		id: 7
	},
	{
		name: 'Лада Калина',
		cost: 300000000,
		id: 8
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const stranas = [

	{
		name: 'Не указана',
		cost: 0,
		id: 1
    },
	{
		name: '🇺🇸США',
		cost: 0,
		id: 2
    },

	{
		name: '🇷🇺Россия',
		cost: 0,
		id: 3
    },

	{
		name: '🇰🇷Япония',
		cost: 0,
		id: 4
    },

	{
		name: '🇺🇦Украина',
		cost: 0,
		id: 5
    },
	{
		name: '🇰🇿Казахстан',
		cost: 0,
		id: 6
    },
	{
		name: '🇧🇾Белоруссия',
		cost: 0,
		id: 7
    }
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
		{
		name: 'Коттедж Медведева',
		cost: 4500000,
		id: 1
	},
	{
		name: 'Особняк Порошенко',
		cost: 7250000 ,
		id: 2
	},
	{
		name: 'Дом на Рублёвке',
		cost: 10000000,
		id: 3
	},
	{
		name: 'Личный небоскрёб Tramp',
		cost: 15000000,
		id: 4
	},
	{
		name: 'Остров с особняком',
		cost: 19500000,
		id: 5
	},
	{
		name: 'Белый дом Путина',
		cost: 23000000,
		id: 6
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 2500,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 5000,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 20000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 100000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 150000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 300000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 500000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 750000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 2500000,
		id: 9
	}
];

const pets = [
	{
		name: 'Улитка',
		cost: 1000,
		id: 1
	},
	{
		name: 'Лягушка',
		cost: 25000,
		id: 2
	},
	{
		name: 'Заяц',
		cost: 500000,
		id: 3
	},
	{
		name: 'Свинья',
		cost: 300000000,
		id: 4
	},
	{
		name: 'Лиса',
		cost: 1250000000,
		id: 5
	},
	{
		name: 'Собака',
		cost: 5000000000,
		id: 6
	},
	{
		name: 'Панда',
		cost: 30000000000,
		id: 7
	},
	{
		name: 'Ястреб',
		cost: 180000000000,
		id: 8
	}
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 2500000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 60000000000,
		id: 7
	},
	{
		cost: 360000000000,
		id: 8
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	},
	{
		name: 'FM2019-BTC2000',
		cost: 1000000000,
		id: 4
	},
	{
		name: 'FM2019-BTC20000',
		cost: 10000000000,
		id: 5
	}
];

const businesses = [
	[ // Бизнес #1
		{ // Стандартный бизнес
			name: 'Шаурмечная',
			cost: 50000,
			earn: 200,
			workers: 1,
			id: 1,
			icon: '🥖'
		},

		{ // Первое улучшение
			name: '5 шаурмечных',
			cost: 350000,
			earn: 1000,
			workers: 10,
			id: 1,
			icon: '🥖'
		},

		{ // Второе улучшение
			name: 'Небольшая сеть шаурмечных',
			cost: 900000,
			earn: 2625,
			workers: 30,
			id: 1,
			icon: '🥖'
		},

		{ // 3 улучшение
			name: 'Средняя сеть шаурмечных',
			cost: 1200000,
			earn: 3750,
			workers: 50,
			id: 1,
			icon: '🥖'
		},

		{ // Последнее улучшение
			name: 'Лучшая шаурма в стране',
			cost: 4000000,
			earn: 11000,
			workers: 200,
			id: 1,
			icon: '🥖'
		}
	],

	[
		{
			name: 'Ларёк',
			cost: 100000,
			earn: 700,
			workers: 1,
			id: 2,
			icon: '🏪'
		},

		{
			name: '5 ларьков',
			cost: 500000,
			earn: 3700,
			workers: 5,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Средняя сеть ларьков',
			cost: 950000,
			earn: 7725,
			workers: 40,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки во всех городах страны',
			cost: 8000000,
			earn: 37450,
			workers: 150,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки в каждой стране',
			cost: 17500000,
			earn: 79950,
			workers: 400,
			id: 2,
			icon: '🏪'
		}
	],

	[
		{
			name: 'Забегаловка',
			cost: 300000,
			earn: 2700,
			workers: 3,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Общепит',
			cost: 450000,
			earn: 4350,
			workers: 7,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Ресторан',
			cost: 450000,
			earn: 7400,
			workers: 15,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Небольшая сеть ресторанов',
			cost: 4000000,
			earn: 19900,
			workers: 80,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Лучшие рестораны в стране',
			cost: 11000000,
			earn: 47400,
			workers: 300,
			id: 3,
			icon: '🍷'
		}
	],

	[
		{
			name: 'Мини-магазин',
			cost: 500000,
			earn: 4100,
			workers: 15,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Магазин',
			cost: 1250000,
			earn: 9350,
			workers: 10,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть магазинов',
			cost: 3000000,
			earn: 23350,
			workers: 70,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть супермаркетов',
			cost: 20000000,
			earn: 109850,
			workers: 500,
			id: 4,
			icon: '🏫'
		}
	],

	[
		{
			name: 'Завод в гараже',
			cost: 1500000,
			earn: 8800,
			workers: 5,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Средний завод',
			cost: 3500000,
			earn: 13800,
			workers: 20,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Сеть заводов',
			cost: 15000000,
			earn: 60800,
			workers: 200,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Главные заводы страны',
			cost: 50000000,
			earn: 274800,
			workers: 1000,
			id: 5,
			icon: '🏭'
		}
	],

	[
		{
			name: 'Угольная шахта',
			cost: 25000000,
			earn: 84700,
			workers: 50,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Золотая шахта',
			cost: 50000000,
			earn: 117200,
			workers: 75,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазная шахта',
			cost: 60000000,
			earn: 229700,
			workers: 200,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазный карьер',
			cost: 90000000,
			earn: 432700,
			workers: 360,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Крупнейший алмазный карьер',
			cost: 200000000,
			earn: 709700,
			workers: 700,
			id: 6,
			icon: '⛏'
		}
	],

	[
		{
			name: 'Маленький офис',
			cost: 80000000,
			earn: 229625,
			workers: 10,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Средний офис',
			cost: 240000000,
			earn: 329175,
			workers: 60,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Большой офис',
			cost: 240000000,
			earn: 614675,
			workers: 200,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Офис-небоскрёб',
			cost: 1000000000,
			earn: 1227275,
			workers: 700,
			id: 7,
			icon: '🏢'
		}
	],

	[
		{
			name: 'Любительский GameDev',
			cost: 150000000,
			earn: 302000,
			workers: 5,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'Инди GameDev',
			cost: 200000000,
			earn: 379500,
			workers: 10,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AA GameDev',
			cost: 750000000,
			earn: 1024500,
			workers: 50,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AAA GameDev',
			cost: 5000000000,
			earn: 6749500,
			workers: 500,
			id: 8,
			icon: '🕹'
		}
	],

	[
		{
			name: 'Нефтевышка',
			cost: 500000000,
			earn: 707000,
			workers: 8,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в море',
			cost: 750000000,
			earn: 1019000,
			workers: 20,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в океане',
			cost: 1250000000,
			earn: 4049000,
			workers: 50,
			id: 9,
			icon: '🏜'
		},

		{
			name: '5 нефтеплатформ в океане',
			cost: 5000000000,
			earn: 15249000,
			workers: 250,
			id: 9,
			icon: '🏜'
		}
	],

	[
		{
			name: 'Мини АЭС',
			cost: 800000000,
			earn: 1050700,
			workers: 40,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Средняя АЭС',
			cost: 1200000000,
			earn: 1496200,
			workers: 75,
			id: 10,
			icon: '💡'
		},

		{
			name: 'АЭС с 5 энергоблоками',
			cost: 4250000000,
			earn: 3088700,
			workers: 300,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Крупнейшая АЭС',
			cost: 10000000000,
			earn: 34843700,
			workers: 650,
			id: 10,
			icon: '💡'
		}
	],

	[
		{
			name: 'Apple Store',
			cost: 25000000000,
			earn: 250000000,
			workers: 75,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Магазин Apple',
			cost: 3000000000000,
			earn: 1000000000,
			workers: 150,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Центральный Apple Store',
			cost: 9000000000000,
			earn: 5000000000,
			workers: 250,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Завод Apple',
			cost: 20000000000000,
			earn: 11000000000,
			workers: 500,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 100000000000000,
			earn: 45000000000,
			workers: 1000,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 200000000000000,
			earn: 75000000000,
			workers: 1500,
			id: 11,
			icon: '🗺'
		}
	]
];
const works = [
	{
		name: 'Работник в Орифлейм',
		requiredLevel: 1,
		min: 20000,
		max: 25000,
		id: 1
	},
	{
		name: 'Программист в ITM',
		requiredLevel: 2,
		min: 37500,
		max: 40000,
		id: 2
	},
	{
		name: 'Уборщик в IT школе',
		requiredLevel: 3,
		min: 40000,
		max: 45000,
		id: 3
	},
	{
		name: 'Работник в Роскомнадзоре',
		requiredLevel: 4,
		min: 50000,
		max: 55000,
		id: 4
	},
	{
		name: 'Уборщик в Роскомнадзоре',
		requiredLevel: 5,
		min: 75000,
		max: 80000,
		id: 5
	},
	{
		name: 'Программист в Kaspersky',
		requiredLevel: 6,
		min: 90000,
		max: 94890,
		id: 6
	},
	{
		name: 'Зам.Президента IT школы',
		requiredLevel: 7,
		min: 100000,
		max: 125000,
		id: 7
	},
	{
		name: 'Президент IT школы',
		requiredLevel: 8,
		min: 125000,
		max: 135000,
		id: 8
	},
	{
		name: 'Основатель RuNet',
		requiredLevel: 9,
		min: 160000,
		max: 175000,
		id: 9
	},
	{
		name: 'Основатель DarkNet',
		requiredLevel: 10,
		min: 1600000,
		max: 1750000,
		id: 10
	},
	{
		name: 'Основатель Яндекса',
		requiredLevel: 11,
		min: 160000043534,
		max: 7501000434436,
		id: 11
	},
	{
		name: 'Основатель Google',
		requiredLevel: 12,
		min: 16000004353488,
		max: 175000043443688,
		id: 12
	}
];

const prefix = [
	{
		name: 'Нету',
		cost: 100,
		id: 1
	},
	{
		name: '💰Фортун💰',
		cost: 350,
		id: 2
	},
	{
		name: '💎Фартовый💎',
		cost: 500,
		id: 3
	},
	{
		name: '👑Мажор👑',
		cost: 750,
		id: 4
	},
	{
		name: '✨Топовая тян✨',
		cost: 50,
		id: 5
	},
	{
		name: '💰VIP💰',
		cost: 1000,
		id: 6
	},
	{
		name: '👻Призрачный👻',
		cost: 1200,
		id: 7
	},
	{
		name: '👔Джентльмен👔',
		cost: 1450,
		id: 8
	},
	{
		name: '🎅Новогодний🎅',
		cost: 1650,
		id: 9
	},
	{
		name: '🐧Пингвинутый🐧',
		cost: 1800,
		id: 10
	},
	{
		name: '🎓Всезнайка🎓',
		cost: 2050,
		id: 11
	},
	{
		name: '🌚Лучик Солнца🌝',
		cost: 2350,
		id: 12
	},
	{
		name: '🐾Котенок🐾',
		cost: 2650,
		id: 13
	},
	{
		name: '😇Боженька😇',
		cost: 5000,
		id: 14
	},
    {
		name: '|🔧|JavaScript|💻|Coder|🔧|',
		cost: 500000,
		id: 15
	}
];

/*
⚡Топер⚡
💰Фортун💰
🍷Пошляк🍷
🐫Даун🐫
💸Мажор💸
💊Депрессивный💊
💣Агро💣
🎓Всезнайка🎓
👑ЧСВ👑
👟Модник👟
⌚Деловой⌚
👔Джентльмен👔

👉ТОПОВЫЙ👈
😈Злобный😈
✨Топовая тян✨
👑Мажор👑
💎Фартовый💎
🐽Бомжик🐽
🐾Котенок🐾
🐧Пингвинутый🐧
🌚Лучик Солнца🌝
🎅Новогодний🎅
👻Призрачный👻
💰VIP💰
💉Больной💉
🍭Сладкоешка🍭*/

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}


const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

const clans = require('./clans.json');
const promo = require('./base/promo.json');
const users = require('./users.json'); 
const config = require('./settings/config.js');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('Эдик ТОП');
}, 15000);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		if(x.misc.farm === 1)
		{
			x.farm_btc += 200000;
		}

		if(x.misc.farm === 2)
		{
			x.farm_btc += 300000;
		}

		if(x.misc.farm === 3)
		{
			x.farm_btc += 500000;
		}
		if(x.misc.farm === 4)
		{
			x.farm_btc += 1000000;
		}
	});
}, 900000);

setInterval(async () => {
	users.map(user => {
		for(var i = 0; i < user.business.length; i++)
		{
			const biz = businesses[user.business[i].id - 1][user.business[i].upgrade - 1];
			user.business[i].moneys += Math.floor(biz.earn / biz.workers * user.business[i].workers)
		}
	});
}, 3600000);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp() 
{ 
users.map(user => { 
user.timers.hasWorked = false; 
user.timers.bonus = false; 
user.timers.translation = false; 
user.orcase = false; 
user.war = false; 
user.urabota = false; 
user.a_case = false; 
user.a_war = false; 
user.vivi = false; 
user.bonus_balance = false; 
user.bcase = false; 
user.timers.shaxta = false; 
user.bonus_exs = false; 
user.timers.eda = false; 
user.timers.krik = false; 
user.timers.mine = false; 
user.giverub = false; 
user.energy = 10;
user.timers.blockpay = false; 
}); 
}

function rand(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}

function check(num){
    if(num == 1) return "Открытый"
    if(num == 2) return "Закрытый"
}

function filter(text){
	var filter0 = text.replace(/(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/ig, "<LINK REMOVED>")
	var filter1 = filter0.replace(/(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.|ТЕСТЕР|Павел Дуров)/ig, '[Запрещено]')
	return filter1
}

clearTemp();


async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

async function saveKazna()
{
	require('fs').writeFileSync('./base/kazna.json', JSON.stringify(users, null, '\t'));
	return true;
}


vk.setOptions({ token: '97d7e034a02e7fe27cd8d50c7b45f5e75ced2c119c79b720e0bbc8f903b667debc0462e39fe7645d6685c', pollingGroupId:193363853 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club184670628\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club184670628\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		message.send (`[👋🏻]Привет,я игровой бот "TEAMMS|Bot".
[👾]Ты успешно прошел регистрацию,что-бы узнать мои команды введи "помощь"
`);
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
            id: message.senderId,
			uid: users.length,
			 podpis: 0,
               hei: 0,
               video: 0,
               kanal: false,
               knser: false,
               mikro: false,
               serkn: false,
               kakake: false,
			   opit: 0,
               uggg: false,
               vivi: false,
               fggg: false,
               bonus_balance: false,
               xxxkn: false,
               herkn: false,
               bcase: false,
               orcase: false,
               huikn: false,
               govkn: false,
               gerkn: false,
               gggkn: false,
               zolkn: false,
               brilkn: false,
               monit: false,
               prosm: 0,
               dizlike: 0,
               kom: 0,
               global_podpis: 0,
               huih: 0,
               cers: 0,
               name: `Имя буд канала`,
               bbbb: 0,
               monk: false,
			podarki: 10,
               kaki: false,
			cip: 0,
			his: 0,
			like: 0,
               obor: false,
            balance: 1000000,
			rubins: 0,
			bank: 0,
			diamonds: 0,
			emeralds: 0,
			verify: 0,
			pass: 0,
			coal: 0,
			a_war: false,
			iron: 0,
			uron: 0,
			war: false,
            card: 0,
            hero_id: false,
            hero_name: `Герой не выбран`,
            hero_hp: 100,
            hero_zashita: 8,
            hero_ataka: 10,
            hero_kr_udar: 4,
			gold: 0,
			btc: 0,
			farm_btc: 0,
			straik: 0,
			prefix: 1,
			energy: 10,
			pay: false,
			gold: 0,
            biz: 0,
            ruda: 0,
		    alvl: 0,
			givemyrub: false,
			stat: false,
			urabota: false,
			ymoney: 0,
            warns: 0,
            warn: 0,
			warn_p: `Нет`,
			rating: 0,
			regDate: `${date.getDate() < 10 ? [0] + (date.getDate() + 1) : date.getDate()}.${date.getMonth() < 10 ? [0] + (date.getMonth() + 1) : date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				translation: false,
				commands: false,
				clanwar: false,
				delacc: false,
				obva: false,
				blockpay: false,
				krik: false,
				mine: false,
				hasWorked: false,
				bonus: false,
			    poxod: false,
				poxod2: false,
			    shaxta: false,
            },
			tag: user_info.first_name,
			work: 0,
            sword: false,
            eda: false,
            times: false,
            call: 0,
            clan: 0,
			clans: [],
            ccard: false,
         	business: [],
			brank: 2, //ballas rank
			grank: 2, //groove rank
			bpriglos: 0,
			gpriglos: 0,
			mer:false,
			pp: 0,
			card: 0,
			seccard: 0,
			cardss: 0,
            messages: true,
            giverub: false,
            mute: false,
			message: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				strana: 1,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
			    farm_count: 0,
				pet: 0
            },
			marriage: {
				partner: 0,
				requests: [],
			},
			pet: {
				lvl: 0,
				poterl: false
			

			}
		});
	} 
	
bcase: false,

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`Executed: VK_ID: ${message.user.id} ID: ${message.user.uid} Nickname: ${message.user.tag} Message: ${message.text} `)
});

const cmd = {
	on: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.on(/^(?:eval)\s([^]+)$/i, async (message, bot) => { 
if(message.senderId !== 518008120) return; 

try { 
const result = eval(message.args[1]); 

if(typeof(result) === 'string') 
{ 
return bot(` - я выполнил: ${result}`); 
} else if(typeof(result) === 'number') 
{ 
return bot(` - я выполнил: ${result}`); 
} else { 
return bot(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`); 
} 
} catch (e) { 
console.error(e); 
return bot(`ошибка: 
${e.toString()}`); 
} 
});

cmd.on(/^(?:Страны)$/i, async (message, bot) => {
	return bot(`Список стран:

	1.❓Не указана
	2.🇺🇸США
	3.🇷🇺Россия
	4.🇰🇷Япония
	5.🇺🇦Украина
	6.🇰🇿Казахстан
	7.🇧🇾Белоруссия
	
	Для выбора страны проживания введите:Страна [номер]`);
});

cmd.on(/^(?:Страна 7)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 7;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.on(/^(?:Страна 6)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 6;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.on(/^(?:Страна 5)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 5;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.on(/^(?:Страна 4)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 4;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.on(/^(?:Страна 3)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 3;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});


cmd.on(/^(?:Страна 1)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 1;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.on(/^(?:Страна 2)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 2;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан‼`);
	}
});


/////*Ютуб*/////////////

cmd.on(/^(?:создать канал)\s?([^]+)?/i, async (message, args, bot) => {
	let user = message.user 
	let zaprets1 = message.args[1].toLowerCase();
          if(message.user.obor == false) return message.send(`${message.user.tag}, У вас нет оборудования!`);
		if(message.user.obor == true){
		if(message.user.kanal == true) return message.send(`${message.user.tag}, У вас уже есть канал!`);
		if(message.user.kanal == false){
	var zapret = /(&#4448;|вк бо т |вкботру|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|порно|botvk|ботвк|vkbot|кбот|bot vk|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
	if (zapret.test(zaprets1) == true) { 
			return message.send(`${message.user.tag}, Придумайте адекватное название канала`);
     }
	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(zaprets1)
	var lol1 = filter1.test(zaprets1)	
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) { 
		return message.send(`${message.user.tag}, Придумайте адекватное название канала`);
	}
	if(message.args[1].length > 15) return message.send(`${message.user.tag}, Максимальная длина канала 15 символов.`);
	if(user.balance < 1000000000) return message.send(`${message.user.tag} У вас не достаточно денег для создания канала, стоимость 1.000.000.000₽`);
 	user.balance -= 1000000000;
	user.name = message.args[1];
     user.kanal = true;
	return message.send(`${message.user.tag}, Вы успешно создали канал: ${message.args[1]}`);
      }
   }
});

cmd.on(/^(?:оборудование)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.obor == true) return message.send(`${message.user.tag}, У тебя уже есть оборудование!`);
		if(message.user.obor == false){
 		if(message.user.balance < 3000) return message.send(`${message.user.tag}, У вас не достаточно денег! Цена оборудования 3.000₽.`);
 		message.user.balance -= 3000;
          message.user.obor = true;
	return message.send(`${message.user.tag}, Вы успешно купили оборудование для съёмок! Вас ждёт светлое будущее`);
   }
});

	cmd.on(/^(?:канал)$/i, async (message, bot) => {

	let user = message.user
	let id = message.user.id
		if(message.user.kanal == false) return message.send(`(${message.user.tag}), У вас нет канала`);
		if(message.user.kanal == true){
		return message.send(`
         (${message.user.tag}), твой канал 🔥
       📕 Название: ${message.user.name}
	   💎 Баланс канала: ${message.user.ymoney}
       😻 Подписчиков: ${message.user.podpis}
       🚫 Хейтеров: ${message.user.hei}
       👁 Просмотров: ${message.user.prosm}
       👍 Лайков: ${message.user.like}
       👎 Дизлайков: ${message.user.dizlike}
       💬 Комментариев: ${message.user.kom}
       🎥 Роликов: ${message.user.video}
       ⛔ Страйки: ${message.user.straik}

		Кнопки:\n`+
		(message.user.serkn== false ? ` ` : `Серебрянная кнопка: Получена\n`)+
          (message.user.zolkn== false ? ` ` : `Золотая кнопка: Получена\n`)+
          (message.user.brilkn== false ? ` ` : `Бриллиантовая кнопка: Получена\n`)+
		`
			`);
			}
 		return message.send(text)
 	});

 	 	cmd.on(/^(?:Завод)$/i, async (message, bot) => {
		let user = message.user
 		let id = message.user.id
 		if(message.user.urabota == true) return message.send(`${message.user.tag}, Осталось, 5 Мин. `);
 		message.user.urabota = true
		setTimeout(() => {
			message.user.urabota = false
		}, 15000);

 		text = ' Ухх, тяжелый был денёк😃!\n💰Вы заработали: '
 		let count = rand(1,1);
 		for(i=0;i<count;i++){
 			x = rand(1,100)
 			if(x<79){
 				mon = rand(100,200)
 				if(message.user.bonus_balance == true) mon = mon * 2;
 				text += ` ${spaces(mon)}$\n`
 				message.user.ymoney += mon
 			}
 			if(x>79 && x <80){
 				mon = 1
 				text += `${spaces(mon)}$\n`
 				message.user.ymoney += mon
 			}
 			if(x>80){
 				mon = rand(1,5)
 				if(message.user.bonus_exs == true) mon = mon * 2;
 				message.user.ymoney += mon
 					text += `${mon}$\n`
 				}
 				 
 				 
 			}
 		return message.send(text)
 	});

cmd.on(/^(?:ск)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(messageuser.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(messageuser.kanal == true){
		if(messageuser.serkn == true) return message.send(`${message.user.tag},Ты уже получал кнопку!`);
		if(messageuser.serkn == false){
 		if(messageuser.podpis < 100000) return message.send(`${message.user.tag}, У вас не достаточно подписчиков. Нужно 100000`);

     message.user.serkn = true;
	return message.send(`${message.user.tag}, Вы получили серебрянную кнопку.`);
     }
   }
});

cmd.on(/^(?:получить зк)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.zolkn == true) return message.send(`${message.user.tag}, Ты уже получал кнопку!`);
		if(message.user.zolkn == false){
 		if(message.user.podpis < 1000000) return message.send(`${message.user.tag}, У вас не достаточно подписчиков. Нужно 1 миллион`);

     message.user.zolkn = true;
	return message.send(`${message.user.tag}, Вы получили золотую кнопку.`);
     }
   }
});
user.orcase = false; 
user.urabota = false; 
user.a_case = false;
cmd.on(/^(?:получить бк)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.message.user.brilkn == true) return message.send(`${message.user.tag}, Ты уже получал кнопку!`);
		if(message.user.brilkn == false){
 		if(message.user.podpis < 10000000) return message.send(`${message.user.tag}, У вас не достаточно подписчиков. Нужно 10 миллионов`);

     message.user.brilkn = true;
	return message.send(`${message.user.tag}, Вы получили брилиантовую кнопку.`);
     }
   }
});

cmd.on(/^(?:гулять)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	if(user.vivi == true) return message.send(`${message.user.tag}, Гулять можно раз в 3 часа`);
 		user.vivi = true
		setTimeout(() => {
			user.vivi = false
			vk.api.call('messages.send', {
			peer_id: user.id,
			message: `${message.user.tag}, Вы снова можете гулять!"` 
		});
		}, 10800000);
	let rez = [1,2].random();
	if(rez == 1){
  		let text = [].random(); 
          mones = rand(1000,4000);
       	message.user.balance += mones;
		return message.send(`${message.user.tag}, Гуляя, вы нашли кошелек, в котором лежало ${spaces(mones)}₽`);
   }
	if(rez == 2){
		let text = [].random(); 
		hmones = rand(2000,4000);
       	message.user.balance -= hmones;
		return message.send(`${message.user.tag}, Гуляя на Вас напала банда хейтеров, на лечение Вы потратили: ${spaces(hmones)}₽`);
	}
});

 	 cmd.on(/^(?:стрим)$/i, async (message, bot) => {
		let user = message.user
         	if(message.user.mikro == false) return message.send(`${message.user.tag}, У вас нет микрофона, купите его командой «микрофон» без «»`);
		if(message.user.mikro == true){
 		if(message.user.a_case == true) return message.send(`${message.user.tag}, Стримить можно раз в 10 минут`); 
 		let id = message.user.id
 		message.user.a_case = true
		setTimeout(() => {
			message.user.a_case = false
		}, 600000);

 		text = ''
 		let count = rand(1,1);
 		for(i=0;i<count;i++){
 			x = rand(1,100)
 			if(x<79){
 				mon = 2 + message.user.podpis + 10
 				if(user.bonus_balance == true) mon = mon * 2;
 				text += `${message.user.tag}, Мои подписчики самые крутые😊\n💰Заработано за стрим: ${spaces(mon)}₽\n`
 				message.user.ymoney += mon
 			}
 			if(x>81 && x <82){
 				mon = 2 + message.user.podpis + 10
 				text += `${message.user.tag}, Обожаю себя!😋\n💰Заработано за стрим: ${spaces(mon)}₽\n`
 				message.user.ymoney += mon
 			}
 				 }
 				 
 		}
 		return message.send(text)
 	});

 	cmd.on(/^(?:реклама)$/i, async (message, bot) => {
	let user = message.user
	if(message.user.balance == null) return message.send(`⚠ Произошла ошибка ! Пожалуйста, сообщите в репорт.`);
	return message.send(`
    ${message.user.tag}, Хай, хочешь купить рекламу для своего канала😏?

✅Мы - самая надежная и законная компания по продаже рекламы, с нами ты достигнешь высот!

1.Тариф «Старт»:
　📈Прирост: ~1.000 сабов
　💸Цена: 15.000₽

2.Тариф «Нормал»:
　📈Прирост: ~10.000 сабов
　💸Цена: 75.000₽

3.Тариф «Про»:
　📈Прирост: ~100.000 сабов
　💸Цена: 750.000₽

4. Тариф «Мега»:
　💸Прирост: ~500.000 сабов
　💸Цена: 3.000.000₽

5. Тариф «Олд»:
　💸Прирост: ~1.000.000 сабов
　💸Цена: 30.000.000₽      

6. Тариф «Звезда»:
　💸Прирост: ~5.000.000 сабов
　💸Цена: 50.000.000₽      

6. Тариф «Астероид»:
　💸Прирост: ~50.000.000 сабов
　💸Цена: 100.000.000₽      

🔥Для покупки введите реклама «нужный вам тариф»
　📈 пиши : реклама <нужный тариф»
  Пример : рекалама мега

    `)
   });

cmd.on(/^(?:тренды)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ podpis: x.podpis, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.podpis - a.podpis;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 5; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 🎬 ${utils.sp(user.podpis) } подписчиков
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag}, у вас — 🎬 ${utils.sp(message.user.podpis)} сабов`);
});

 	cmd.on(/^(?:снять)\s?([^]+)?/i, async (message, args, bot) => {
	let user = message.user
	 let id = message.user.id
	 
	 if(message.args[1].length < 2) return message.send(`Слишком мало символов в названии видео!`);
	 if(message.args[1].length > 40) return message.send(`Слишком много символов в названии видео!`);	 
		if(message.user.kanal == false) return message.send(`У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.orcase == true) return message.send(`Снимать можно раз в 10 минут`);
 		message.user.orcase = true
		setTimeout(() => {
			message.user.orcase = false
		}, 600000);
	if(message.args[1].length > 40) return message.send(`Максимальная длина ролика 40 символов.`);
     message.user.video += 1;
     mones = 1 + message.user.podpis + 3;
 	message.user.ymoney += mones;
     likes = message.user.podpis + 2 - rand(2,5);
     message.user.like += likes;
     dizlikes = message.user.hei - rand(10,12);
     message.user.dizlike += dizlikes;
     prosm = 3 + message.user.podpis * rand(4,6);
     message.user.prosm += prosm;
     podpis = rand(10,30);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
     heit = rand(20,50);
     message.user.hei += heit;
     kom = 1 + message.user.podpis - rand(2,3);
     message.user.kom += kom;
	return message.send(`${message.user.tag}, Вы успешно отсняли ролик: ${message.args[1]}\n\n🎬Статистика ролика:\n👁 Просмотров: ${spaces(prosm)}\n👍 Лайков: ${spaces(likes)}\n👎 Дизлайков: ${spaces(dizlikes)}\n💬 Комментариев: ${spaces(kom)}\n💸 + ${spaces(mones)}$\n🎬Новых сабов: ${spaces(podpis)}\n🚫 Новых хейтеров: ${spaces(heit)}\n✅Ты на верном пути, продолжай выпускать ролики!:`);
   }
});

cmd.on(/^(?:микрофон)$/i, async (message, bot) => {
	let user = message.user 
     let id = message.user.id
	
		if(message.user.mikro == true) return message.send(`${message.user.tag}, У тебя уже есть микрофон!`);
		if(message.user.mikro == false){
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У тебя нет канала)`);
		if(message.user.kanal == true){
 		if(message.user.ymoney < 500) return message.send(`${message.user.tag}, У вас не достаточно денег цена микрофона 500₽ .`);
 		message.user.ymoney -= 500;
         message.user.mikro = true;
	return message.send(`${message.user.tag}, Вы успешно купили микрофон для стримов`);
     }
   }
});

cmd.on(/^(?:реклама старт)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
 		message.user.bcase = true
		setTimeout(() => {
			message.user.bcase = false
		}, 600000);
 		if(message.user.ymoney < 15000) return message.send(`${message.user.tag}, У вас не достаточно денег.`);
 		message.user.ymoney -= 15000;
     podpis = rand(700,900);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
	return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
   }
});

cmd.on(/^(?:реклама нормал)$/i, async (message, bot) => { 
	let user = message.user
     let id = message.user.id

		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
 		message.user.bcase = true
		setTimeout(() => {
			message.user.bcase = false
		}, 600000);
 		if(message.user.ymoney < 75000) return message.send(`${message.user.tag}, У вас не достаточно денег.`);
 	message.user.ymoney -= 75000;
     podpis = rand(1000,5000);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
	return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
   }
});

cmd.on(/^(?:реклама про)$/i, async (message, bot) => {
	let user = message.user 
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
 		message.user.bcase = true
		setTimeout(() => {
			message.user.bcase = false
		}, 600000);
 		if(message.user.ymoney < 750000) return message.send(`${message.user.tag}, У вас не достаточно денег.`);
 	message.user.ymoney -= 750000;
     podpis = rand(100000,130000);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
	return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
   }
});

cmd.on(/^(?:реклама мега)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
 		message.user.bcase = true
		setTimeout(() => {
			message.user.bcase = false
		}, 600000);
 		if(message.user.ymoney < 3000000) return message.send(`${message.user.tag}, У вас не достаточно денег.`);
 	message.user.ymoney -= 3000000;
     podpis = rand(500000,550000);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
	return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
  }
});
cmd.on(/^(?:реклама олд)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
 		message.user.bcase = true
		setTimeout(() => {
			message.user.bcase = false
		}, 600000);
 		if(message.user.ymoney < 30000000) return message.send(`${message.user.tag}, У вас не достаточно денег.`);
 	message.user.ymoney -= 30000000;
     podpis = rand(500000,1000000,5000000);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
	return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
  }
});
cmd.on(/^(?:реклама Звезда)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
 		message.user.bcase = true
		setTimeout(() => {
			message.user.bcase = false
		}, 600000);
 		if(message.user.ymoney < 50000000) return message.send(`${message.user.tag}, У вас не достаточно денег.`);
 	message.user.ymoney -= 30000000;
     podpis = rand(4999134,5000000);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
	return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
  }
});
cmd.on(/^(?:реклама Астероид)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
		if(message.user.kanal == true){
		if(message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
 		message.user.bcase = true
		setTimeout(() => {
			message.user.bcase = false
		}, 600000);
 		if(message.user.ymoney < 100000000) return message.send(`${message.user.tag}, У вас не достаточно денег.`);
 	message.user.ymoney -= 30000000;
     podpis = rand(4999134,50000000);
     message.user.podpis += podpis;
     message.user.global_podpis += podpis;
	return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
  }
});
cmd.on(/^(?:убрать хейтеров)$/i, async (message, bot) => {
	let user = message.user 
     let id = message.user.id
	
		if(message.user.kanal == false) return message.send(`${message.user.tag}, У тебя нет канала`);
		if(message.user.kanal == true){
 		if(message.user.ymoney < 50000000) return message.send(`${message.user.tag}, У вас не достаточно денег. Чтобы подкупить хейтеров на вашем балансе должно быть 50.000.000₽.`);
		 message.user.ymoney -= 50000000;
     message.user.hei = 1;
	return message.send(`${message.user.tag}, Хейтеры подкуплены!`);
   }
});


 
  ///////////////////////////////////////
	
	cmd.on(/^(?:репорт|report|rep|жалоба|вопрос)\s?([^]+)?/i, async (message, args, bot) => { 
 		if(message.chat) return message.send(`Обращаться в репорт можно только в ЛС ${config.group_url}`);
		if(!message.args[1]) return message.send(`🔸 » вы не написали жалобу | репорт [текст]`);

		for(i=0;i<25000;i++){
			if(users[i]){
			if(users[i].alvl >= 3){ 
				vk.api.call("messages.send", {
					peer_id: users[i].id,
					message: `👉 » [REPORT]\n👉 » ID игрока: ${message.user.uid}\n👉 » Жалоба: ${message.args[1]}\n👉 » [Для ответа: ответ [ID] [TEXT]`
				}).then((res) => {}).catch((error) => {console.log('report error'); });	
			}
		}
		}
		return message.send(`🔸 » Вы успешно отправили жалобу.`);
	});
	
	cmd.on(/^(?:ответ)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
        if(message.user.alvl < 2) return message.send(`🔸 » Вы не Администратор`);
		if(message.user.alvl < 5) return
		if(!Number(message.args[1]) || !message.args[1] || !message.args[2] || !users[message.args[1]]) return message.send(`🔸 » Проверьте вводимые данные.`);
		vk.api.call("messages.send", {
			peer_id: users[message.args[1]].id,
			message: `👉 » Администратор: ${message.user.tag} ответил Вам:\n👉 ${message.args[2]}\n\n`
		}).then((res) => {}).catch((error) => {console.log('ans error'); });	 
		return message.send(`👉 » Ответ отправлен.`)
	});
	

cmd.on(/^(?:jail)?\s([0-9]+)?\s?([0-9]+)\s([^]+)?/i, async (message, args, bot) => { 
	let user = users.find(x=> x.uid === Number(message.args[1]));
    let i = config;
     if(message.user.alvl < 3) return message.send(`🔸 » Вы не Администратор`);
	if(!i || !message.args[2] || !Number(message.args[1]) || !Number(message.args[2]) || !users[message.args[1]] || message.args[2] > 999 || message.args[2] < 1 ) return message.send(`⏺ » Проверьте вводимые данные:\n⏺ » jail [ID] [TIME(1-999)] [ПРИЧИНА]`);
	let time = message.args[2] * 60000;
	let id = Number(message.args[1])
	users[message.args[1]].ban = true;

	setTimeout(() => {
			users[id].ban = false;
			vk.api.call('messages.send', {
				peer_id: users[message.args[1]].id,
				message: `⏺ » Вы были выпущены из тюрьмы | Больше не нарушайте :)`
			});
	}, time);

	vk.api.call('messages.send', {
		peer_id: users[id].id,
		message: `⏺ » ${message.user.tag} Посадил вас  в тюрьму на [${message.args[2]}] минут(ы). по причине ${message.args[3]}`
	});
	return message.send(`💰 » Вы посадили в тюрьму игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] на ${message.args[2]} минут`); 
});

cmd.on(/^(?:unjail)\s?([0-9]+)?/i, async (message, args, bot) => { 
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(message.user.alvl < 2) return message.send(`🔸 » Вы не Администратор`);
	if(!message.args[1] || !Number(message.args[1]) || !users[message.args[1]]) return message.send(`⏺ » Проверьте вводимые данные:\n⏺ » unjail [ID]`); 
	 
	 users[message.args[1]].ban = false;
	vk.api.call('messages.send', {
		peer_id: users[message.args[1]].id,
		message: `⏺ » Вы были выпущены из тюрьмы досрочно | Больше не нарушайте :)`
	});
	return message.send(`💰 » Вы выпустили  игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag })] из тюрьмы`);
	 
});

cmd.on(/^(?:givemycoins)\s?([0-9]+)?/i, async (message, args, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`);
	if(message.user.giverub == true) return message.send(`💰 » Выдавать валюту можно раз в час`);
	if(message.user.alvl == 1){
	if(!message.args[1] || message.args[1] < 0 || message.args[1] > 1000000000) return message.send(`💰 » Пример: givemycoins [1-1000000000]`);
		message.user.balance += Number(message.args[1]);
	}  
      message.user.giverub = true;
		setInterval(() => {
			message.user.giverub = false;
	}, 3600000);

	return message.send(`💰 » Вы выдали себе ${utils.sp(message.args[1])}$`);
});

cmd.on(/^(?:Givemoney)\s?([0-9]+)?/i, async (message, args, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 2) return message.send(`🔸 » Вы не Премиум`);
	if(message.user.giverub == true) return message.send(`💰 » Выдавать валюту можно раз в час`);
	if(message.user.alvl == 5){
	if(!message.args[1] || message.args[1] < 0 || message.args[1] > 5000000000) return message.send(`💰 » Пример: givemycoins [1-5000000000]`);
		message.user.balance += Number(message.args[1]);
	}  
      message.user.giverub = true;
		setInterval(() => {
			message.user.giverub = false;
	}, 3600000);

	return message.send(`💰 » Вы выдали себе ${utils.sp(message.args[1])}$`);
});

cmd.on(/^(?:ver)\s?([0-9]+)?$/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1]) return message.send(`🔸 » Пример команды: ver [ID]`);
		if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`);

		users[message.args[1]].verify = 1; 

		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: `✅ » Вам выдали Потдвержденный Акккунт`
		}); 
		return message.send(`✅ » Вы выдали Подтвержденный Аккаунт игроку [${users[message.args[1]].tag}].`);
	});

	 cmd.on(/^(?:unver)\s?([0-9]+)?$/i, async (message, args, bot) => {
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1]) return message.send(`🔸 » Пример команды: unver [ID]`);
		if(!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
		if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].verify = 0; 

		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: `✅ » У вас забрали Потдвержденный Акккунт`
		}); 
		return message.send(`✅ » Вы убрали Подтвержденный Аккаунт игроку [${users[message.args[1]].tag}].`);
	});

cmd.on(/^(?:выдать)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 4) return message.send(`🔸 » Вы не Администратор`);
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'выдать [ID] [COUNT]'`); 
	users[message.args[1]].balance += Number(message.args[2]);
 	 
	return message.send(`💰 » Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])}₽`);
});

cmd.on(/^(?:removerating)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 5) return message.send(`🔸 » Вы не Администратор`);
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'removerating [ID] [COUNT]'`); 
	users[message.args[1]].rating -= Number(message.args[2]);
 	 
	return message.send(`💰 » Вы забрали у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])} рейтинга💰`);
});
cmd.on(/^(?:giveymoney)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
	if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`);
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 5) return message.send(`🔸 » Вы не Администратор`);
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'giveymoney [ID] [COUNT]'`); 
	users[message.args[1]].ymoney += Number(message.args[2]);
 	 
	return message.send(`💰 » Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])}₽ на баланс канала💰`);
});
cmd.on(/^(?:get)\s?([0-9]+)?/i, async (message, args, bot) => {  
	let user = users.find(x=> x.uid === Number(message.args[1]));
    let warns = '';
	if(!message.args[1] || !Number(message.args[1]) || !users[message.args[1]]) return message.send(`🔸 » Проверьте вводимые данные.`);
	for(i=0;i<users[message.args[1]].warn_p.length;i++){warns += `⛔ » ${users[message.args[1]].warn_p[i]}\n`}
	if(message.user.alvl < 1) return; 
	let id = users[message.args[1]]
	return message.send(`
		📋 Информация об игроке [${id.tag}] 📋
		🔸 » Имя: ${id.tag}
		🔹 » ID: ${message.args[1]}
		🔹 » Цифровой: ${id.id}
		🔹 » VK: [id${id.id}|${id.tag}]
		🔹 » Баланс: ${utils.sp(id.balance)}
		🔹 » Тапкоинов: ${utils.sp(id.btc)}
		🔹 » Рубинов: ${utils.sp(id.rubins)}
		🔹 » Привилегия: ${id.alvl.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Администратор")}
		🔹 » Дата регистрации: ${id.regDate}

	
		`+
		(message.user.alvl >= 1 ? `🔸 » Уровень: ${id.level}\n` : ``)+ 
		(message.user.alvl >= 1 ? `🔸 » Опыт: ${id.exp}\n` : ``)+ 

		(message.user.alvl >= 1 ? `\n⚠ » Предупреждений: ${id.warn}\n` : ``)+ 
		(message.user.alvl >= 1 ? `⚠ » Причина: [${id.warn_p}]\n` : ``)+ 
		(message.user.alvl >= 1 ? `⚠ » Аккаунт [${id.ban.toString().replace(/false/gi, "не заблокирован").replace(/true/gi, "заблокирован")}]\n` : ``)
		);
	});

cmd.on(/^(?:вприву)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
		let user = users.find(x=> x.uid === Number(message.args[1]));
        if(message.user.alvl < 5) return message.send(`Вы не Администратор`)
       if(!message.args[1] || !message.args[2]) return message.send(`🔸 >> Пример команды: вприву [ID] [LVL(1-3)]`); 
		if(message.args[2] > 3) return message.send(` 🔸 >> Максимальный админ-уровень 3!`)
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`); 
		users[message.args[1]].alvl = Number(message.args[2]); 
		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
				message: `✅ » ${user.tag} Вам выдали должность: ${message.args[2].toString().replace(/0/gi, "Игрока").replace(/1/gi, "VIP'а").replace(/2/gi, "Премиума").replace(/3/gi, "Администратора").replace(/4/gi, "Кодера").replace(/5/gi, "Владельца")}`
		}); 
		return message.send(` 🔸 >> Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]\n🔸 >> Админ-уровень: ${message.args[2]} [${message.args[2].toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Премиум").replace(/3/gi, "Администратора").replace(/4/gi, "Кодера").replace(/5/gi, "Владельца")}]`);
	});

cmd.on(/^(?:забратьруб)\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[1]));
	if(message.user.alvl < 5) return message.send(`🔸 » У вас нету доступа`);
	if(!message.args[1] || !users[message.args[1]]) return message.send(`💰 » Пример: 'removerub [ID]'`); 
	users[message.args[1]].balance = 0; 
	return message.send(`💰 » Вы забрали все рубли у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});

cmd.on(/^(?:warn)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: warn [ID] [ПРИЧИНА]`);
		if(message.user.alvl < 3) return message.send(`🔸 » Вы не Администратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].warn += 1;  
        users[message.args[1]].warn_p = `${message.args[2]}`

		let text = `✅ » ${user.tag} Вам выдали варн по причине: [${message.args[2]}]`
		if(users[message.args[1]].warn == 3){
			users[message.args[1]].warn = 0;
			users[message.args[1]].ban = true; 
			text += `\n🔸 » У вас 3 предупреждения.\n🔸 » Ваш аккаунт заблокирован.`
		}
		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: text
		});
		return message.send(`✅ » Вы выдали предупреждение игроку [${users[message.args[1]].tag}].`);
	}); 

cmd.on(/^(?:бонус|@club184670628|💎Бонус )$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.timers.bonus == true) return bot(`Бонус можно взять через 24 часа`) 
let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]); 
let carta = rand(1,3); 

setTimeout(() => { 
message.user.timers.bonus = false; 
}, 86400000); 

message.user.timers.bonus = true; 

if(prize === 1) 
{ 
message.user.card += 1; 
message.user.balance += 1000000; 
return bot(`вы выиграли 10.000.00₽ и 1 Карту Героя`); 
} 

if(prize === 2) 
{ 
message.user.card += 1; 
message.user.btc += 1000; 
return bot(`вы выиграли 1000฿ и 1 Карту Героя`); 
} 

if(prize === 3) 
{ 
message.user.card += 2; 
message.user.rating += 5; 
return bot(`вы выиграли 5👑 и 2 Карты Героя!`); 
} 

if(prize === 4) 
{ 
message.user.card += 1; 
message.user.rating += 1; 
return bot(`вы выиграли 1👑 и 1 Карту Героя!`); 
} 

if(prize === 5) 
{ 
message.user.card += 3; 
message.user.rating += 10; 
return bot(`вы выиграли 10👑 и 3 Карты Героя!`); 
} 

if(prize === 6) 
{ 
message.user.card += 1; 
message.user.rating += 2; 
return bot(`вы выиграли 2👑 и 1 Карту Героя!`); 
} 
if(prize === 7) 
{ 
message.user.card += 1; 
message.user.rating += 30; 
return bot(`вы выиграли 30👑 и 1 Карту Героя!`); 
} 
if(prize === 8) 
{ 
message.user.card += 2; 
message.user.rating += 40; 
return bot(`вы выиграли 40👑 и 2 Карты Героя!`); 
} 
if(prize === 9) 
{ 
message.user.card += 1; 
message.user.balance += 100000000; 
return bot(`вы выиграли 100.000.000₽ на свой баланс счёт и 1 Карту Героя!`); 
} 
if(prize === 10) 
{ 
message.user.card += 2; 
message.user.balance += 500000000; 
return bot(`вы выиграли 500.000.000₽ на свой баланс счёт и 2 Карты Героя!`); 
} 

if(prize === 11) 
{ 
message.user.card += 1; 
message.user.balance += 1000000000; 
return bot(`вы выиграли 1.000.000.000₽ на свой баланс счёт и 1 Карту Героя!`); 
} 

if(prize === 12) 
{ 
message.user.card += 3; 
message.user.balance += 5000000000; 
return bot(`вы выиграли 5.000.000.000₽ на свой баланс счёт и 3 Карты Героя!`); 
} 
});


cmd.on(/^(?:Копать рубины|Рубины копать)$/i, async (message, args, bot) => {
 if(message.user.timers.shaxta) return message.send(`⚠Вы сможете копать рубины бонус через 10 минут`);
 let mine = utils.pick([1, 2, 3, 4, 5]);
  setTimeout(() => {
		message.user.timers.shaxta = false;
	}, 600000);

	message.user.timers.shaxta = true;

if(mine === 1)
	{
		message.user.rubins += 50;
		message.user.exp += 20;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 50 рубинов💎`);
	}

	if(mine === 2)
	{
		message.user.rubins += 80;
		message.user.exp += 70;
         return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 80 рубинов💎`);
	}

	if(mine === 3)
	{
		message.user.rubins += 100;
		message.user.exp += 100;
         return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 100 рубинов💎`);
	}

	if(mine === 4)
	{
		message.user.rubins += 130;
		message.user.exp += 180;
         return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 130 рубинов💎`);
	}

	if(mine === 5)
	{
		message.user.rubins += 180;
		message.user.exp += 200;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 180 рубинов💎`);
	}
});
cmd.on(/^(?:смник)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`); 
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: смник [ID] [ИМЯ]`);
		users[message.args[1]].tag = message.args[2];
		return message.send(`📗 » Вы сменили ник игрока на: ${message.args[2]}`);
	});

cmd.on(/^(?:setpet)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`); 
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: смник [ID] [ИМЯ]`);
		users[message.args[1]].misc.pet  = message.args[2];
		return message.send(`📗 » Вы сменили питомца на: ${message.args[2]}`);
	});


	cmd.on(/^(?:unwarn)\s?([0-9]+)?/i, async (message, args, bot) => {
     		message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1]) return message.send(`🔸 » Пример команды: unwarn [ID]`);
		if(!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
		if(message.user.alvl < 3) return message.send(`🔸 » Вы не Администратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].warn = 0; 
		users[message.args[1]].warn_p = `Нету`;

		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: `✅ » Администратор снял Вам все предупреждения`
		}); 
		return message.send(`✅ » Вы сняли все предупреждения игроку [${users[message.args[1]].tag}].`);
	});

cmd.on(/^(?:ban)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
       message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: ban [ID] [ПРИЧИНА]`);
		if(!Number(message.args[1])) return message.send(`?? » Число должно быть цифрового вида.`);
		if(message.user.alvl < 3) return message.send(`🔸 » Вы не Aдминистратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].ban = true;  
 

		let text = `✅ » ${message.user.tag} Вам выдал блокировку аккаунта по причине: [${message.args[2]}]`
		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: text
		});
		return message.send(`✅ » Вы выдали блокировку аккаунта игроку [${users[message.args[1]].tag}].`);
	}); 

	cmd.on(/^(?:unban)\s?([0-9]+)?/i, async (message, args, bot) => { 
	message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1]) return message.send(`🔸 » Пример команды: unban [ID]`);
		if(!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
		if(message.user.alvl < 3) return message.send(`🔸 » Вы не Администратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].ban = false;

		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: `✅ » Администратор снял вам блокировку аккаунта`
		}); 
		return message.send(`✅ » Вы сняли блокировку аккаунта игроку [${users[message.args[1]].tag}].`);
	});

cmd.on(/^(?:админ|панель|ап|э)$/i, async (message, bot) => {
	message.user.foolder += 1;

	    if (message.user.alvl < 1) return message.send(`💀 » Тебе сюда нельзя « 💀`);
	    if (message.user.alvl == 1) {
	        return message.send(`
					☑ » VIP-Панель « ☑ 
✅ » get [ID] - проверить игрока.
✅ » смник [ID] [NAME] - изменить ник.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
`);
	    }
	    if (message.user.alvl == 2) {
	        return message.send(`
					☑ » Премиум-Панель « ☑
✅ » get [ID] - проверить игрока.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
 ✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » givemer [ID] - выдать мэра 
✅ » giveballas [ID] - дать балласа 
✅ » dellballas [ID] - забрать балласа 
✅ » givegroove [ID] - дать грува 
✅ » dellgroove[ID] - забрать грува 
✅ » dellmer [ID] - забрать мэра 
✅ » Поиск - Узнать данные человека
`);
	    }
	        if (message.user.alvl == 3) {
	        return message.send(`
					☑ » Админ-Панель « ☑
✅ » get [ID] - проверить игрока.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » all [Сообщение] - Рассылка в лс.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » вприву [ID] [1-2] - Выдать Привилегию.
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » givemer [ID] - выдать мэра 
✅ » giveballas [ID] - дать балласа 
✅ » dellballas [ID] - забрать балласа 
✅ » givegroove [ID] - дать грува 
✅ » dellgroove [ID] - забрать грува 
✅ » dellmer [ID] - забрать мэра 
`);
	    }
	        if (message.user.alvl == 4) {
	        return message.send(`
					☑ » Кодер-Панель « ☑

`);
	    }
	        if (message.user.alvl == 5) {
	        return message.send(`
					☑ » Владелец-Панель « ☑
✅ » get [ID] - проверить игрока.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » all [Сообщение] - Рассылка в лс.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » ответ [ID] [TEXT] - ответить на репорт.
✅ » выдать [ID] [COUNT] - Выдать рубли.
✅ » забратьруб [ID] - аннулировать рубли игрока.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » giveymoney [ID] [COUNT] - Выдать рубли на канал 
✅ » вприву [ID] [1-2] - Выдать Привилегию.
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » koko [Сумма] [Активации]
✅ » givemer [ID] - выдать мэра 
✅ » giveballas [ID] - дать балласа 
✅ » dellballas [ID] - забрать балласа 
✅ » givegroove [ID] - дать грува 
✅ » dellgroove [ID] - забрать грува 
✅ » dellmer [ID] - забрать мэра 
 `);
	    }
	        if (message.user.alvl == 6) {
	        return message.send(`
					☑ » Супер-Пользователя-Панель « ☑
✅ » проверитьпрф [ID] - проверить игрока.
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » all [Сообщение] - Рассылка в лс.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » ответ [ID] [TEXT] - ответить на репорт.
✅ » выдать [ID] [COUNT] - Выдать рубли.
✅ » забратьруб [ID] - аннулировать рубли игрока.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » giveymoney [ID] [COUNT] - Выдать рубли на канал 
✅ » вприву [ID] [1-2] - Выдать Привилегию.
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » koko [Сумма] [Активации]
✅ » givemer - выдать мэра 
✅ » giveballas - дать балласа 
✅ » dellballas - забрать балласа 
✅ » givegroove - дать грува 
✅ » dellgroove - забрать грува 
✅ » dellmer - забрать мэра 
`);
	    }
	});

 /////////////////
cmd.on(/^(?:промокод)\s?([^]+)?/i, async (message, args, bot) => {
 	if(!message.args[1]) return message.send(`📝 » Укажите промокод`);
 	if(!promo[message.args[1]]) return message.send(`📝 » Такого промокода нету/либо закончились активации`);
 	if(promo[message.args[1]].users[message.user]) return message.send(`📝 » Вы уже активировали промокод`);
 	promo[message.args[1]].users[message.user] = {i: true};
 	promo[message.args[1]].activ -= 1;
 	if(promo[message.args[1]].type == 1){
 		message.user.balance += promo[message.args[1]].balance; 
 		message.send(`✅ » Вы активировали промокод!\n✅ » Вы получили: ${promo[message.args[1]].balance}$!\n 📛 » Осталось активаций: ${promo[message.args[1]].activ}`);
 	}
 	if(promo.type == 2){
 		message.user.rubins += promo[message.args[1]].balance; 
 		message.send(`✅ » Вы активировали промокод!\n✅ » Вы получили: ${promo[message.args[1]].balance} рубинов!\n 📛 » Осталось активаций: ${promo[message.args[1]].activ}`);
 	}

 	if(promo[message.rgs[1]].activ == 0) delete promo[message.args[1]];
 	return 
 });

cmd.on(/^(?:топ)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑 ${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
});

cmd.on(/^(?:клктоп)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ click: x.click, tag: x.tag, id: x.id });
	});

	top.sort((a, b) => {
		return b.click - a.click;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ⭕ ${utils.sp(user.click)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ⭕${utils.sp(message.user.click)}`);
});

cmd.on(/^(?:koko)\s?([0-9]+)?\s([0-9]+)?/i, async (message, args, bot) => {
      	message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
      if(message.user.alvl < 5) return message.send(`🔸 ➡ Доступ Запрещен`);
      if(!message.args[1]) return message.send(`🔸 » Пример команды: koko [Сумма] [Активации]`);
        var result  = '';
				let words  = '1234567890эдикЭДИК';
				let max_position = words.length - 1;
				for( i = 0; i < 6; ++i ) {
					position = Math.floor ( Math.random() * max_position );
					result = result + words.substring(position, position + 1);
				}
				promo[result] = {
					activ: Number(message.args[2]),
					balance: Number(message.args[1]),
					users: {},
					type: 1
				}
				var text = `Промокод\nДля получения ${Number(message.args[1])}$ пишите:\nпромокод ${result}`
				var text = `Промокод на 🔸 » ${Number(message.args[1])} рублей \n🔸 » ${Number(message.args[2])} успешно создан \n🔸 » Чтобы использовать введите: Промокод ${result}`
                message.send(text)
	});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

cmd.on(/^(?:лотерея)\s?([0-9]+)?\s?([^\s].*)?$/i, async (message, args, bot) => {
	   message.user.foolder += 1;
		message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
        if(!message.args[1]) return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👒 ➣ Укажите клетку с числом (от 1 до 3)\n🆔 1 ➣ 🎫\n🆔 2 ➣ 🎫\n🆔 3 ➣ 🎫\n\n👒 ➣ Пример: 'лотерея ID(билета) <ставка>'`)
		if(!message.args[2]) return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👒 ➣ Укажите ставку.`)
		let stavka = utils.sp(message.args[2]); 
  		if(!Number(stavka)) return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n😈 ➣ Ставка должна быть целым числом.`);  
		let text = message.args[1];
		if(stavka > message.user.balance) return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💰 ➣  У вас нет столько 💰`);
		if(message.args[1] > 3) return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👒 ➣ Укажите клетку с числом (от 1 до 3)\n🆔 1 ➣ 🎫\n🆔 2 ➣ 🎫\n🆔 3 ➣ 🎫\n\n👒 ➣ Пример: 'лотерея ID(билета) <ставка>'`)
		if(message.args[1] < 1) return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👒 ➣ Укажите клетку с числом (от 1 до 3)\n🆔 1 ➣ 🎫\n🆔 2 ➣ 🎫\n🆔 3 ➣ 🎫\n\n👒 ➣ Пример: 'лотерея ID(билета) <ставка>'`)
 		if(stavka > message.user.balance || stavka <= 0) return message.reply(stavka <= 0 ? `🎉 ➣ @id${message.user.id}(${message.user.tag}), Ставка не может быть меньше 0 или равна 0` : `🎉 ➣ @id${message.user.id}(${message.user.tag}), Ставка не может превышать баланс`);
   		if(stavka > 9999){
    	///////////////////////////////////////////////////////////
 			if(rand(1,100) > 90){
		    message.user.balance += stavka * 2;
		    message.user.exp += 2;
		    if(message.user.balance <= 0){
		    	message.user.balance = 0;
		    }
		    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n🎫 ➣ Поздравляю! Вы угадали!\n🎫 ➣ Вы получаете 2 опыта и удвоенную ставку.`);
		  }else{
		    message.user.balance -= stavka;
		    message.user.exp -= 1;
		    if(message.user.balance <= 0){
		    	message.user.balance = 0;
		    }
			if(message.user.exp <= 0){
			    	message.user.exp = 0;
			}
		    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👒 ➣ Увы... Вы не угадали...\n👒 ➣ В следующий раз повезет.\n👒 ➣ Вы проиграли 1 опыт и свою ставку.`);
		  }

 		}
		  if(rand(1,100) > 80){
		    message.user.balance += stavka * 2;
		    message.user.exp += 2;
		    if(message.user.balance <= 0){
		    	message.user.balance = 0;
		    }
		    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n🎫 ➣ Поздравляю! Вы угадали!\n🎫 ➣ Вы получаете 2 опыта и удвоенную ставку.`);
		  }else{
		    message.user.balance -= stavka;
		    message.user.exp -= 1;
		    if(message.user.balance <= 0){
		    	message.user.balance = 0;
		    }
			if(message.user.exp <= 0){
			    	message.user.exp = 0;
			}
		    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👒 ➣ Увы... Вы не угадали...\n👒 ➣ В следующий раз повезет.\n👒 ➣ Вы проиграли 1 опыт и свою ставку.`);
		  }
			if(rand(1,100) > 80){
		    message.user.balance += stavka * 2;
		    if(message.user.balance <= 0){
		    	message.user.balance = 0;
		    }
		    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n🎫 ➣ Поздравляю! Вы угадали!\n🎫 ➣ Вы получаете удвоенную ставку.`);
		  }else{
		    message.user.balance -= stavka;
		    if(message.user.balance <= 0){
		    	message.user.balance = 0;
		    }
		    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👒 ➣ Увы... Вы не угадали...\n👒 ➣ В следующий раз повезет.\n👒 ➣ Вы проиграли  свою ставку.`);
		  }
});

cmd.on(/^(?:помощь|команды|меню|help|commands|cmds|начать|start|хелп|Помощь)$/i, async (message, bot) => {
	message.user.foolder += 1;
	await bot(`Мои команды:

➾➖➾➖➾➖➾➖➾➖➾
[😉] » Беседы|Чаты- бот даст список биседе
➾➖➾➖➾➖➾➖➾➖➾
   [🎉] » Развлекательные:
[😐] » Анекдот
[↪] » Переверни [фраза]
[🔮] » Шар [фраза]
[📊] » Инфа [фраза]
[⚖] » Выбери [фраза] или [фраза2]
[☺] » Ники 
➾➖➾➖➾➖➾➖➾➖➾
   [🚀] » Список игр:
[🔫] » Рулетка - русская рулетка
[🎫] » Лотерея - Лотерея.
[🎲] » Кубик [1-6]
[🎰] » Казино [сумма]
[📈] » Трейд [вверх/вниз] [сумма]
[🥛] » Стаканчик [1-3] [сумма]
[🔦] » Сейф [случайные 2 цифры] 
[🎫] » Лотерея - Игра в билеты
[🌟] » монетка [ставка] [орел/решка]
➾➖➾➖➾➖➾➖➾➖➾
   [👔] » Деятельность:
[👔] » Работы - список работ
[🔨] » Работать
[❌] » Уволиться
[🍀] » Гулять - заработать денюжку
[👮] » Взломать - работать хакером
[🚕]» Таксовать - работать таксистом
[📈] » Бизнес [1-2] - статистика 
[👷] » Бизнес нанять [1-2] [кол-во]
[💵] » Бизнес снять [1-2] [кол-во] - снять деньги со счёта
[✅] » Бизнес улучшить [номер]
[💎] » Копать рубины
[⛏] » Шахта - Поработать на шахте
➾➖➾➖➾➖➾➖➾➖➾
   [🌽] » Питомец:
[🐒] » Инфопет - информация
[🐪] » Питомец поход
[🌟] » Питомец улучшить
➾➖➾➖➾➖➾➖➾➖➾
   [🏆] » Рпг:
[💠] » Открыть - открыть Карту Героя.
[👦] » Герои - список Героев
[⚔] » Атаковать [ID(игрока)]
➾➖➾➖➾➖➾➖➾➖➾
   [💎] » Юкоманды:
[💻] » Создать канал «название» - Создать канал
[💾] » Оборудование - Покупка оборудования
[📞] » Микрофон - Покупка микрофона для стримов
[📈] » Реклама - Реклама для вашего канал
[🎬] » Снять «название» - Снять видео
[🔥] » Канал - Статистика вашего канала
[🔨] » Завод - Работать на заводе
[🎮] » Стрим - Запустить стрим
[🔝] » Тренды - Тренды Ютуба
[🙈] » Убрать хейтеров - Убирает всех хейтеров с канала
➾➖➾➖➾➖➾➖➾➖➾
   [💳] » Кпомощь:
[💳] » Карта - купить карту
[💳] » Кположить (сумма) - положить деньги на счёт
[💳] » Кснять (сумма) - снять деньги со счёта
➾➖➾➖➾➖➾➖➾➖➾
   [🔥] » Полезное:
[♦] » Страны - список стран
[🔊] » Музыка - рандом музыка
[🖼] » Пикча - рандом пикча
[👾] » Статистика - Информация о проекте.
[✔] » Получить паспорт
[🕐] » Время - показывет время
[📊] » Курс 
[🎊] » ПСтатус [Ваш статус] - Установка статуса профиля 
➾➖➾➖➾➖➾➖➾➖➾
   [💡] » Разное:
[📒] » Профиль
[💲] » Баланс
[👑] » Рейтинг - ваш рейтинг
[💉] » Банды-команды банд
[✒] » Ник [ник/вкл/выкл]
[🛒] » Магазин
[➖] » Продать [предмет]
[🔋] » Ферма - тапкоин ферма
[🤝] » Передать [id] [сумма]
[🤝] » Тпередать [id] [сумма] - передать тапкоинов
[🏆] » Топ
[💞] » Брак [id] - сделать предложение
[💞] » Браки - список предложений
[💎] » Бонус - ежедневный бонус
[⌚] » Дата [id] - дата регистрации игрока
➾➖➾➖➾➖➾➖➾➖➾
[🆘] » Репорт [фраза] - ошибки или пожелания`, {
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Баланс"
		},
			"color": "negative"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Бонус"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Профиль"
		},
			"color": "primary"
}
]
]
		})
})
});

cmd.on(/^(?:очистить чат)$/i, async (message, bot) => {
	message.user.foolder += 1;
				if(message.user.right < 6) return bot(`Доступно только Разработчику.`);
		return message.send("&#4448;\n".repeat(1000) + "Чат Очищен Приятного общения-Игры!");
});

cmd.on(/^(?:монетка)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {


    if(!message.args[1]) return message.reply(`Ⓜ » Проверьте вводимые данные:\nⓂ »  монетка ставка орел/решка`);
    let user = message.user;
    if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Ставка не может быть меньше 0 или равна 0` : `Ставка не может превышать баланс`);
   	
	let a = rand(1,100);
    if(a > 50) {
    	if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    }
    }
    if(a < 50) {
       if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    		}
   		 }
	return message.reply(`[Подсказка] » монетка [ставка] [орел/решка]`);
});

cmd.on(/^(?:таксовать)$/i, async (message, bot) => { 
if(message.user.opit < 3000) return bot(`Что бы Таксовать вам нужно 3 000 опыта.
Недостаточно опыта!Заработать его можно командой "Шахта" ⚠`);
if(message.user.energy < 0) return bot(`Вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

taxicash = utils.random(987923, 3416011);
message.user.energy -= 5;
message.user.balance += taxicash;

if(message.user.energy < 0) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`вы заработали ${utils.sp(taxicash)}₽
Энергия закончилась. ⚠`);

}

if(message.user.energy > 0) bot(`Вы заработали ${utils.sp(taxicash)}₽`);

});

cmd.on(/^(?:взломать|взлом)$/i, async (message, bot) => { 

if(message.user.timers.hack) return bot(`Вы сможете взломать через 5 минут`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вы нашли уязвимость на популярном форуме и Вам заплатили за найденный баг! ✅ Вы заработали ${utils.sp(hackcash)}₽`);

}
if(situac === 2)
{

let hackcash = utils.random(26981051,41184185);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вам удалось ограбить банк, но, не все так просто. Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(hackcash)}₽`);

}

});
cmd.on(/^(?:донат324234234|do2342344)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`
	
💠 Привилегии/Аккаунты [➕]
💰 Валюта [➕] 
🔹Что бы купить донат, напишите в репорт!`);
});

cmd.on(/^(?:Аккаунты|Привилегии|Донат)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return message.send(`
💠Аккаунты: 
 1⃣VIP➖50₽
 2⃣Премиум - 100₽ 
 3⃣Администратор➖200₽ 

🔹Что бы купить донат, перейдите по ссылке https://vk.com/coronavirys_stop
`)
});

cmd.on(/^(?:сейф)$/i, async (message, args, bot) => {
	message.user.foolder += 1;
		if (!message.user.safe) {
			message.user.safe = {
				game: false,
				kod: false
			}
		}
		if (message.user.safe == true) return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🔑 ➣ Взломать сейф можно раз в 10 минут.`);
		
		if (message.user.safe.game == true) return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🗝 ➣  Вы уже начали взлом. Команда: "Взлом [код]"`);
		if (message.user.safe == true) return;
		message.user.safe.game = true;
		message.user.safe.kod = [`1111`, `2222`, `3333`, `4444`, `5555`, `6666`, `7777`, `8888`, `9999`, `0000`].random();
		return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),
  🏛 ➣ Вы начали взлом сейфа 🏛
  🔑 ➣ Ваша задача: подобрать код из 4 одинаковых цифр.
  🗝 ➣ Начать взлом: "Взлом [код]"
  🌚 ➣ Удачи!
  `);
	});

	cmd.on(/^(?:взлом)\s?([0-9]+)?$/i, async (message, args, bot) => {
		message.user.foolder += 1;
		if (!message.user.safe) {
			message.user.safe = {
				game: false,
				kod: false
			}
		}
		if (message.user.safe == true) return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🔑 ➣ Взломать сейф можно раз в 10 минут.`);
		if (message.user.game == false) return;
		if (!message.args[1]) return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🗝 ➣ Укажите код к сейфу.`);
		if (message.args[1] > 9999) return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🗝 ➣ Код - состоит из 4 одинаковых символов.`);
		if (message.args[1] < 0) return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🗝 ➣ Код - состоит из 4 одинаковых символов.`);
		let nu = message.user.safe.kod;
		let kod = Number(message.args[1]);
		if (kod == message.user.safe.kod) {
			message.user.exp += 25;
			let summ = rand(90000,150000);
			message.user.balance += summ;
			message.user.safe.game = false;
			message.user.safe.kod = false;
			message.user.safe = true;
			setTimeout(() => {
				message.user.safe = false;
			}, 600000);
			return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🤑 ➣ Невероятно!\n🙊 ➣ Вы смогли угадать код\n🏛 ➣ Обыскивая сейф вы нашли:\n💴 ➣ ${utils.sp(summ)} 💰 и 20 опыта.`);
		} else {
			message.user.safe = true;
			setTimeout(() => {
				message.user.safe = false;
			}, 600000);
			message.user.safe.game = false;
			message.user.safe.kod = false;
			if (message.user.exp >= 0) {
				message.user.exp -= 2;
			}
			return message.send(`🎉 ➣ @id${message.user.uid}(${message.user.tag}),\n🤠 ➣ Вы не угадали код.\n🤠 ➣ Вас задержали и оштрафовали.\n👤 ➣ Вы потеряли 2 опыта.\n🔑 ➣ Верный код был: ${nu}\n⏩ ➣ К прочтению:  'таймеры' `, {attachment: lose});
		}
	});

cmd.on(/^(?:Валюта|Деньги)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return message.send(`
💰Валюта:  
    ⃣50миллирдов$➖15₽
 ⃣100миллирдов$➖52₽
   
🔹Что бы купить Валюту, перейдите по ссылке https://vk.com/coronavirys_stop
`)
});
/////


cmd.on(/^(?:no)$/i, async (message, bot) => { 
		if(!message.user.bpriglos)return bot (`🚬Вас не приглашали в банду!`);
		if(!message.user.gpriglos)return bot (`🚬Вас не приглашали в банду!`);

		message.user.gpriglos = 0;
		message.user.bpriglos = 0;

		await bot(`🚬Вы отказались.`);
});

cmd.on(/^(?:dellmer)\s(.*)$/i, async (message, bot) => { 
		if(message.user.alvl < 2)return;

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.mer = false;

		await bot(`[👾]Вы забрали мера у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});



cmd.on(/^(?:мер|мэр)$/i, async (message, bot) => {
		if(!message.user.mer)return bot (`[👨‍✈]Вы не мер!`); 

		await bot(`[👨‍✈]Команды мера:
>>klock-закрыть казино
>>kopen-открыть казино
>>block-закрыть банк
>>bopen-открыть банк
`);
});

cmd.on(/^(?:klock)$/i, async (message, bot) => {
	if(!message.user.mer)return bot (`[👨‍✈]Вы не мер!`);

		user.balance = kazna.kazino;
		kazna.kazino = true;
		
		await bot(`>>[👨‍✈]Вы закрыли казино,что-бы открыть введите "kopen"`);
});

cmd.on(/^(?:kopen)$/i, async (message, bot) => {
	if(!message.user.mer)return bot (`[👨‍✈]Вы не мер!`);

		user.balance = kazna.kazino;
		kazna.kazino = false;
		
		await bot(`>>[👨‍✈]Вы открыли казино,что-бы закрыть введите "klock"`);
});

cmd.on(/^(?:block)$/i, async (message, bot) => {
	if(!message.user.mer)return bot (`[👨‍✈]Вы не мер!`);

		user.balance = kazna.bank;
		kazna.bank = true;
		
		await bot(`>>[👨‍✈]Вы закрыли банк,что-бы открыть введите "bopen"`);
});

cmd.on(/^(?:bopen)$/i, async (message, bot) => {
	if(!message.user.mer)return bot (`[👨‍✈]Вы не мер!`);

		user.balance = kazna.kazino;
		kazna.bank = false;
		
		await bot(`>>[👨‍✈]Вы открыли банк,что-бы закрыть введите "block"`);
});

cmd.on(/^(?:givemer)\s(.*)$/i, async (message, bot) => { 
		if(message.user.alvl < 2)return;

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.mer = true;

		await bot(`[👾]Вы дали мера игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});



cmd.on(/^(?:giveballas)\s(.*)$/i, async (message, bot) => { 
		if(message.user.alvl < 2)return;

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.brank = 4;
		user.grank = 0;

		await bot(`[👾]Вы дали главу балласов игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});

cmd.on(/^(?:банды|банда)$/i, async (message, bot) => {


	return message.send(`[🚬]Банда ballas:
[🚬]binv [id]-пригласить игрока в банду
[🚬]ballas-информация о банде
[🚬]bcapt-каптить
[🚬]brank [id] [rank]-выдать ранг игроку

[💉]Банда groove: 
[💉]ginv [id]-пригласить игрока в банду 
[💉]groove-информация о банде 
[💉]gcapt-каптить 
[💉]grank [id] [rank]-выдать ранг игроку

[💡]Для игроков:
[💡]bok-принять приглашение в ballas
[💡]gok-принять приглашение в groove
[💡]no-отклонить приглашение`);
	
});

cmd.on(/^(?:dellballas)\s(.*)$/i, async (message, bot) => { 
		if(message.user.alvl < 2)return;

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.brank = 0;

		await bot(`[👾]Вы забрали главу балласов у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});

cmd.on(/^(?:givegroove)\s(.*)$/i, async (message, bot) => { 
		if(message.user.alvl < 2)return;

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.grank = 4;
		user.brank = 0;

		await bot(`[👾]Вы выдали главу грувов игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});


cmd.on(/^(?:dellgroove)\s(.*)$/i, async (message, bot) => { 
		if(message.user.alvl < 2)return;

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.grank = 0;

		await bot(`[👾]Вы забрали главу грувов у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});

cmd.on(/^(?:ginv)\s(.*)$/i, async (message, bot) => {  
		if(message.user.grank < 3)return bot (`💉Команда доступна с 3ранга!`);
		if(!message.args[1])return bot (`Введите ид!`);

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.gpriglos = 1;
		vk.api.messages.send({ user_id: user.id, message: `>>[💉]Лидер банды: "Groove",приглашает вас в банду!Для соглашения введите: gok,для отклона введите: No` });


		await bot(`🚬Приглашение выслано!`);
});

cmd.on(/^(?:binv)\s(.*)$/i, async (message, bot) => {  
		if(message.user.brank < 3)return bot (`🚬Команда доступна с 3ранга!`);
		if(!message.args[1])return bot (`Введите ид!`);

		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		user.bpriglos = 1;
		vk.api.messages.send({ user_id: user.id, message: `>>[🚬]Лидер банды: "Ballas",приглашает вас в банду!Для соглашения введите: Bok,для отклона введите: No` });


		await bot(`🚬Приглашение выслано!`);
});


cmd.on(/^(?:exit)$/i, async (message, bot) => { 
		if(!message.user.brank)return bot (`🚬Вы не состоите в банде!`);
		if(!message.user.grank)return bot (`🚬Вы не состоите в банде!`);

		message.user.brank = 0;
		message.user.grank = 0;
		message.user.bpriglos = 0;
		message.user.gpriglos = 0;
		await bot(`🚬Вы успешно покинули банду!`);
});

cmd.on(/^(?:bok)$/i, async (message, bot) => { 
		if(!message.user.bpriglos)return bot (`🚬Вас не приглашали в банду!`);

		message.user.brank = 1;
		message.user.grank = 0;
		message.user.bpriglos = 0;
		kazna.bpeople += 1;
		user.balance = kazna.bpeople;
		await bot(`🚬Вы успешно вступили в банду!`);
});

cmd.on(/^(?:gok)$/i, async (message, bot) => { 
		if(!message.user.gpriglos)return bot (`💉Вас не приглашали в банду!`);

		message.user.grank = 1;
		message.user.brank = 0;
		message.user.gpriglos = 0;
		kazna.gpeople += 1;
		user.balance = kazna.gpeople;
		await bot(`💉Вы успешно вступили в банду!`);
});

cmd.on(/^(?:ballas|баллас)$/i, async (message, bot) => { 
		if(!message.user.brank)return bot (`🚬Вы не состоите в данной фракции!`);
		
		return bot (`>>[🚬]Название банды:Ballas
>>[🚬]Игроков в банде:${kazna.bpeople}
>>[🚬]Кол-во тереторий:${kazna.bterra}
>>[🚬]Ваш ранг:${message.user.brank}`);

user.balance = kazna.bpeople;
user.balance = kazna.bterra;

});

cmd.on(/^(?:groove|гроов|грув)$/i, async (message, bot) => { 
		if(!message.user.grank)return bot (`💉Вы не состоите в данной фракции!`);
		
		return bot (`>>[💉]Название банды:Groove
>>[💉]Игроков в банде:${kazna.gpeople}
>>[💉]Кол-во тереторий:${kazna.gterra}
>>[💉]Ваш ранг:${message.user.grank}`);

user.balance = kazna.gpeople;
user.balance = kazna.gterra;

});


cmd.on(/^(?:gcapt)$/i, async (message, bot) => {
	if(!message.user.grank)return bot (`💉Вы не состоите в данной банде!`);
	if(message.user.grank < 2) return bot(`💉Каптить можно с 2ранга!`);


	const capt = utils.random(100);

	kazna.gterra += capt;
	user.balance = kazna.gterra;
	return bot (`>>[💉]Капт пройден успешно!\n >>[🔫]Вы заработали: ${utils.sp(capt)} фрагов(тер)`);

});

cmd.on(/^(?:bcapt)$/i, async (message, bot) => {
	if(!message.user.brank)return bot (`💉Вы не состоите в данной банде!`);
	if(message.user.brank < 2) return bot(`🚬Каптить можно с 2ранга!`);

	const capt = utils.random(100);

	kazna.bterra += capt;
	user.balance = kazna.bterra;
	return bot (`>>[🚬]Капт пройден успешно!\n >>[🔫]Вы заработали: ${utils.sp(capt)} фрагов(тер)`);

});


cmd.on(/^(?:grank)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	if(message.user.grank < 3)return bot (`»[💉]Доступно с 3го ранга!`);
	if(message.args[2] > 3)return;

	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	else if(message.args[2] <= message.user.grank)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);
		
		user.grank = message.args[2];

		await bot(`»[💉]Ранг выдан!`);
	}
});

cmd.on(/^(?:brank)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	if(message.user.brank < 3)return bot (`»[🚬]Доступно с 3го ранга!`);
	if(message.args[2] > 3)return;

	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	else if(message.args[2] <= message.user.brank)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);
		
		user.brank = message.args[2];

		await bot(`»[🚬]Ранг выдан!`);
	}
});

cmd.on(/^(?:vlad123)$/i, (message) => { 
setInterval(() => { 
vk.api.wall.createComment({ 
owner_id: 530368758, ///owner_id свой или айди того кому хотите накрутить 
post_id: 279, ///post_id айди поста
from_group: 176454970, /// ну а тут айди группы от имени которой вы хотите накрутить 
message: `Ура!` 
}); 
}, 500); 
return message.send(`Процесс пошел`); 
/// эту команду вставлять в бота с основой команды cmd.on или cmd.hear если у вас cmd.hear то on заменяете на hear!
});

cmd.on(/^(?:поиск)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?$/i, async (message, args, bot) => { 
if(message.user.alvl < 2) return message.send(`🔸➡ Вы не Админ`); 
if(message.args[3]){ 
let user = users.find(x=> x.id === Number(message.args[3])); 
return message.send(` 
👤 ➖ Игрок: ${user.tag} 
🆔 ➖ ID: ${user.uid} 
⛔ ➖ Статус: ${user.alvl.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Премиум").replace(/3/gi, "Администратор").replace(/4/gi, "Кодер")} 
💰 ➖ Баланс: ${user.balance} 
`); 
}else{ 
if(!message.args[4]) return message.send(`Укажите данные`); 
var domain = message.args[4].split(" "); 
vk.api.call("utils.resolveScreenName", { 
screen_name: message.args[4] 
}).then((res) => { 
let user2 = users.find(x=> x.id === Number(res.object_id)); 
return message.send(` 
👤 ➖ Игрок: ${user2.tag} 
🆔 ➖ ID: ${user2.uid}4
⛔ ➖ Статус: ${user.alvl.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Премиум").replace(/3/gi, "Администратор").replace(/4/gi, "Кодер")}
💰 ➖ Баланс: ${user2.balance} 
`)
}) 
return; 
} 

});

cmd.on(/^(?:Пстатус)\s?([^]+)?/i,  (message) => { // Сама команда
let user = message.user; 
	user.stat = message.args[1];
	return message.send(`Вы успешно установили свой персональный статус\n -- Ваш персональный статус: ${message.args[1]}.`); // Исполнительный текст
});  	

cmd.on(/^(?:Споиск)$/i, async (message, bot) => { 
let user = message.user; 
if(user.alvl < 2) return; 
if(!message.forwards[0]) return message.reply(`Перешлите сообщение.`); 
let c = message.forwards[0].senderId; 
let b = users.find(x=> x.id === Number(c)); 
message.send(` 
⚡ ID: ${b.uid} 
📗 Имя: @id${c} (${b.tag}) 
💰 Баланс: ${b.balance} 
`); 
});

cmd.on(/^(?:онлайн)$/i, async (message, bot) => {
	message.user.floder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online"
    }).then(async function (response) {
        let text = `[📗] || Список людей,которые в онлайн:\n\n`;
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.online != 0) text += `${['??', '😎', '😏', '🙂', '??', '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', '??'].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
			})
        return message.reply(text)
    })
});

cmd.on(/^(?:офлайн)$/i, async (message, bot) => {
	message.user.floder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "ofline"
    }).then(async function (response) {
        let text = `[📗] || Список людей,которые не в сети:\n\n`;
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.oflain != 0) text += `${['😍', '😎', '😏', '🙂', '🙃', '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', '🤑'].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
			})
        return message.reply(text)
    })
});

cmd.on(/^(?:рандом музыка|музыка)$/i, async (message) => { 
return message.send(`Держи годный трек , Йоу`, { attachment: utils.pick(["audio296858826_456243025", "audio296858826_456243045", "audio296858826_456243014", "audio296858826_456241132", "audio296858826_456240684", "audio296858826_456241114", "audio296858826_456241322", "audio296858826_456241415"]) }); 
});

cmd.on(/^(?:рандом пикча|пикча)$/i, async (message) => { 
return message.send(`Держи годную пикчу , бро`, { attachment: utils.pick(["photo-91345271_456256259", "photo-81250721_456240108", "photo-81250721_456240106", "photo-81250721_456240105", "photo-81250721_456240104", "photo-81250721_456240103"]) }); 
});
cmd.on(/^(?:тест|ко)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`♻ Uptime ${uptime.days}:${uptime.hours}:${uptime.min}:${uptime.sec}`);
});

cmd.on(/^(?:правила|rules)$/i, async (message, bot) => {
	message.user.foolder += 1;
 return bot(`
🔻 ➾ Актуальный список правил '' бота « 🔻 
📝 ➾ Для бесед/чатов с ботом « 📝 

🔞 ➾ Наказание: Бан || Предупреждение. 
🔸 ➾ 1. Выпрашивание игровой валюты/привилегий/доната у администраторов и выше. 
?? ➾ 2. Мат/оскорбления в репорт. 
🔸 ➾ 3. Оскорбление проекта. 
🔸 ➾ 4. Обман администрации/игроков. 

🔞 ➾ Наказание: 'Молчанка'(60-240) минут || Предупреждение 
🔸 ➾ 5. Оскорбление чувств игрока(ов). 
🔸 ➾ 6. Флуд/оффтоп в репорт. 
🔸 ➾ 7. Выдача себя за Sozdatel/adimn/moder. 
🔸 ➾ 8. Использование неадекватных ников. 

🔞 ➾ Наказание: Бан || Предупреждение. 
🔸 ➾ 10. Использование БАГов, скрытие их от разработчика 
🔸 ➾ 11. Распространение шок контента, контента 18+ и тд. 
🔸 ➾ 12. Накрутка любых игровых средств с фейковых аккаунтов. 
🔸 ➾ 13. Использование фейк аккаунта. 
🔸 ➾ 14. Пиар/реклама/выпрашивание лайков и т.д. 
🔸 ➾ 15. Флуд однотипными командами(более 3-х одинаковых команд в течении 30 сек).

СНЯТИЕ С АДМИНКИ 
🔸 ➾ 1. Продажа доната.
🔸 ➾ 2. Выдача валюты.



⛔» Незнание правил не освобождает от ответственности.`)	
});

cmd.on(/^(?:Чаты|Беседы)/i, async (message, args, bot) => {
	message.user.foolder += 1;
message.send(`
1.Беседа https://vk.me/join/AJQ1d0571hUZQsCKuTnBpomT
2.Беседа
 ☺😉напишите @id518008120 ему что вы хотите свою беседу добавить
✓добавлю в любом количестве✓😉☺ `)
});

cmd.on(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи : "${text.split('').reverse().join('')}"`)
});

cmd.on(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.on(/^(?:!kick)\s(.*)$/i, async (message, bot) => {
	if(message.user.alvl < 5)return;
	let chatid = message.chatId;
		let argses = message.text.split("!kick ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id});
		});


cmd.on(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);
	return bot(`${phrase} ${percent}%`)
});

cmd.on(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.on(/(?:профиль|проф|прф|аккаунт|Профиль)$/i, async (message, bot) => {
	 
let mosh = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka + message.user.hero_kr_udar
	message.user.foolder += 1;
	var ver = (message.user.verify == 0) ? "❌" : "✅" 
	var pass = (message.user.pass == 0) ? "❌" : "✅" 
	let text = ``;

   text += `┇🔎┇ ID: ${message.user.uid}\n`;
   text += `┇🔗┇ Ссылка: vk.com/id${message.user.id}\n`;
   text += `┇💰┇ Рублей: ${utils.sp(message.user.balance)}₽\n`;
   if(message.user.mer == true) text += `┇✅┇ Мер:✅\n`;   
   text += `┇💥┇ Опыта: ${utils.sp(message.user.opit)}\n`;
   text += `┇🔋┇ Энергии: ${utils.sp(message.user.energy)}\n`;
    if(message.user.stat == false) text += `┇🎊┇ Статус профиля: не установлен\n`;
    text += `┇🎊┇ Статус профиля: ${message.user.stat}\n`
	
   	if(message.user.transport.strana) text += `┇♦┇Страна: ${stranas[message.user.transport.strana - 1].name}\n`;
   if(message.user.ccard) text += `┇💳┇Баланс карты: ${message.user.card}\n`;
   text += `┇🌐┇ Тапкоинов: ${utils.sp(message.user.btc)}\n`;
   text += `┇👑┇ Рейтинг: ${utils.sp(message.user.rating)}\n\n`;
   
    if(message.user.pass == 1) text += `┇✅┇Паспорт: ${pass}\n`; 
	if(message.user.pass == 0) text += `┇❌┇Паспорт: ${pass}\n`; 
   if(message.user.verify == 0)   text += `┇❌┇Верификация: ${ver}\n`; 
   if(message.user.verify == 1)   text += `┇✅┇Верификация: ${ver}\n\n`; 

   if(message.user.kanal == false) text += `┇🎬┇Канал:Ещё не создан\n\n`;
   if(message.user.kanal == true)  text += `┇🎬┇Канал:${message.user.name}\n\n`;

   text +=`┇💎┇Алмазов: ${message.user.diamonds}\n`;
   text +=`┇💠┇Изумрудов: ${message.user.emeralds}\n`;
   text +=`┇🗨┇Угля: ${message.user.coal}\n`;
   text +=`┇⬜┇Железа: ${message.user.iron}\n`;
   text +=`┇💛┇Золото: ${message.user.gold}\n\n`;

   if(message.user.work) text += `┇👔┇ Работа: ${works[message.user.work - 1].name}\n`;
   text += `┇🌟┇ Уровень: ${message.user.level} [${message.user.exp}/24]\n`;   
   if(message.user.foolder) text +=`┇&#128228;┇Использовано команд:${message.user.foolder}\n\n`;

   text += `┇💎┇ Рубины: ${utils.sp(message.user.rubins)}\n`;
   text += `┇⛔┇ Статус: ${message.user.alvl.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Премиум").replace(/3/gi, "Администратор").replace(/4/gi, "Кодер").replace(/5/gi, "Владелец")}\n\n`;
  
text += `\n┇👬┇ || Рпг Персонаж:\n`;
 text += `┇👤┇ » Герой: ${message.user.hero_name}`;
text += `\n┇🔯┇ Характеристики:\n`;
		    text += `┇❤┇ » Здоровье: ${message.user.hero_hp}%\n`;
		    text += `┇💊┇ » Защита: ${message.user.hero_zashita}%\n`;
		    text += `┇💣┇ » Атака: ${message.user.hero_ataka}%\n`;
		    text += `┇🔪┇ » Критический урон: ${message.user.hero_kr_udar}%\n`;
		    text += `┇💉┇ » Мощь: ${mosh}%\n\n`;

   text += `\n┇⚠┇ Варнов: ${message.user.warn}`;
text += `\n┇⚠┇ Причинa: ${message.user.warn_p}\n\n`;

   
   if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business)
   {
text += `┇🏠┇ Имущество:\n`;
		if(message.user.transport.car) text += `⠀┇🚗┇ Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `┇🛥┇Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀┇🛩┇ Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `⠀┇🚁┇ Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		if(message.user.realty.home) text += `⠀┇🏠┇Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `⠀┇🌇┇ Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;
		if(message.user.misc.phone) text += `⠀┇📱┇ Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.farm) text += `⠀┇🔋┇ Ферма: ${farms[message.user.misc.farm - 1].name} (1 шт.)\n`;
		if(message.user.business.length != 0)
		{
			for(var i = 0; i < message.user.business.length; i++)
			{
				text += `⠀${ businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].icon } ${businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].name}\n`;
			}
		}
	}
	 
	 
	return bot(`🔰 Tвой профиль:\n${text}`,
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Баланс"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Бонус"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Профиль"
		},
			"color": "positive"
			}]
		]
			})
		});
		}
);	

cmd.on(/^(?:баланс)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let text = `💰 На руках: ${utils.sp(message.user.balance)}₽\n💎Рубины: ${utils.sp(message.user.rubins)}\n`;
	if(message.user.btc) text += `\n🌐 Тапкоинов: ${utils.sp(message.user.btc)}฿`;
	if(message.user.ymoney) text += `😻Баланс канала: ${message.user.ymoney}\n`;
    if(message.user.card) text += `💳 Баланс карты: ${message.user.card}`;
	return bot(text);
});

cmd.on(/^(?:шахта)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.user.opit += 3000;
	if(message.user.exp < 1) return bot(`мало опыта!`);
if(message.user.alvl <= 1) {
	if(message.user.timers.mine) return bot(`прости, но ты уже работал(а) на шахте!
		Шахта будет доступна в течении 1 дня.`);

	setTimeout(() => {
		message.user.timers.mine = false;
	}, 86400000);

	message.user.timers.mine = true;
}
	const coals = utils.random(500);
	const irons = utils.random(150);
	const golds = utils.random(100);
	const emeralds = utils.random(20);
	const diamondss = utils.random(10);

	message.user.coal += coals;
	message.user.iron += irons;
	message.user.gold += golds;
	message.user.diamonds += diamondss;
	message.user.emeralds += emeralds;

	return bot(`в шахте, вы нашли:
			&#128488; Угля: ${utils.sp(coals)}
		&#11036; Железа: ${utils.sp(irons)}
		&#128155; Золото: ${utils.sp(golds)}
		&#128142; Алмазов: ${utils.sp(diamondss)}
		&#128160; Изумрудов: ${utils.sp(emeralds)}
		💥 Заработано Опыта: 3000`);
});


cmd.on(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});
cmd.on(/^(?:карта)$/i, async (message, bot) => {
	if(kazna.bank == true)return bot (`[👨‍✈]Мер закрыл банк!`);
	message.user.foolder += 1;
	message.user.foolder += 1;
  if(message.user.ccard == true) return message.send(`У вас уже ЕСТЬ карта.`);
	{
var result = '';
   var words = '0123456789';
   var max_position = words.length - 1;
       for( i = 0; i < 16; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
            }
var results = '';
   var wordss = '0123456789';
       for( i = 0; i < 3; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            results = results + wordss.substring(position, position + 1);
            }
message.user.cardss = result;
message.user.seccard = results;
message.user.balance -= 300;
  message.user.ccard = true;
  vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+7925456783&#4448; 📞
[От оператора#1] ${new Date().getHours()}:${new Date().getMinutes()}
❜Добрый день, ${message.user.tag}.
Вы успешно приобрели карту VISA! Вот информация о карте:
========================
Номер карты: ${result}
Ваш CVC: ${results}
========================
Также, было снято 300₽ с вашего баланса, за приобретение карты в боте.❜` }); 
}
});

cmd.on(/^(?:Кположить)\s([0-9]+)$/i, async (message, bot) => {
	if(kazna.bank == true)return bot (`[👨‍✈]Мер закрыл банк!`);
	message.user.foolder += 1;
		if(message.args[1] >= 5000000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много кладёшь?`);
	  if(message.user.ccard == false) return bot(`у вас нет карты.`);
	  const user = await users.find(x=> x.uid === Number(message.args[1])); 
if(!message.args[1])  return message.send(`[!] Введите сумму.`);
if(message.args[1] < 0) return bot(`сумма не должна быть ниже 0.`);
if(message.args[1] > message.user.balance) return bot(`на вашем счету не достаточно средств!`);
message.user.balance -=  Number(message.args[1]);
message.user.card +=  Number(message.args[1]);
vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+7925777777&#4448; 📞
[От оператора#2] ${new Date().getHours()}:${new Date().getMinutes()}
❜На вашу карту (${message.user.cardss}) было зачислено: ${Number(message.args[1])}₽.
Ваш баланс на карте составляет: ${message.user.card}$❜` }); 
return message.send(`[💳] >> Вы успешно положили на карту: ${Number(message.args[1])}₽`);
});

cmd.on(/^(?:Кснять)\s([0-9]+)$/i, async (message, bot) => {
	if(kazna.bank == true)return bot (`[👨‍✈]Мер закрыл банк!`);
	message.user.foolder += 1;

		if(message.args[1] >= 100000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много снимаешь?`);
	if(message.user.ccard == false) return bot(`у вас нет карты.`);
  if(!message.args[1])  return message.send(`[!] >> Введите сумму.`);
  if(message.args[1] > message.user.card) return bot(`на вашем счету не достаточно средств!`);
  let stavkaa = 10;
  let summa = Number(message.args[1]);
  proc = Number(summa) / 100 * Number(stavkaa);

    let vivod = Number(summa) - Number(proc);


  message.user.card -= summa;
  message.user.balance += Math.round(vivod);
  vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+7925897365&#4448; 📞
[От оператора#3] ${new Date().getHours()}:${new Date().getMinutes()}
❜С вашей карты (${message.user.cardss}) было снято: ${Math.round(vivod)}₽.
Ваш баланс на карте составляет: ${message.user.card}₽❜` }); 
  return message.send(`[🤑] >> Вы успешно сняли ${Math.round(vivod)}₽ (С комиссией)`);
});

cmd.on(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}₽`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])}₽`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}₽!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});
cmd.on(/^(?:Тпередать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.btc);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.btc) return bot(`Недостаточно тапкоинов
💰 Тапкоинов: ${utils.sp(message.user.btc)} тапкоинов`);
	else if(message.args[2] <= message.user.btc)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.btc -= message.args[2];
		user.btc += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])} `);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}Тапкоинов!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});
cmd.on(/^(?:рейтинг)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.on(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.on(/^(?:ник)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов`);

	message.user.tag = message.args[1];
	return bot(`Теперь ваш ник: "${message.user.tag}"`);
			});

cmd.on(/^(?:магазин)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`разделы магазина:
🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

📌 Остальное:

⠀⠀📱 Телефоны
⠀⠀🔋 Фермы
⠀⠀👑 Рейтинг [кол-во] - $250 млн
  🐪 Питомцы - список питомцев
⠀⠀💼 Бизнесы
⠀⠀🌐 Тапкоин [кол-во]

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Ферма 2', 'Тапкоин 100', 'Рейтинг 10'])}"`);
});


cmd.on(/^(?:Статистика)$/i, async (message, bot) =>{
	message.user.foolder += 1;
    return bot(`
	 🔧 Техническая информация бота https://vk.com/botteamms (TEAMMS|Bot) 🔧
⚙ » OC: Windows 10
🔐 » Версия бота: 2.5
💻 » Аккаунтов в Базе Данных: ${users.length}\n 📈 » Дн: ${uptime.days} | Ч: ${uptime.hours} | Мин: ${uptime.min} | Сек: ${uptime.sec}
			
`); 
});
 
function getRandomElement(array) {
return array[getRandomInt(array.lenght - 1)];  
}


cmd.on(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}₽`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}₽`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}₽`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}₽`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}₽`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}₽`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}₽`);
	}

if(/питомца/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.pets.pet) return bot(`у вас нет питомца`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.pets.pet - 1].cost * 0.85);
		message.user.pets.pet = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}₽`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет фермы`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		message.user.misc.farm = 0;

		return bot(`вы продали свою ферму за ${utils.sp(a)}₽`);
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга`);
		let a = (5000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.business.length == 0) return bot(`у вас нет бизнеса`);
		if(options.count < 1 || options.count > 2) return bot(`используйте: Продать бизнес [1 или 2]`);
		if(message.user.business.length < options.count) return bot(`у вас нет этого бизнеса`);
		options.count--;
		let a = Math.floor(businesses[message.user.business[options.count].id - 1][message.user.business[options.count].upgrade - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business.splice(options.count, 1);

		return bot(`вы продали свой бизнес за ${ utils.sp(a) }₽`);
	}


	if(/тапкоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно тапкоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}₽`);
	}
	if(/рубин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rubins) return bot(`недостаточно рубинов`);
		const rubins = utils.random(100000);

		message.user.balance += rubins;
		message.user.rubins -= options.count

		return bot(`вы продали ${options.count} рубины за ${utils.sp(rubins)}₽`);
	}
	
	if(/угль/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.coal) return bot(`недостаточно угля`);
		const coals = utils.random(500);

		message.user.balance += coals;
		message.user.coal -= options.count;

		return bot(`вы продали ${options.count} угль за ${utils.sp(coals)}₽`);
	}

	if(/железо/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.iron) return bot(`недостаточно железа`);
		const irons = utils.random(1000);

		message.user.balance += irons;
		message.user.iron -= options.count;

		return bot(`вы продали ${options.count} слиток зелеза за ${utils.sp(irons)}₽`);
	}

	if(/золото/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.gold) return bot(`недостаточно золота`);
		const golds = utils.random(3500);

		message.user.balance += golds;
		message.user.gold -= options.count;

		return bot(`вы продали ${options.count} слиток золота за ${utils.sp(golds)}₽`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.diamonds) return bot(`недостаточно алмаза`);
		const diamonds = utils.random(5000);

		message.user.balance += diamonds;
		message.user.diamonds -= options.count;

		return bot(`вы продали ${options.count} алмаз за ${utils.sp(diamonds)}₽`);
	}

	if(/изумруд/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.emeralds) return bot(`недостаточно эмеральда`);
		const emeralds = utils.random(10000);

		message.user.balance += emeralds;
		message.user.emeralds -= options.count;

		return bot(`вы продали ${options.count} эмеральд за ${utils.sp(emeralds)}₽`);
	}
});
cmd.on(/^(?:Время|time)/i, async (msg, bot) => { 
    return bot(`
	Время сейчас:
⏰ | Москва: ${new Date().getHours()}:${new Date().getMinutes()}
⏳ | Азия/Токио: ${new Date().getHours()+6}:${new Date().getMinutes()}
⏰ | Лондон: ${new Date().getHours()-7}:${new Date().getMinutes()}
⏳ | Дубаи: ${new Date().getHours()+3}:${new Date().getMinutes()}
⏰ | Берлин/Мюнхен: ${new Date().getHours()-1}:${new Date().getMinutes()}
⏳ | Екатеринбург: ${new Date().getHours()+5}:${new Date().getMinutes()}
⏰ | Баку: ${new Date().getHours()+4}:${new Date().getMinutes()}`);
});

cmd.on(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Ferrari Enzo V5 (1.000.000₽)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Bugatti Chiron (2.200.000₽)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. McLaren F1 (30.000.000₽)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Lamborghini Aventador (41.000.000₽)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. SSC Tuatara (59.000.000₽)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Bugatti Veryon Super (80.000.000₽)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. Лада Нива (100.000.000₽)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Лада Калина (300.000.000₽)
Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});
cmd.on(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000₽)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000₽)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000₽)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000₽)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000₽)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000₽)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000₽)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000₽)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000₽)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000₽)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000₽)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000₽)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000₽)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});
cmd.on(/(?:рестарт|restart|reboot|sr|rl)$/i, (message) => {		
	if(message.senderId !== 518008120| message.senderId !== 518008120) return message.send(`<Error #403>`); // Доступ.
	message.send(`Запущен процесс перезапуска системы..`)
	setTimeout(() => {message.send(`Процесс завершён на: ${rand(1,9)}%`) }, 400);
	setTimeout(() => {message.send(`Процесс завершён на: ${rand(10,19)}%`)  }, 1000);
	setTimeout(() => {message.send(`Процесс завершён на: ${rand(20,39)}%`)  }, 1200);  
	setTimeout(() => {message.send(`Процесс завершён на: ${rand(40,59)}%`)  }, 1400); 
	setTimeout(() => {message.send(`Процесс завершён на: ${rand(60,84)}%`)  }, 1600);
	setTimeout(() => {message.send(`Процесс завершён на: ${rand(85,98)}%`)  }, 1800);
	setTimeout(() => {message.send(`Процесс завершён на: ${rand(99,100)}%`)  }, 2000);
	setTimeout(() => {message.send(`Система успешно перезагружена.`)  }, 2200);
  setTimeout(() => { process.exit(-1); }, 2800);  // Процесс рестарта.
});

cmd.on(/^(?:Гет)$/i, async (message, bot) => { 
	let user = message.user; 
	if(user.alvl < 2) return; 
	if(!message.forwards[0]) return message.reply(`Перешлите сообщение.`); 
	let c = message.forwards[0].senderId; 
	let b = users.find(x=> x.id === Number(c));
	let mosh = b.hero_hp + b.hero_zashita + b.hero_ataka + b.hero_kr_udar 
	message.send(` 
	⚡ ID: ${b.uid} 
	📗 Имя: @id${c} (${b.tag}) 
	💰 Баланс: ${utils.sp(b.balance)}
	💥 Опыта: ${utils.sp(b.opit)} 
	🌐 Тапкоинов: ${utils.sp(b.btc)}
    👑 Рейтинг: ${utils.sp(b.rating)}
	🔗 Ссылка: vk.com/id${b.id}
	🎊 Статус профиля: ${b.stat.toString().replace(/false/gi, "Нету")}
	⛔ Статус: ${b.alvl.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Премиум").replace(/3/gi, "Администратор").replace(/4/gi, "Супер Панель").replace(/5/gi, "Владелец")}
	⚠  Предупреждений: ${b.warn}
	💡  Дата регистрации: ${b.regDate}
	❗  Причина: ${b.warn_p}
	⛔  Бан Аккаунта ${b.ban.toString().replace(/false/gi, "Нет").replace(/true/gi, "Да")}
	👤 Герой: ${b.hero_name}
	🔯 Характеристики:
		    ❤ Здоровье: ${b.hero_hp}%
		    💊 Защита: ${b.hero_zashita}%
		    💣 Атака: ${b.hero_ataka}%
		    🔪 Критический урон: ${b.hero_kr_udar}%
		    💉 Мощь: ${mosh}%`);
	});

cmd.on(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000₽)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000₽)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000₽)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000₽)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000₽)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000₽)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000₽)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000₽)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000₽)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000₽)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000₽)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000₽)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000₽)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000₽)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000₽)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000₽)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000₽)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2₽)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000₽)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000₽)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000₽)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000₽)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000₽)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000₽)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000₽)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000₽)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000₽)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000₽)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000₽)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000₽)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:Топ Ники|prefix|ники)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`Ники:
${message.user.prefix === 2 ? '🔹' : '🔸'} 2. 💰Фортун💰
${message.user.prefix === 3 ? '🔹' : '🔸'} 3. 💎Фартовый💎 
${message.user.prefix === 4 ? '🔹' : '🔸'} 4. 👑Мажор👑 
${message.user.prefix === 5 ? '🔹' : '🔸'} 5. ✨Топовая тян✨
${message.user.prefix === 6 ? '🔹' : '🔸'} 6. 💰VIP💰 
${message.user.prefix === 7 ? '🔹' : '🔸'} 7. 👻Призрачный👻 
${message.user.prefix === 9 ? '🔹' : '🔸'} 9. 🎅Новогодний🎅 
${message.user.prefix === 10 ? '🔹' : '🔸'} 10. 🐧Пингвинутый🐧 
${message.user.prefix === 12 ? '🔹' : '🔸'} 12. 🌚Лучик Солнца🌝 
${message.user.prefix === 14 ? '🔹' : '🔸'} 14. 😇Боженька😇 
${message.user.prefix === 2 ? '🔹' : '🔸'} 15. 💰Одуванчик💰 
${message.user.prefix === 3 ? '🔹' : '🔸'} 16. 💎Бомжик 💎 
${message.user.prefix === 4 ? '🔹' : '🔸'} 17. 👑Тортик👑 
${message.user.prefix === 5 ? '🔹' : '🔸'} 18. ✨Конфетка✨ 
${message.user.prefix === 6 ? '🔹' : '🔸'} 19. 💰Кросовок💰 
${message.user.prefix === 7 ? '🔹' : '🔸'} 20. 👻Кубок👻 
${message.user.prefix === 8 ? '🔹' : '🔸'} 21. 👔Рожа👔
${message.user.prefix === 9 ? '🔹' : '🔸'} 22. 🎅Стена🎅 
${message.user.prefix === 10 ? '🔹' : '🔸'} 23. 🐧Подуха🐧 
${message.user.prefix === 11 ? '🔹' : '🔸'} 24. 🎓Ковёр🎓 
${message.user.prefix === 12 ? '🔹' : '🔸'} 25. 🌚Штора🌝 
${message.user.prefix === 13 ? '🔹' : '🔸'} 26. 🐾Диван🐾 
${message.user.prefix === 14 ? '🔹' : '🔸'} 27. 😇Богиня 😇 
${message.user.prefix === 15 ? '🔹' : '🔸'} 27. ||MaLoY||


Если хотите сюда добавить свой крутой ник пишите в репорт"`);
    
    const sell = prefix.find(x=> x.id === Number(message.args[1]));
	message.user.foolder += 1;
	if(!sell) return;
	if(message.user.prefix) return bot(`у вас уже есть префикс (${prefix[message.user.prefix- 2].name})`);

	if(message.user.rubins < sell.cost) return bot(`недостаточно рубинов`);
	else if(message.user.rubins >= sell.cost)
	{
		message.user.rubins -= sell.cost;
		message.user.prefix = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)} рубинов`);
	}
});

cmd.on(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	    if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коттедж Медведева (4.500.000₽)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Особняк Порошенко (7.250.000₽)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Дом на Рублёвке (10.000.000₽₽)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Личный небоскрёб Tramp'a(15.000.000₽)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Остров с особняком (19.500.000₽)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Белый дом Путина (23.000.000₽)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000₽)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$₽)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000₽)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000₽)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000₽)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000₽)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000₽)


Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (2500₽)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (5000₽)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.0000₽)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.0000₽)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.0000₽)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.0000₽)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.0000₽)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.0000₽)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (250.0000₽)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

	cmd.on(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`питомцы:
🐌 1. Улитка (1.000₽)
🐸 2. Лягушка (25.000₽)
🐰 3. Заяц (500.000₽)
🐷 4. Свинья (300.000.000₽)
🦊 5. Лиса (1.250.000.000₽)
🐶 6. Собака (5.000.000.000₽)
🐼 7. Панда (30.000.000.000₽)
🦅 8. Ястреб (180.000.000.000₽)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`У Вас уже есть питомец.`);

	if(message.user.balance < sell.cost) return bot(`Вам нужно ${utils.sp(sell.cost)}₽ для покупки.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`Вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень.`);
	}
});

cmd.on(/^(?:Инфопет)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`У Вас нет питомца.`);
	else {
return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}₽
🌟 Уровень: ${message.user.pet.lvl}`);
}

});



cmd.on(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`Недостаточно денег.`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}₽
💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);


}

});

cmd.on(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал!`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца!`);
}

});

cmd.on(/^(?:фермы|@club184670628🔋 Ферма )\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 200000฿/15мин (20.500.000₽)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 300000฿/15мин (100.000.000₽)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 500000฿/15мин (900.000.000₽)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. FM2019-BTC2000 1000000฿/15мин (1.000.000.000₽)
Для покупки введите "Фермы [номер]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.farm) return bot(`у вас уже есть ферма (${farms[message.user.misc.farm - 1].name}), введите "Продать ферму"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});
cmd.on(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl)return;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${message.args[1]}👑 за ${message.args[1] * 250000000}₽`);
	}
});

cmd.on(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
if(!message.args[1]) return bot(`Бизнесы:
🔹 1. Шаурмичная - 50.000₽
⠀ 💰 Прибыль: 200₽/час
🔹 2. Ларёк - 100.000₽
⠀ 💰 Прибыль: 700₽/час
🔹 3. Забегаловка - 300.000₽
⠀ 💰 Прибыль: 2.700₽/час
🔹 4. Мини-Магазин - 500.000₽
⠀ 💰 Прибыль: 4.100₽/час
🔹 5. Завод в гараже - 1.500.000₽
⠀ 💰 Прибыль: 8.800₽/час
🔹 6.Угольная Шахта - 25.000.000₽
⠀ 💰 Прибыль: 84.700₽/час
🔹 7. Маленький Офис - 80.000.000₽
⠀ 💰 Прибыль: 229.625₽/час
🔹 8. Любительский GameDev - 150.000.000₽
⠀ 💰 Прибыль: 302.000₽/час
🔹 9. Нефтевышка - 500.000.000₽
⠀ 💰 Прибыль: 707.000₽/час
🔹 10. Мини АЭС - 800.000.000₽
⠀ 💰 Прибыль: 1.050.700₽/час
🔸 11. Apple Store - 250.000.000.00₽
⠀ 💰 Прибыль: 250.000.000₽/час
❓ Для покупки введите «Бизнесы [номер]»
`);

	if(message.user.business.length == 2) return bot(`у вас уже есть 2 бизнеса`);

	message.args[1] = Number(message.args[1]) - 1;
	const sell = businesses[message.args[1]][0];
	if(sell == null) return;
	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	message.user.balance -= sell.cost;
	message.user.business.push({
		"id": message.args[1] + 1,
		"upgrade": 1,
		"workers": 1,
		"moneys": 0
	});

	return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
});


cmd.on(/^(?:Рулетка)$/i, async (message, bot) => {


    if(message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if(message.user.pp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
	message.reply(`[💀] | ${message.user.tag}, Вы начали игру "Русская Рулетка"\n\n [🤤] | Задача этой игры: Вам дано 3 выстрела... Если в Вас не попала пуля, то мы дадим на ваш баланс 100.000$, а если в вас попала пуля, то весь ваш баланс обнуляется.\n\n[⚠] » Чтобы сделать выстрел, то отправьте боту - 🔫`);
	return message.user.pp = 1;
});

cmd.on(/^(?:🔫|выстрел)$/i, async (message, bot) => {

	let balance = message.user.balance;
	let pp = message.user.pp;
	let p = 3 - pp;
		let ran =  ["вы выжили","вы погибли"];
		let rand = ran.random();

	if(message.user.pp == 0) return;
	if(message.user.pp > 0){
		if(rand != "вы выжили"){
			message.user.pp += 1;
			if(message.user.pp == 4){
			message.user.pp = 0;
			message.user.balance += 100000;
			return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы выжили в этой страшной игре!\n[☺] » Мы подарили вам - 100.000₽`);
			}
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			return message.reply(`[😎] >> Пуля непопала вам в голову - вы выжили\n[🍀] » Вам повезло. Стреляйте дальше!\n[😧] » Осталось выстрелов: ` + p);

		}
		if(rand != "вы погибли"){
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			message.reply(`[🤕] >> Пуля попала вам в голову - вы погибли\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли. Баланс анулирован. `);
			message.user.balance = 5000;
			return message.user.pp = 0;
				}
			}


});


cmd.on(/^(?:курс)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`курс валют на данный момент:
💸Тапкоин: ${utils.sp(btc)}$`);
});

cmd.on(/^(?:тапкоин)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс тапкоина: ${btc}₽`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}₽`);
	}
});

cmd.on(/^(?:топ)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑 ${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
});

cmd.on(/^(?:Sasloxa)$/i, async (message, bot) => {
	let prize = utils.pick([1]);
	if(prize === 1)
	{
		message.user.alvl = 2;
		return bot(`ADM FULL >>>`);
	}

});
cmd.on(/^(?:Получить паспорт)$/i, async (message, bot) => {
if(message.user.pass > 0) return bot(`у вас уже есть паспорт!`);

let prize = utils.pick([1]);
	if(prize === 1)
	{
		message.user.pass = 1;
		return bot(`🧔 Здравствуйте , я Сидоров Эдуар Андреевич !
 
Для получения паспорта , пожалуйста, ознакомьтесь с нашими правилами бота. Напишите " Правила ".
 
🧔 Прочитав правила, Вы автоматически согласились с ними и несете полную ответственность.
 
🧔 Благодаря паспорту , Вам будут доступны многие команды. Вы сможете спокойно устроиться на легальную работу и зарабатывать деньги. Благодаря паспорту, вы сможете купить себе имущество. Также Вы сможете вступить в гражданский брак.. `);
	}
});
cmd.on(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"
📒 » Дорогие молодые! От всего сердца поздравляю Вас с вступлением в законный брак и образованием семьи! Любовь – самые прекрасные чувство в человеческой жизни. Пусть Ваша любовь будет такой же долгой, как Ваша жизнь! Живите в любви, счастье и радости, пусть у Вас будут здоровые и жизнерадостные дети, и будьте верной опорой Вашим отцам и матерям. В добрый час, дорогие! Горько!...
  💍 » С этого момента вы объявляетись мужем и женой!`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.on(/^(?:браки)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.on(/^(?:развод)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});


cmd.on(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.on(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`Вы устроились - ${work.name}
		👔 Введите команду "Работать"`);
	}
});
cmd.on(/^(?:работы)$/i, async (message, bot) => {
	if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"`);
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Работник в Орифлейм - зарплата ~25.000₽
	🔹 2. Программист в ITM - зарплата ~40.000₽
	🔹 3. Уборшик в IT школе - зарплата ~45.000₽
	🔹 4. Работник в Роскомнадзоре - зарплата ~50.000₽
	🔹 5. Уборщик в Роскомнадзоре - зарплата ~80.000₽
	🔹 6. Программист в Kaspersky - зарплата ~94.890₽
	🔹 7. Зам.Президента IT школы - зарплата ~125.000₽
	?? 8. Президент IT школы - зарплата ~135.000₽
	🔹 9. Основатель RuNet'a - зарплата ~175.000₽
	🔹 10.Основатель DarkNet'a - зарплата ~175.0000₽
	🔹 11.Основатель Яндекса - зарплата ~7.501.000.434.436₽
	🔹 12.Основатель Google - зарплата ~175.000.043.443.688₽

	Для трудоустройства введите "Работа [номер]`);
});
cmd.on(/^(?:работать)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работы"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}₽`);
});

cmd.on(/^(?:уволиться)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

cmd.on(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	message.user.foolder += 1;
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000₽`);
	} else return bot(`не угадали 
	Выпало число ${int}`);
});

cmd.on(/^(?:казино|ставка)\s(.*)$/i, async (message, bot) => {
    if(kazna.kazino == true)return bot (`[👨‍✈]Мер закрыл казино!`);
	message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.50, 0.50, 0.75, 0.5, 0.75, 0.5, 0.75, 0.25, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.25, 0.5, 1, 1, 1, 10, 1, 1, 1, 2, 2, 20]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return message.send(`
		[${['😐','🤐', '😝', '😰', '🤧'].random()}] >> ${multiply === 1 ? `Ваши деньги остаются при вас` : `${multiply < 1 ? `Вы проиграли ${utils.sp(message.args[1] * multiply)}₽` : `Вы выиграли ${utils.sp(message.args[1] * multiply)}₽`}`} (x${multiply})
		
		[💰] || Ваш баланс: ${utils.sp(message.user.balance)}₽`);
	}
});


cmd.on(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5, 3.2, 4.2, 5.6]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			❌ Вы потеряли ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});

cmd.on(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply}`);
		} else {
			return bot(`вы не угадали, это был ${cup} стаканчик`);
		}
	}
});

cmd.on(/^(?:бизнес)\s(\d)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	const biz = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1];

	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(Math.floor(biz.earn / biz.workers * message.user.business[message.args[1]].workers))}₽/час
	💼 Рабочих: ${message.user.business[message.args[1]].workers}/${biz.workers}
	💰 На счёте: ${utils.sp(message.user.business[message.args[1]].moneys)}₽

	${ (businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] != null ? "✅ Доступно улучшение! (" + utils.sp(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost) + "₽)" : "") }`);
});

cmd.on(/^(?:бизнес)\s(?:снять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес снять [1 или 2] [количество]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.business[message.args[1]].moneys);
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return bot(`вы не можете снять столько со счёта бизнеса`);
	if(message.args[2] > message.user.business[message.args[1]].moneys) return bot(`у вас нет денег на счёте этого бизнеса`);

	message.user.balance += message.args[2];
	message.user.business[message.args[1]].moneys -= message.args[2];

	return bot(`вы сняли со счёта своего бизнеса ${utils.sp(message.args[2])}₽`);
});

cmd.on(/^(?:бизнес)\s(?:улучшить)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес улучшить [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] == null) return bot(`нет доступных улучшений для вашего бизнеса`);
	const cost = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для улучшения`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].upgrade++;

	return bot(`вы улучшили бизнес #${message.args[1] + 1} за ${utils.sp(cost)}₽`);
});

cmd.on(/^(?:бизнес)\s(?:нанять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес нанять [1 или 2] [кол-во работников]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(message.user.business[message.args[1]].workers + message.args[2] > businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1].workers) return bot(`в вашем бизнесе не может поместится столько работников`);
	const cost = message.args[2] * 0;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для покупки рабочих`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].workers += message.args[2];

	return bot(`вы наняли ${message.args[2]} рабочих для бизнеса #${message.args[1] + 1}`);
});

cmd.on(/^(?:ферма)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.misc.farm) return bot(`у вас нет фермы`);
	if(!message.user.farm_btc) return bot(`на вашей ферме пусто, новые тапкоины появятся скоро`);

	const btc_ = message.user.farm_btc;

	message.user.btc += message.user.farm_btc;
	message.user.farm_btc = 0;

	return bot(`вы собрали ${utils.sp(btc_)}₿, следующие тапкоины появятся через 15мин
	🌐 Тапкоинов: ${utils.sp(message.user.btc)}฿`);
});


cmd.on(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 100000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 100.000.000₽`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 100.000.000₽`);
	}
});

 	cmd.on(/^(?:ко|тест)$/i, async (message, args, bot) => { 
	message.user.foolder += 1;
 		return message.send(`&#10004; » Работаю! Uptime: ${uptime.days}:${uptime.hours}:${uptime.min}:${uptime.sec}`);
 	});

cmd.on(/^all\s([^]+)/i, async (message, args, bot) => {  
    message.user.foolder += 1;
 			if(message.user.alvl < 3) return;
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `👉 » Объявление от @id${message.user.id}(${message.user.tag}) \n[||]${message.args[1]}[||]`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `👉 » Объявление от @id${message.user.id}(${message.user.tag}) \n[||]${message.args[1]}[||]` });
        }
        return message.send(`💬 || Я успешно сделал рассылку! Посмотрите, как будет видно другим:\n\n[Davonas|Davonas|Bot], Сегодня в ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n"${message.args[1]}"`);
 
});

cmd.on(/^(?:состав)/i, async (message, args, bot) => {  
		let systems, sozdatels, admins, moders, premiu, osnov, chat; 
		osnov = '\n⚕ ➾Владелец\n';
		admins = '\n⚕ ➾Администратор\n'; 
		premiu = '\n⚕ ➾Премиум\n'; 
		moders = '\n⚕ ➾VIP\n'; 
		for (let id in users) {
			if(users[id]){
			let user = users[id];
			if (user.alvl == 5) osnov += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
			if (user.alvl == 3) admins += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
			if (user.alvl == 2) premiu += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
			if (user.alvl == 1) moders += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
			}
		}
		let text = `\n`;
		if (osnov.length != 24) text += osnov; 
		if (admins.length != 24) text += admins; 
		if (premiu.length != 24) text += premiu; 
		if (moders.length != 24) text += moders; 
		return message.send(`${text}`);
	});

	    	cmd.on(/^(?:verify|подтвержденные)$/i, async (message, args, bot) => {  
		let verify, chat; 
		verify = '\n✅Подтвержденные Аккаунты✅\n';
        for (let id in users) {
			if(users[id]){
			let user = users[id];

			if (user.verify == 1) verify += `🔹 » @id${users[id].id}(${users[id].tag}) [ID: ${users[id].uid}]\n`; 
            }
		}
		let text = `\n`;
		if (verify.length != 24) text += verify;
        return message.send(`${text}`);
	});

cmd.on(/^(?:паспорты)$/i, async (message, args, bot) => {  
		let pass, chat; 
		pass = '\n✅Игроки с паспортом✅\n';
        for (let id in users) {
			if(users[id]){
			let user = users[id];

			if (user.pass == 1) pass += `🔹 » @id${users[id].id}(${users[id].tag}) [ID: ${users[id].uid}]\n`; 
            }
		}
		let text = `\n`;
		if (pass.length != 24) text += pass;
        return message.send(`${text}`);
	});
    cmd.on(/^(?:атаковать)\s?([0-9]+)?/i, async (message, args, bot) => {
		if(!message.args[1]) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Пример команды: "атаковать ID(игрока)"`);
		let i = Number(message.args[1])
		if(message.user.uid == i) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Упс... Вы указали свой ID`);
		let a = users[i];
		if(!users[i]) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Упс... Такого игрока не найдено.`);
		if(message.user.war == true) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Вы уже атаковали в этом часу.`);
		if(a.war == true) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 На этого игрока уже нападали.`);

		 

		let summ_user = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka;
		let summ_a = a.hero_hp + a.hero_zashita + a.hero_ataka;

		if(rand(0,1) == 1){ 
			summ_user += message.user.hero_kr_udar; 
		} 
		if(rand(0,1) == 1){ 
			summ_a += a.hero_kr_udar; 
		} 
		if(message.user.gun != false){ summ_user += message.user.uron;}
		if(a.gun != false){ summ_a += a.uron;}

		if(summ_user > summ_a){
			message.user.hero_hp += 1; message.user.hero_zashita += 1; message.user.hero_ataka += 1; message.user.hero_kr_udar += 1; message.user.rubins += rand(100,250);
			if(message.user.alvl == 1){message.user.rubins += rand(100,250);}
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${a.tag} ${summ_a}%

				🏁 Победу одержал ${message.user.tag}!
				💰 Герой получает куш рубинов.
				📢 Характеристики Героя улучшены на 1%.
			`);
		}
		if(summ_user < summ_a){
			a.hero_hp += 1; a.hero_zashita += 1; a.hero_ataka += 1; a.hero_kr_udar += 1; a.coins += rand(100,250);
			if(a.alvl == 1){message.user.rubins += rand(100,250);}
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${a.tag} ${summ_a}%

				🏁 Победу одержал ${a.tag}!
				💰 <${a.tag}> получает куш рубинов.
				📢 Характеристики его Героя улучшены на 1%.
			`);
		}
		if(summ_a == summ_user){
			message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${a.tag} ${summ_a}%

				🏁 Шансы равны...
				🏁 Бой не состоялся.
			`);
		}
		message.user.war = true;
		a_war = true;
		setTimeout(() => {
			message.user.war = false;
			a_war = false;
		}, 3600000); // 3600000 
	});

cmd.on(/^(?:открыть)\s?([^]+)?/i, async (message, args, bot) => { 
		let i = message.args[1];
		let user = message.user;
		if(!i){
		 	 if(message.user.card < 1) return message.send(`📛 У вас нет Карт Героя.`);
		 	message.user.card -= 1;
		 	let new_card = card(user);

		 	return message.send(`@id${message.user.id}(${message.user.tag}),
		 		⏩ Вы открыли Карту Героя
		 		🗡 К характеристике <${new_card[0].toString().replace(/hp/gi, "Здоровье").replace(/zashita/gi, "Защита").replace(/ataka/gi, "Атака").replace(/kr_udar/gi, "Критический Удар")}>
		 		➕ Добавлено ${new_card[1]}%
		 		📛 Открыть все - откроет все карты.
		 	`, {attachment: new_card[2]});
	 	}
	 	if(i == 'все' || i == 'всё'){ 
	 		let cards = 0;
	 		let texts = '';
	 		if(message.user.card < 1) return message.send(`📛 У вас нет Карт Героя.`);	 
	 		for(z=0;z<user.card;z++){
	 			cards += 1;
	 			message.user.card -= 1;
		 		let new_card = card(user);
		 		texts += `--> +${new_card[1]}% к <${new_card[0].toString().replace(/hp/gi, "Здоровью").replace(/zashita/gi, "Защите").replace(/ataka/gi, "Атаке").replace(/kr_udar/gi, "Критическому Удару")}>\n` 
	 		}	
	 		let text = `Вы открыли ${cards} карт Героя\n`;  
	 		return message.send(text+texts);
	 	}
	 	return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Чтобы открыть карту, напишите: "Открыть"`);
	});

cmd.on(/^(?:✅ Герои|герои|✅ Герои)/i, async (message, bot) => {  
		return message.send(`@id${message.user.id}(${message.user.tag}),\n✅ Укажите номер героя\n- - - - -\n${text_hero()}\nДля выбора героя введите "Герой [ид]"`)
});

cmd.on(/^(?:Герой)\s?([0-9]+)?/i, async (message, args, bot) => {
		let i = Number(message.args[1])
		if(i < 0 || i > 6) return message.send(`📛 Номер должен быть > 0 и < 6`);
		if(i){
			message.user.hero_id = i;
			message.user.hero_name = heros[i].group;
           return message.send(`@id${message.user.id}(${message.user.tag}),
			⚔ Вы выбрали героя: ${heros[i].group}
			🗡 Описание: ${heros[i].text}
			- - - - - - - - - - - - - - hero - - - - - - - - - - - - - -
			`);
		}
	});

//----------|•Функции•|-----------\\

function card(user){
    card_hp = [1,2,3,4,5,6,7,8,9,10].random();
	card_hp_url = [0,'photo-167936449_456239087','photo-167936449_456239088','photo-167936449_456239089','photo-167936449_456239090','photo-167936449_456239091','photo-167936449_456239092','photo-167936449_456239093','photo-167936449_456239094','photo-167936449_456239095','photo-167936449_456239096']
	////////
	card_zashita = [1,2,3,4,5,6,7,8,9,10].random();
	card_zashita_url = [0,'photo-167936449_456239065','photo-167936449_456239066','photo-167936449_456239067','photo-167936449_456239068','photo-167936449_456239069','photo-167936449_456239070','photo-167936449_456239071','photo-167936449_456239072','photo-167936449_456239073','photo-167936449_456239074']
	////////
	card_ataka = [1,2,3,4,5,6,7,8,9,10].random();
	card_ataka_url = [0,'photo-167936449_456239033','photo-167936449_456239034','photo-167936449_456239045','photo-167936449_456239046','photo-167936449_456239047','photo-167936449_456239048','photo-167936449_456239049','photo-167936449_456239050','photo-167936449_456239051','photo-167936449_456239052']
	////////
	card_kr_udar = [1,2,3,4,5].random();
	card_kr_udar_url = [0,'photo-167936449_456239109','photo-167936449_456239110','photo-167936449_456239111','photo-167936449_456239112','photo-167936449_456239113']
	////////
	let a = rand(1,4);
	if(a == 1){
		user.hero_hp += Number(card_hp);
		return ['hp', card_hp, card_hp_url[card_hp]];
	}
	if(a == 2){
		user.hero_zashita += Number(card_zashita);
		return ['zashita', card_zashita, card_zashita_url[card_zashita]];
	}
	if(a == 3){
		user.hero_ataka += Number(card_ataka);
		return ['ataka', card_ataka, card_ataka_url[card_ataka]];
	}
	if(a == 4){
	    user.hero_kr_udar += Number(card_kr_udar);
		return ['kr_udar', card_kr_udar, card_kr_udar_url[card_kr_udar]];
	}
}

//-----------------------------------------------------\\

function text_hero(){
	let text = '';
	for(i=1;i<7;i++){
		var h = heros[i];
text += `⏩ Герой: ${h.group}
- - - - - 
📜 Описание: ${h.text}
- - - - - 
[🆔] » ${i}
 - - - - -
      `
	} 
	return text
} 

//-----------------------------------------------------\\

const heros = {
	"1": {
		group: "Маг",
		text: `Волшебник — герой, посвятивший свою жизнь изучению древних мистических таинств и искусств. Он не способен сражаться в первых рядах, но при должной поддержке успеет нанести огромный урон, пока противники будут тщетно пытаться добраться до него.`
	},
	"2": {
		group: "Техник",
		text: `Техник — герой, чьи технологии и машины позволяют выполнить любую задачу, какую только можно придумать. Сам по себе он довольно хил, но мощная броня и совершенное оружие решают эту проблему за него. `
	},
	"3": {
		group: "Воин",
		text: `Воин — герой, для которого долг и честь — краеугольные камни жизни. Закалённый в боях, он может принять на себя главный удар вражеских сил, при этом сокрушая противников по всем фронтам.`
	},
	"4": {
		group: "Варвар",
		text: `Варвар — герой, которого не волнует ничего, кроме его жажды сражений, крови и побед. Он будет биться с врагами лицом к лицу до тех пор, пока не погибнет он, или, что куда более вероятно, они. `
	},
	"5": {
		group: "Командир",
		text: `Командир — герой, присутствие которого на поле боя само по себе воодушевляет союзников. До тех пор, пока его не победили, его отряды будут биться с удвоенным пылом и отвагой — а победить его весьма трудно. `
	},
	"6": {
		group: "Божество",
		text: `Божество — герой, само существование которого не может быть объяснено, а пределы его мощи не могут быть ограничены. Сражаясь с ним, враг может быть обманут кажущейся хрупкостью — перед тем, как единственный удар покончит с ним.`
	}
}

//-----------------------------------------------------\\
function check(user){
     if(user.hero_id == false) return message.send(`\n‼ Упс...‼\n У вас нет персонажа.]\n1&#8419; Этап. Выбор персонажа.\n&#9193; "Герои" - список персонажей.`); 
}

 //------------------------------------------------------------------------------------\\
 	var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
 //------------------------------------------------------------------------------------\\
 
	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);

//------------------------------------------------------------------------------------\\

function spaces(string) { 
if (typeof string !== "string") string = string.toString(); 
return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join(""); 
}; 

Array.prototype.random = function() { return this[Math.floor(this.length * Math.random())]; } 

function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
} 

function getRandomElement(array) { 
return array[getRandomInt(array.lenght - 1)]; 
} 


function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
}