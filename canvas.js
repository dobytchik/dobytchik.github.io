var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
//Переменные управления
var leftPressed = false;
var topPressed = false;
var rightPressed = false;
var bottomPressed = false;
var jumpPressed = false;
//Координаты машины
var xCar = 0;
var yCar = 0;
//Скорость машины
var speedCar = 10;
//Размеры машины
var widthCar = 100;
var heightCar = 40;
//Значение гравитации
var strongGravity = 5;
//Размеры холста
cvs.width = '1300';
cvs.height = '500';
//Отслеживание нажатия клавишь на клавиатуре
document.addEventListener('keydown', down, false);
document.addEventListener('keyup', up, false);
//Подтверждение нажатия клавишь управлени
function down(e) {
	if (e.keyCode == 37) leftPressed = true;
	if (e.keyCode == 38) topPressed = true;
	if (e.keyCode == 39) rightPressed = true;
	if (e.keyCode == 40) bottomPressed = true;
	if (e.keyCode == 32) jumpPressed = true;
}
//Подтверждение нажатия клавишь отмены управлени
function up(e) {
	if (e.keyCode == 37) leftPressed = false;
	if (e.keyCode == 38) topPressed = false;
	if (e.keyCode == 39) rightPressed = false;
	if (e.keyCode == 40) bottomPressed = false;
	if (e.keyCode == 32) jumpPressed = false;
}
//Условия выполнения нажатий
function check() {
	if (leftPressed && xCar > 0) xCar -= speedCar;
	if (topPressed && yCar > 0) yCar -= speedCar;
	if (rightPressed && xCar < cvs.width - widthCar) xCar += speedCar;
	if (bottomPressed && yCar < cvs.height - heightCar) yCar += speedCar;
}
//Описание машины
function car() {
	ctx.fillRect(xCar, yCar, widthCar, heightCar);
	ctx.fillStyle = 'red';
}
//Условие выполнения прыжка
function jump() {
	if (jumpPressed && yCar >= cvs.height - heightCar) {
		yCar = 100;
	}
	jumpPressed = false;
}
//Гравитация
function gravity() {
	if (yCar < cvs.height - heightCar){
		yCar += strongGravity;
	}
}
//Циклическая высшая функция
function draw(){
	ctx.clearRect(0, 0, cvs.width, cvs.height);
	check();
	car();
	jump();
	gravity();
	requestAnimationFrame(draw);
}
//Выполнение программы
draw();
