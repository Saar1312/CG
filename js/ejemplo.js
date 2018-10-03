// Testing different cameras

// Windows size
var initialWidth = window.innerWidth;
var initialHeight = window.innerHeight;

var scene = new THREE.Scene();

// Perspective camera
/*var camera = new THREE.PerspectiveCamera
( 
	75, 							// fov
	initialWidth/initialHeight, 	// aspect
	0.1, 							// near
	1000 							// far
);*/

// Orthographic camera
var camera2 = new THREE.OrthographicCamera
( 
	initialWidth / -2,  //left
	initialWidth / 2, 	//right
	initialHeight / 2, 	//top
	initialHeight / -2, //bottom
	1, 					//near
	50    				//far
);

var renderer = new THREE.WebGLRenderer( );
renderer.setSize( initialWidth, initialHeight );
document.body.appendChild( renderer.domElement );

// Resize
window.addEventListener( 'resize', function()
	{
		var width = window.innerWidth;
		var height = window.innerHeight;
	
		if ( typeof camera !== 'undefined' )
		{
			renderer.setSize( width, height );
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		} else
		{
			renderer.setSize( width, height );
			camera2.left = width / -2;
			camera2.right = width / 2;
			camera2.top = height / 2;
			camera2.bottom = height / -2;
			camera2.updateProjectionMatrix( );
		}
	}
)

// Figuras

if (typeof camera !== 'undefined')
{
	var geometry = new THREE.BoxGeometry(5, 5, 5);
}else{
	var geometry = new THREE.BoxGeometry(50, 50, 50);
}

// Material
//var material = new THREE.MeshBasicMaterial( { color:0xFFFFFF, wireframe: false } );
var CubeMaterials = 
[
	/*
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/nasa.jpg'),
								 side: THREE.BackSide
							   }),
	*/
	new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } ),
	new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } ),
	new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } ),
	new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } ),
	new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } ),
	new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } )
	];

// Arreglo de materiales para las caras del cubo
var materials = new THREE.MeshFaceMaterial( CubeMaterials );

var cube = new THREE.Mesh( geometry, materials );

scene.add(cube);

// Cambiando posicion de la camara, ya que el cubo esta en el origen de coordenadas, al igual que la camara?

if ( typeof camera !== 'undefined' )
{
	camera.position.z = 10;
	camera.position.y = 0;
	camera.position.x = 0;
}

camera2.position.set(0,1,0);
camera2.lookAt(0,0,0);

// Game logic
var update = function() {
	
	/*cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;
	*/
	
};

// Draw scene
var render = function() {
	if ( typeof camera !== 'undefined' ){
		renderer.render( scene, camera );
	} else{
		renderer.render( scene, camera2 );
	}
};


// Run game loop (update, render, repeat)
var GameLoop = function() {
	requestAnimationFrame( GameLoop );

	update();
	render();
};

GameLoop();





// python -m SimpleHTTPServer
