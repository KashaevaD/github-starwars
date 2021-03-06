const KEYBOARDS_CODE = {
    right: 68, 
    left: 65,
    down: 83, 
    up: 87, 
    fire: 76
};

const FIELD_SIZE = {
    leftX: 0,
    rightX: 52,
    topY: 0,
    bottomY: 6,
    columnLength: 7,
    maxLength: 370
};

const START_ENERGY_PARAMS = {
    'enemy': {
        direction: { x: -1, y: 0 },
        duration: 200
    },
    'spaceshipBullet': {
        direction: { x: 1, y: 0 },
        duration: 60
    },
    'enemyBullet': {
        direction: { x: -1, y: 0 },
        duration: 70
    },
    'spaceship':{
        direction: {x: 0, y: 0},
        duration: 0
    },
    'starOfDeath': {
        direction: { x: -1, y: 0 },
        duration: 500
    }
};

const SHIP = {
    START_SHIP_POSITION : [
        { type: 'body', x:0, y: 2, color: '#00f' },
        { type: 'body', x:0, y: 3, color: '#00f' },
        { type: 'body', x:0, y: 4, color: '#00f' },
        { type: 'gun', x:1, y: 3, color: '#00f' }
    ],
    SPACE_SHIP_DIRECTION : {
        right: { x: 1, y:0 },
        left: { x: -1, y: 0 },
        down: { x: 0, y: 1 },
        up: { x: 0, y: -1 }
    },
    TIME_OF_DELAY_SHOTTING : 500
};

