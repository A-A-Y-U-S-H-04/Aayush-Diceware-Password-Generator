 let colorlist = ['gold', 'yellow', 'turquoise', 'red', 'mistyrose','linen', '232, 113, 104']
 let words = new Map();

function preload() {
	loadStrings('beale.wordlist.asc.txt', createMap );
}
/**
 * This function goes through the word list line-by-line.
 * It then splits the line on any tab characters that appear, 
 *   recording only the first two as 'key' and 'value'
 * If the key is exactly five characters long, we assume the 
 *   line we are on is a line that contains a key/value pair
 *   then we store the word in the map with the key. 
 * 
 * This allows us to use the words Map later by simply using 
 *   a call to get, like so:
 * 
 * lookupKey = 12340
 * word = words.get(lookupKey)
 */

//Plan: I want to be able to have a passphrase appear for every letter of my name. My name, AAYUSH, has 6 letters, so when I press A, a phrase should appear and so forth
let lookupKey = "12342";
let password = "";

function generateLookupKey() {
 let key = "";
  const dieFaces = [1,2,3,4,5,6] 
  for( let i = 0; i < 5; i++ ) {
    // this string syntax embeds values into a string
    // the ${value} pattern indicates a value
    // that value is computed and then converted into a string
    // in this example there are two values:
    // key - which is the previous key
    // random(dieFaces), which gets a random value from the dieFaces list.
    key = `${key}${random(dieFaces)}`; 
  }
  return key;
}
function createMap(strings) {
	for( let line of strings ) {
		let [key, word] = line.split('\t');
		if( key.length === 5 ) {
			words.set( key, word );
		}
	}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("red");
}

function draw() {
  let passWord= "Your Password:"
  background("green");
  textSize(30);
  textFont('Bangers')
  textStyle(BOLD);
  text (passWord, width/8, height/3);

  text( password, width/7, height/2 );
  
  fill(random(colorlist));
  for( let i = 0; i < width; i+= 30 ) {
    circle(30 + i , 30, 60 );
    circle(30, 30 + i , 60 );
    circle(width-30, 30 + i , 60 );
    circle(30 + i , height-30, 60 );
  }
  noLoop();
// circle(30, 30, 20);
// circle(30, 30, 60);
// circle(30, 60, 60);
// circle(30,90,60);
// circle(30,120,60);
// circle(30,150,60);
// circle(30,180,60);
// circle(30,210,60);
// circle(30,240,60);
// circle(30,270,60);
// circle(30,300,60);
// circle(30,330,60);
// circle(30,360,60);
// circle(60,360,60);
// circle(90,360,60);
// circle(120,360,60);
// circle(150,360,60);
// circle(180,360,60);
// circle(210,360,60);
// circle(240,360,60);
// circle(270,360,60);
// circle(300,360,60);
// circle(330,360,60);
// circle(360,360,60);
// circle(390,360,60);
// circle(420,360,60);
// circle(450,360,60);
// circle(480,360,60);
// circle(510,360,60);
// circle(510,330,60);
// circle(510,300,60);
// circle(510,270,60);
// circle(510,240,60);
// circle(510,210,60);
// circle(510,180,60);
// circle(510,150,60);
// circle(510,120,60);
// circle(510,90,60);
// circle(510,60,60);
// circle(510,30,60);
// circle(480,30,60);
// circle(450,30,60);
// circle(420,30,60);
// circle(390,30,60);
// circle(360,30,60);
// circle(330,30,60);
// circle(300,30,60);
// circle(270,30,60);
// circle(240,30,60);
// circle(210,30,60);
// circle(180,30,60);
// circle(180,30,60);
// circle(150,30,60);
// circle(120,30,60);
// circle(90,30,60);
}

function keyPressed() {
  if( key === "a" || key === "y" || key === "u" || key === "s" || key === "h" ) {
    // you probably want to delete this code eventually
    // let number = int(lookupKey);
    // number++;
    lookupKey = generateLookupKey();//`${number}`;
    password = password + words.get(lookupKey);
    redraw(); 
  }
}
// Credit to Mr. Oswald; base code forked from Mr. Oswald




