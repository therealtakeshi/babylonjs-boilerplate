import BABYLON from 'babylonjs';

var engine = require('./engine');

// Setup the scene with physics
var scene = new BABYLON.Scene(engine);
scene.enablePhysics();
scene.collisionsEnabled = true;

module.exports = scene;
