/* Orthographic view: movement testing */

// Constants



// Windows size

var initialWidth = window.innerWidth;
var initialHeight = window.innerHeight;

var scene = new THREE.Scene();

// Orthographic camera

var camera = new THREE.OrthographicCamera
( 
	initialWidth / -2,  //left
	initialWidth / 2, 	//right
	initialHeight / 2, 	//top
	initialHeight / -2, //bottom
	1, 					//near
	50    				//far
);

// Cambiando posicion de la camara, ya que el cubo esta en el origen de coordenadas, al igual que la camara?

camera.position.set(0,10,0);
camera.lookAt(0,0,0);

// Defing renderer 

var renderer = new THREE.WebGLRenderer( );
renderer.setSize( initialWidth, initialHeight );
document.body.appendChild( renderer.domElement );

// Figuras

var geometry = new THREE.BoxGeometry(50, 50, 50);

// Materiales

//var material = new THREE.MeshBasicMaterial( { color:0xFFFFFF, wireframe: false } );
var CubeMaterial = new THREE.MeshBasicMaterial({
		color: 0xFFFFFF
	}
);
	
// Definiendo cubo

var cube = new THREE.Mesh( geometry, CubeMaterial );

scene.add(cube);

// Window resize event handler

var resizeListener = function( )
{
	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer.setSize( width, height );
	
	// Updating camera view dimensions

	camera.left = width / -2;
	camera.right = width / 2;
	camera.top = height / 2;
	camera.bottom = height / -2;

	camera.updateProjectionMatrix( );
};

// Arrow keys event handler. See https://www.w3schools.com/js/js_switch.asp

var keyListener = function( event )
{
	var key = event.key;
	
	if (key == "ArrowLeft" || key == "Left"){
		cube.position.x += 1;
	}

	else if (key == "ArrowRight" || key == "Right"){
		alert(key);
	}
	
	else if (key == "ArrowDown" || key == "Down"){
		alert(key);
	}
	
	else if (key == "ArrowUp" || key == "Up"){
		alert(key);
	}
};

// Defining new window resizing and key pressing events

document.addEventListener( 'resize', resizeListener);

document.addEventListener('keydown', keyListener );

// Game logic

// Position augment

var step = 0.5;


// Se actualizan los elementos del juego que no dependen del usuario (que son
// sincronos) 
var update = function() 
{


};

// Draw scene

var render = function() 
{
	renderer.render( scene, camera );
};

// Run game loop (update, render, repeat)

//var afterTime = now();

var GameLoop = function() 
{
	requestAnimationFrame( GameLoop );

	//var beforeTime = now();

	update();
	render();

	//var dt = afterTime - beforeTime;
	//var afterTime = beforeTime;

};

GameLoop();


// python -m SimpleHTTPServer