const END_GAME_TEXT = {
    GAME_OVER_TEXT : [
        {x: 1, y: 0, color: 'green', type: 'body'},
        {x: 2, y: 0, color: 'green', type: 'body'},
        {x: 3, y: 0, color: 'green', type: 'body'},
        {x: 9, y: 0, color: 'green', type: 'body'},
        {x: 14, y: 0, color: 'green', type: 'body'},
        {x: 18, y: 0, color: 'green', type: 'body'},
        {x: 20, y: 0, color: 'green', type: 'body'},
        {x: 21, y: 0, color: 'green', type: 'body'},
        {x: 22, y: 0, color: 'green', type: 'body'},
        {x: 27, y: 0, color: 'green', type: 'body'},
        {x: 28, y: 0, color: 'green', type: 'body'},
        {x: 29, y: 0, color: 'green', type: 'body'},
        {x: 32, y: 0, color: 'green', type: 'body'},
        {x: 36, y: 0, color: 'green', type: 'body'},
        {x: 38, y: 0, color: 'green', type: 'body'},
        {x: 39, y: 0, color: 'green', type: 'body'},
        {x: 40, y: 0, color: 'green', type: 'body'},
        {x: 42, y: 0, color: 'green', type: 'body'},
        {x: 43, y: 0, color: 'green', type: 'body'},
        {x: 44, y: 0, color: 'green', type: 'body'},
        {x: 1, y: 1, color: 'green', type: 'body'},
        {x: 8, y: 1, color: 'green', type: 'body'},
        {x: 10, y: 1, color: 'green', type: 'body'},
        {x: 14, y: 1, color: 'green', type: 'body'},
        {x: 15, y: 1, color: 'green', type: 'body'},
        {x: 17, y: 1, color: 'green', type: 'body'},
        {x: 18, y: 1, color: 'green', type: 'body'},
        {x: 20, y: 1, color: 'green', type: 'body'},
        {x: 26, y: 1, color: 'green', type: 'body'},
        {x: 30, y: 1, color: 'green', type: 'body'},
        {x: 32, y: 1, color: 'green', type: 'body'},
        {x: 36, y: 1, color: 'green', type: 'body'},
        {x: 38, y: 1, color: 'green', type: 'body'},
        {x: 42, y: 1, color: 'green', type: 'body'},
        {x: 45, y: 1, color: 'green', type: 'body'},
        {x: 1, y: 2, color: 'green', type: 'body'},
        {x: 8, y: 2, color: 'green', type: 'body'},
        {x: 10, y: 2, color: 'green', type: 'body'},
        {x: 14, y: 2, color: 'green', type: 'body'},
        {x: 16, y: 2, color: 'green', type: 'body'},
        {x: 18, y: 2, color: 'green', type: 'body'},
        {x: 20, y: 2, color: 'green', type: 'body'},
        {x: 26, y: 2, color: 'green', type: 'body'},
        {x: 30, y: 2, color: 'green', type: 'body'},
        {x: 32, y: 2, color: 'green', type: 'body'},
        {x: 36, y: 2, color: 'green', type: 'body'},
        {x: 38, y: 2, color: 'green', type: 'body'},
        {x: 42, y: 2, color: 'green', type: 'body'},
        {x: 45, y: 2, color: 'green', type: 'body'},
        {x: 1, y: 3, color: 'green', type: 'body'},
        {x: 3, y: 3, color: 'green', type: 'body'},
        {x: 4, y: 3, color: 'green', type: 'body'},
        {x: 7, y: 3, color: 'green', type: 'body'},
        {x: 11, y: 3, color: 'green', type: 'body'},
        {x: 14, y: 3, color: 'green', type: 'body'},
        {x: 18, y: 3, color: 'green', type: 'body'},
        {x: 20, y: 3, color: 'green', type: 'body'},
        {x: 21, y: 3, color: 'green', type: 'body'},
        {x: 22, y: 3, color: 'green', type: 'body'},
        {x: 26, y: 3, color: 'green', type: 'body'},
        {x: 30, y: 3, color: 'green', type: 'body'},
        {x: 32, y: 3, color: 'green', type: 'body'},
        {x: 36, y: 3, color: 'green', type: 'body'},
        {x: 38, y: 3, color: 'green', type: 'body'},
        {x: 39, y: 3, color: 'green', type: 'body'},
        {x: 40, y: 3, color: 'green', type: 'body'},
        {x: 42, y: 3, color: 'green', type: 'body'},
        {x: 43, y: 3, color: 'green', type: 'body'},
        {x: 44, y: 3, color: 'green', type: 'body'},
        {x: 1, y: 4, color: 'green', type: 'body'},
        {x: 4, y: 4, color: 'green', type: 'body'},
        {x: 7, y: 4, color: 'green', type: 'body'},
        {x: 8, y: 4, color: 'green', type: 'body'},
        {x: 9, y: 4, color: 'green', type: 'body'},
        {x: 10, y: 4, color: 'green', type: 'body'},
        {x: 11, y: 4, color: 'green', type: 'body'},
        {x: 14, y: 4, color: 'green', type: 'body'},
        {x: 18, y: 4, color: 'green', type: 'body'},
        {x: 20, y: 4, color: 'green', type: 'body'},
        {x: 26, y: 4, color: 'green', type: 'body'},
        {x: 30, y: 4, color: 'green', type: 'body'},
        {x: 32, y: 4, color: 'green', type: 'body'},
        {x: 36, y: 4, color: 'green', type: 'body'},
        {x: 38, y: 4, color: 'green', type: 'body'},
        {x: 42, y: 4, color: 'green', type: 'body'},
        {x: 43, y: 4, color: 'green', type: 'body'},
        {x: 1, y: 5, color: 'green', type: 'body'},
        {x: 4, y: 5, color: 'green', type: 'body'},
        {x: 6, y: 5, color: 'green', type: 'body'},
        {x: 12, y: 5, color: 'green', type: 'body'},
        {x: 14, y: 5, color: 'green', type: 'body'},
        {x: 18, y: 5, color: 'green', type: 'body'},
        {x: 20, y: 5, color: 'green', type: 'body'},
        {x: 26, y: 5, color: 'green', type: 'body'},
        {x: 30, y: 5, color: 'green', type: 'body'},
        {x: 33, y: 5, color: 'green', type: 'body'},
        {x: 35, y: 5, color: 'green', type: 'body'},
        {x: 38, y: 5, color: 'green', type: 'body'},
        {x: 42, y: 5, color: 'green', type: 'body'},
        {x: 44, y: 5, color: 'green', type: 'body'},
        {x: 1, y: 6, color: 'green', type: 'body'},
        {x: 2, y: 6, color: 'green', type: 'body'},
        {x: 3, y: 6, color: 'green', type: 'body'},
        {x: 4, y: 6, color: 'green', type: 'body'},
        {x: 6, y: 6, color: 'green', type: 'body'},
        {x: 12, y: 6, color: 'green', type: 'body'},
        {x: 14, y: 6, color: 'green', type: 'body'},
        {x: 18, y: 6, color: 'green', type: 'body'},
        {x: 20, y: 6, color: 'green', type: 'body'},
        {x: 21, y: 6, color: 'green', type: 'body'},
        {x: 22, y: 6, color: 'green', type: 'body'},
        {x: 27, y: 6, color: 'green', type: 'body'},
        {x: 28, y: 6, color: 'green', type: 'body'},
        {x: 29, y: 6, color: 'green', type: 'body'},
        {x: 34, y: 6, color: 'green', type: 'body'},
        {x: 38, y: 6, color: 'green', type: 'body'},
        {x: 39, y: 6, color: 'green', type: 'body'},
        {x: 40, y: 6, color: 'green', type: 'body'},
        {x: 42, y: 6, color: 'green', type: 'body'},
        {x: 45, y: 6, color: 'green', type: 'body'},
        {x: 47, y: 6, color: 'green', type: 'body'},
        {x: 49, y: 6, color: 'green', type: 'body'},
        {x: 51, y: 6, color: 'green', type: 'body'}

    ],
    WIN_TEXT : [
        {x: 2, y: 0, color: 'green', type: 'body'},
        {x: 6, y: 0, color: 'green', type: 'body'},
        {x: 9, y: 0, color: 'green', type: 'body'},
        {x: 10, y: 0, color: 'green', type: 'body'},
        {x: 11, y: 0, color: 'green', type: 'body'},
        {x: 14, y: 0, color: 'green', type: 'body'},
        {x: 18, y: 0, color: 'green', type: 'body'},
        {x: 23, y: 0, color: 'green', type: 'body'},
        {x: 26, y: 0, color: 'green', type: 'body'},
        {x: 29, y: 0, color: 'green', type: 'body'},
        {x: 31, y: 0, color: 'green', type: 'body'},
        {x: 32, y: 0, color: 'green', type: 'body'},
        {x: 33, y: 0, color: 'green', type: 'body'},
        {x: 34, y: 0, color: 'green', type: 'body'},
        {x: 35, y: 0, color: 'green', type: 'body'},
        {x: 37, y: 0, color: 'green', type: 'body'},
        {x: 43, y: 0, color: 'green', type: 'body'},
        {x: 46, y: 0, color: 'green', type: 'body'},
        {x: 48, y: 0, color: 'green', type: 'body'},
        {x: 50, y: 0, color: 'green', type: 'body'},
        {x: 2, y: 1, color: 'green', type: 'body'},
        {x: 6, y: 1, color: 'green', type: 'body'},
        {x: 8, y: 1, color: 'green', type: 'body'},
        {x: 12, y: 1, color: 'green', type: 'body'},
        {x: 14, y: 1, color: 'green', type: 'body'},
        {x: 18, y: 1, color: 'green', type: 'body'},
        {x: 23, y: 1, color: 'green', type: 'body'},
        {x: 26, y: 1, color: 'green', type: 'body'},
        {x: 29, y: 1, color: 'green', type: 'body'},
        {x: 33, y: 1, color: 'green', type: 'body'},
        {x: 37, y: 1, color: 'green', type: 'body'},
        {x: 38, y: 1, color: 'green', type: 'body'},
        {x: 43, y: 1, color: 'green', type: 'body'},
        {x: 46, y: 1, color: 'green', type: 'body'},
        {x: 48, y: 1, color: 'green', type: 'body'},
        {x: 50, y: 1, color: 'green', type: 'body'},
        {x: 3, y: 2, color: 'green', type: 'body'},
        {x: 5, y: 2, color: 'green', type: 'body'},
        {x: 8, y: 2, color: 'green', type: 'body'},
        {x: 12, y: 2, color: 'green', type: 'body'},
        {x: 14, y: 2, color: 'green', type: 'body'},
        {x: 18, y: 2, color: 'green', type: 'body'},
        {x: 23, y: 2, color: 'green', type: 'body'},
        {x: 26, y: 2, color: 'green', type: 'body'},
        {x: 29, y: 2, color: 'green', type: 'body'},
        {x: 33, y: 2, color: 'green', type: 'body'},
        {x: 37, y: 2, color: 'green', type: 'body'},
        {x: 39, y: 2, color: 'green', type: 'body'},
        {x: 43, y: 2, color: 'green', type: 'body'},
        {x: 46, y: 2, color: 'green', type: 'body'},
        {x: 48, y: 2, color: 'green', type: 'body'},
        {x: 50, y: 2, color: 'green', type: 'body'},
        {x: 4, y: 3, color: 'green', type: 'body'},
        {x: 8, y: 3, color: 'green', type: 'body'},
        {x: 12, y: 3, color: 'green', type: 'body'},
        {x: 14, y: 3, color: 'green', type: 'body'},
        {x: 18, y: 3, color: 'green', type: 'body'},
        {x: 23, y: 3, color: 'green', type: 'body'},
        {x: 26, y: 3, color: 'green', type: 'body'},
        {x: 29, y: 3, color: 'green', type: 'body'},
        {x: 33, y: 3, color: 'green', type: 'body'},
        {x: 37, y: 3, color: 'green', type: 'body'},
        {x: 40, y: 3, color: 'green', type: 'body'},
        {x: 43, y: 3, color: 'green', type: 'body'},
        {x: 46, y: 3, color: 'green', type: 'body'},
        {x: 48, y: 3, color: 'green', type: 'body'},
        {x: 50, y: 3, color: 'green', type: 'body'},
        {x: 4, y: 4, color: 'green', type: 'body'},
        {x: 8, y: 4, color: 'green', type: 'body'},
        {x: 12, y: 4, color: 'green', type: 'body'},
        {x: 14, y: 4, color: 'green', type: 'body'},
        {x: 18, y: 4, color: 'green', type: 'body'},
        {x: 23, y: 4, color: 'green', type: 'body'},
        {x: 26, y: 4, color: 'green', type: 'body'},
        {x: 29, y: 4, color: 'green', type: 'body'},
        {x: 33, y: 4, color: 'green', type: 'body'},
        {x: 37, y: 4, color: 'green', type: 'body'},
        {x: 41, y: 4, color: 'green', type: 'body'},
        {x: 43, y: 4, color: 'green', type: 'body'},
        {x: 46, y: 4, color: 'green', type: 'body'},
        {x: 48, y: 4, color: 'green', type: 'body'},
        {x: 50, y: 4, color: 'green', type: 'body'},
        {x: 4, y: 5, color: 'green', type: 'body'},
        {x: 8, y: 5, color: 'green', type: 'body'},
        {x: 12, y: 5, color: 'green', type: 'body'},
        {x: 15, y: 5, color: 'green', type: 'body'},
        {x: 17, y: 5, color: 'green', type: 'body'},
        {x: 18, y: 5, color: 'green', type: 'body'},
        {x: 24, y: 5, color: 'green', type: 'body'},
        {x: 26, y: 5, color: 'green', type: 'body'},
        {x: 28, y: 5, color: 'green', type: 'body'},
        {x: 33, y: 5, color: 'green', type: 'body'},
        {x: 37, y: 5, color: 'green', type: 'body'},
        {x: 42, y: 5, color: 'green', type: 'body'},
        {x: 43, y: 5, color: 'green', type: 'body'},
        {x: 4, y: 6, color: 'green', type: 'body'},
        {x: 9, y: 6, color: 'green', type: 'body'},
        {x: 10, y: 6, color: 'green', type: 'body'},
        {x: 11, y: 6, color: 'green', type: 'body'},
        {x: 16, y: 6, color: 'green', type: 'body'},
        {x: 18, y: 6, color: 'green', type: 'body'},
        {x: 19, y: 6, color: 'green', type: 'body'},
        {x: 25, y: 6, color: 'green', type: 'body'},
        {x: 27, y: 6, color: 'green', type: 'body'},
        {x: 31, y: 6, color: 'green', type: 'body'},
        {x: 32, y: 6, color: 'green', type: 'body'},
        {x: 33, y: 6, color: 'green', type: 'body'},
        {x: 34, y: 6, color: 'green', type: 'body'},
        {x: 35, y: 6, color: 'green', type: 'body'},
        {x: 37, y: 6, color: 'green', type: 'body'},
        {x: 43, y: 6, color: 'green', type: 'body'},
        {x: 46, y: 6, color: 'green', type: 'body'},
        {x: 48, y: 6, color: 'green', type: 'body'},
        {x: 50, y: 6, color: 'green', type: 'body'}

    ]
};

