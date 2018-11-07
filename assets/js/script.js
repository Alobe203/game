var lvl = 1;
var expNumber = 3;
var exp = 0;
var yourHP;
var playerStats = [10];
var mobHP;
var mobTimer;
var attempts = 6;
var mobPower = 3;
var mobSkins = ['', '', ''];
var charId;


document.getElementById('warrior_label').onmousemove = function(){
	document.getElementsByClassName('warrior_desc')[0].style.display = 'inline-block';
	document.getElementById('warrior_label').onmouseleave = function(){
		document.getElementsByClassName('warrior_desc')[0].style.display = 'none';
	}
}

document.getElementById('mage_label').onmousemove = function(){
	document.getElementsByClassName('mage_desc')[0].style.display = 'inline-block';
	document.getElementById('mage_label').onmouseleave = function(){
		document.getElementsByClassName('mage_desc')[0].style.display = 'none';
	}
}

function expPlus(){
	if((exp+1)<expNumber){
		exp++;
	}
	else {
		expNumber = expNumber * 2;
		exp = 1;
		lvl++
	}
	document.getElementById('lvl').innerHTML = 'ваш уровень: ' + lvl;
	document.getElementById('exp').innerHTML = 'ваш опыт: ' + exp + '/' + expNumber;
}

function warriorGameplay(){//Спавн персонажа в мире.
	charId = 1;
	attempts = 6;
	document.getElementsByClassName('player')[0].style.background = 'url(https://vignette.wikia.nocookie.net/assassinscreed/images/8/88/DVD-Knight.png/revision/latest?cb=20160219123140&path-prefix=ru) top center / cover';
	document.getElementById('lvl').innerHTML = 'ваш уровень: ' + lvl;
	document.getElementById('exp').innerHTML = 'ваш опыт: ' + exp + '/' + expNumber;
	yourHP = playerStats[0];
	var spell1 = document.getElementsByClassName('ability')[0];
	var spell2 = document.getElementsByClassName('ability')[1];
	document.getElementById('game_start').style.display = 'none'
	document.getElementById('gameplay').style.display = 'block'
	document.getElementById('startFight').onclick = function spawnMob(){
		document.getElementsByClassName('mob')[0].style.background = 'url(' + mobSkins[getRandomInt(0, 3)] + ') top center / cover';
		mobHP = 10;
		document.getElementById('player_stats').innerHTML = 'Ваше здоровье: ' + Math.floor(yourHP);
		document.getElementById('mob_stats').innerHTML = mobHP;
		document.getElementById('startFight').style.display = 'none';
		document.getElementById('fightWindow').style.display = 'block';
		spell1.style.background = 'url(https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png) top center / cover';
		spell2.style.background = 'url(https://cdn1.iconfinder.com/data/icons/feather-2/24/shield-512.png) top center / cover';
		document.getElementById('whoAttack').innerHTML = 'Ваш ход (' + attempts + ')';
		spell1.onclick = function playerAttack(){ //Атака на цифру 1.
			attempts = attempts - 1;
			var damage = getRandomInt(2, 4);
			mobHP = mobHP - damage;
			document.getElementById('player_stats').innerHTML = 'Ваше здоровье: ' + Math.floor(yourHP);
			hpCheaker();
			document.getElementById('cd_abilities').style.display = 'block';
			document.getElementById('whoAttack').innerHTML = 'Ход противника';
			if(mobHP > 0){
				mobTimer = setTimeout(mobAttack, 1000);
			}
		}
		function mobAttack(){
			var mobDamage = getRandomInt((mobPower*1.5), (mobPower/1.5));
			yourHP = yourHP - mobDamage;
			document.getElementById('mob_stats').innerHTML = mobHP;
			document.getElementById('cd_abilities').style.display = 'none';
			document.getElementById('whoAttack').innerHTML = 'Ваш ход (' + attempts + ')';
			hpCheaker();
			mobPower = 3;
		}
		spell2.onclick = function playerShield(){//Атака на цифру 2
			attempts = attempts - 1;
			document.getElementById('whoAttack').innerHTML = 'Ваш ход (' + attempts + ')';
			alert('Вы подняли щит перед собой!');
			mobPower = 0;
		}
	}
}

