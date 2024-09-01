import { spline } from 'https://cdn.skypack.dev/@georgedoescode/spline@1.0.1';
import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise@2.4.0';

const path = document.querySelector('path');
const blob = document.getElementById('blob');
const simplex = new SimplexNoise();
const points = createPoints();
let noiseStep = 0.005;

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let easeFactor = 0.1; // Фактор сглаживания движения

(function animate() {
  path.setAttribute('d', spline(points, 1, true));

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    const x = map(nX, -1, 1, point.originX - 40, point.originX + 40);
    const y = map(nY, -1, 1, point.originY - 40, point.originY + 40);

    point.x = x;
    point.y = y;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  // Плавное перемещение блоба к целевой позиции
  currentX += (targetX - currentX) * easeFactor;
  currentY += (targetY - currentY) * easeFactor;

  blob.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate);
})();

function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

function noise(x, y) {
  return simplex.noise2D(x, y);
}

function createPoints() {
  const points = [];
  const numPoints = 6;
  const angleStep = (Math.PI * 2) / numPoints;
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    const theta = i * angleStep;
    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    points.push({
      x: x,
      y: y,
      originX: x,
      originY: y,
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000,
    });
  }
  return points;
}

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  //   targetX = clientX - 500 + scrollX;
  //   targetY = clientY - 500 + scrollY;

  // Получаем размеры SVG
  const svg = document.querySelector('svg');
  const svgWidth = svg.clientWidth;
  const svgHeight = svg.clientHeight;

  // Вычисляем центр SVG
  const svgCenterX = svgWidth / 2;
  const svgCenterY = svgHeight / 2;

  // Вычисляем позицию мыши относительно центра SVG
  targetX = clientX - svgCenterX + scrollX;
  targetY = clientY - svgCenterY + scrollY;

  canvasMouseOver(event); // Добавляем рябь при движении мыши
});

document.querySelector('path').addEventListener('mouseover', () => {
  noiseStep = 0.01;
});

document.querySelector('path').addEventListener('mouseleave', () => {
  noiseStep = 0.005;
});

// Код для анимации ряби

const rippleSettings = {
  maxSize: 100,
  animationSpeed: 5,
  strokeColor: [148, 217, 255],
};

const canvasSettings = {
  blur: 8,
  ratio: 1,
};

function Coords(x, y) {
  this.x = x || null;
  this.y = y || null;
}

const Ripple = function Ripple(x, y, circleSize, ctx) {
  this.position = new Coords(x, y);
  this.circleSize = circleSize;
  this.maxSize = rippleSettings.maxSize;
  this.opacity = 1;
  this.ctx = ctx;
  this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
    ${Math.floor(rippleSettings.strokeColor[1])},
    ${Math.floor(rippleSettings.strokeColor[2])},
    ${this.opacity})`;

  this.animationSpeed = rippleSettings.animationSpeed;
  this.opacityStep = this.animationSpeed / (this.maxSize - circleSize) / 2;
};

Ripple.prototype = {
  update: function update() {
    this.circleSize = this.circleSize + this.animationSpeed;
    this.opacity = this.opacity - this.opacityStep;
    this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
      ${Math.floor(rippleSettings.strokeColor[1])},
      ${Math.floor(rippleSettings.strokeColor[2])},
      ${this.opacity})`;
  },
  draw: function draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.strokeColor;
    this.ctx.arc(this.position.x, this.position.y, this.circleSize, 0, 2 * Math.PI);
    this.ctx.stroke();
  },
  setStatus: function setStatus(status) {
    this.status = status;
  },
};

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const ripples = [];

const height = document.body.clientHeight;
const width = document.body.clientWidth;

const rippleStartStatus = 'start';

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

canvas.style.filter = `blur(${canvasSettings.blur}px)`;

canvas.width = width * canvasSettings.ratio;
canvas.height = height * canvasSettings.ratio;

canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

let animationFrame;

// Add GUI settings
const addGuiSettings = () => {
  const gui = new dat.GUI();
  gui.add(rippleSettings, 'maxSize', 0, 1000).step(1);
  gui.add(rippleSettings, 'animationSpeed', 1, 30).step(1);
  gui.addColor(rippleSettings, 'strokeColor');

  const blur = gui.add(canvasSettings, 'blur', 0, 20).step(1);
  blur.onChange((value) => {
    canvas.style.filter = `blur(${value}px)`;
  });
};

// addGuiSettings(); // Если хотите добавить GUI для настройки

// Function which is executed on mouse hover on canvas
const canvasMouseOver = (e) => {
  const x = e.clientX * canvasSettings.ratio;
  const y = e.clientY * canvasSettings.ratio;
  ripples.unshift(new Ripple(x, y, 2, ctx));
};

const animation = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const length = ripples.length;
  for (let i = length - 1; i >= 0; i -= 1) {
    const r = ripples[i];

    r.update();
    r.draw();

    if (r.opacity <= 0) {
      ripples[i] = null;
      delete ripples[i];
      ripples.pop();
    }
  }
  animationFrame = window.requestAnimationFrame(animation);
};

animation();
canvas.addEventListener('mousemove', canvasMouseOver);