const STAR_OF_DEATH_POSITION = [
    { type: 'body', x: 54, y: 1, color: 'black'},
    { type: 'body', x: 55, y: 1, color: 'black'},
    { type: 'body', x: 53, y: 2, color: 'black'},
    { type: 'body', x: 54, y: 2, color: 'black'},
    { type: 'body', x: 55, y: 2, color: 'black'},
    { type: 'body', x: 56, y: 2, color: 'black'},
    { type: 'body', x: 52, y: 3, color: 'black'},
    { type: 'body', x: 53, y: 3, color: 'black'},
    { type: 'body', x: 54, y: 3, color: 'black'},
    { type: 'body', x: 55, y: 3, color: 'black'},
    { type: 'body', x: 56, y: 3, color: 'black'},
    { type: 'gun', x: 57, y: 3, color: 'black'},
    { type: 'body', x: 53, y: 4, color: 'black'},
    { type: 'body', x: 54, y: 4, color: 'black'},
    { type: 'body', x: 55, y: 4, color: 'black'},
    { type: 'body', x: 56, y: 4, color: 'black'},
    { type: 'body', x: 54, y: 5, color: 'black'},
    { type: 'body', x: 55, y: 5, color: 'black'}
];

export { KEYBOARDS_CODE, SHIP, END_GAME_TEXT, STAR_OF_DEATH_POSITION, START_ENERGY_PARAMS, FIELD_SIZE };