function mageGameplay(){//Спавн мага
	charId = 2;
	attempts = 6;
	document.getElementsByClassName('player')[0].style.background = 'url(https://vignette.wikia.nocookie.net/wowwiki/images/2/20/Jaina_Cataclysm%27.png/revision/latest?cb=20150402171233) top center / cover'
	document.getElementById('lvl').innerHTML = 'ваш уровень: ' + lvl;
	document.getElementById('exp').innerHTML = 'ваш опыт: ' + exp + '/' + expNumber;
	yourHP = playerStats[0]-2;
	var spell1 = document.getElementsByClassName('ability')[0];
	var spell2 = document.getElementsByClassName('ability')[1];
	document.getElementById('game_start').style.display = 'none';
	document.getElementById('gameplay').style.display = 'block';
	document.getElementById('startFight').onclick = spawnMob()
		function spawnMob(){
			document.getElementsByClassName('mob')[0].style.background = 'url(' + mobSkins[getRandomInt(0, 3)] + ') top center / cover';
			mobHP = 10;
			document.getElementById('player_stats').innerHTML = 'Ваше здоровье: ' + Math.floor(yourHP);
			document.getElementById('mob_stats').innerHTML = mobHP;
			document.getElementById('startFight').style.display = 'none';
			document.getElementById('fightWindow').style.display = 'block';
			spell1.style.background = 'url(https://darkandlight.wiki.fextralife.com/file/Dark-and-Light/StaffHead_IceArrow_level1.png) top center / cover';
			spell2.style.background = 'url(https://banner2.kisspng.com/20180619/ijf/kisspng-indoor-cannabis-growing-cannabis-sativa-tetrahydro-charity-icon-5b28d6d7879ec4.9273042715294030955555.jpg) top center / cover';
			document.getElementById('whoAttack').innerHTML = 'Ваш ход (' + attempts + ')';
		}
		spell1.onclick = function playerAttack(){ //Атака на цифру 1.
			attempts = attempts - 1;
			var damage = getRandomInt(2, 5);
			mobHP = mobHP - damage;
			document.getElementById('player_stats').innerHTML = 'Ваше здоровье: ' + Math.floor(yourHP);
			hpCheaker();
			document.getElementById('cd_abilities').style.display = 'block';
			document.getElementById('whoAttack').innerHTML = 'Ход противника';
			if(mobHP > 0){
				mobTimer = setTimeout(mobAttack, 1000);
			}
		}
		function mobAttack(){
			var mobDamage = getRandomInt((mobPower*1.5), (mobPower/1.5));
			yourHP = yourHP - mobDamage;
			document.getElementById('mob_stats').innerHTML = mobHP;
			document.getElementById('cd_abilities').style.display = 'none';
			document.getElementById('whoAttack').innerHTML = 'Ваш ход (' + attempts + ')';
			hpCheaker();
			mobPower = 3;
		}
		spell2.onclick = function playerHealing(){//Атака на цифру 2
			var healingPower = getRandomInt(2, 5) 
			attempts = attempts - 1;
			document.getElementById('whoAttack').innerHTML = 'Ваш ход (' + attempts + ')';
			alert('Вы исцелили себя на ' + healingPower + ' здоровья');
			yourHP = yourHP + healingPower;
			hpCheaker();
		}
	}
//}


//хп чекер
function hpCheaker(){
	if(attempts > 0){
		if(yourHP <= 0){
			yourHP = 0;
			document.getElementById('player_stats').innerHTML = yourHP;
			death();
		}
		else if(mobHP <= 0){
			mobHP = 0;
			document.getElementById('mob_stats').innerHTML = mobHP;
			mobKill();
		}
		else {
			document.getElementById('player_stats').innerHTML = 'Ваше здоровье: ' + Math.floor(yourHP);
			document.getElementById('mob_stats').innerHTML = mobHP;
		}
	}
	else {
		alert('Вы погибаете, так как очень долго вели бой(ходы закончились)');
		location.reload();		
	}
}

//смерть персонажа
function death(){
	alert('Вы погибли');
	location.reload();
}

//убийство моба
function mobKill(){
	expPlus();
	alert('Вы победили');
	clearTimeout(mobTimer);
	document.getElementById('fightWindow').style.display = 'none';
	if(charId == 1){
		warriorGameplay();
	}
	else {
		mageGameplay();
	}
}

//генератор рандом чисел
function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}
