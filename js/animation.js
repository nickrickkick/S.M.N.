var enemies = [];
var isGameOver;
var lastSword = Date.now();
var lastHammer = Date.now();
var gameTime = 0;


var img = new Image();
img.onload = function() {
    startGame();
};
img.src = url;


function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};

function init() {
    terrainPattern = ctx.createPattern(resources.get('img/terrain.png'), 'repeat');

    document.getElementById('play-again').addEventListener('click', function() {
        reset();
    });

    reset();
    lastTime = Date.now();
    main();
}