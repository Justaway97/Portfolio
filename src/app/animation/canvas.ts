
declare const noise: any;
export class trailingMouse {
    canvas: any;
    width: number;
    height: number;
    forces: any[] = [];
    particles: any[] = [];
    nParticles = 1000;
    p = 0;
    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        const ctx: any = this.canvas.getContext('2d');
        noise.seed(Math.random());
        class V2 {
            x: any;
            y: any;
            constructor(x: any, y: any) {
                this.x = x || 0;
                this.y = y || 0;
            }
            add(vector: any) {
                this.x += vector.x;
                this.y += vector.y;
            }
            reset(x: any, y: any) {
                this.x = x;
                this.y = y;
            }
            lerp(vector: any, n: any) {
                this.x += (vector.x - this.x) * n;
                this.y += (vector.y - this.y) * n;
            }
        }

        class Particle {
            position: V2;
            velocity: V2;
            acceleration: V2;
            alpha: number;
            points: V2[];
            color: string;
            constructor(x: any, y: any) {
                this.position = new V2(-100, -100);
                this.velocity = new V2(0, 0);
                this.acceleration = new V2(0, 0);
                this.alpha = 0;
                this.color = '#000000';
                // change the particle size
                this.points = [new V2(-10 + Math.random() * 50, -10 + Math.random() * 50),
                new V2(-10 + Math.random() * 50, -10 + Math.random() * 50),
                new V2(-10 + Math.random() * 50, -10 + Math.random() * 50)];
            }

            update() {
                this.velocity.add(this.acceleration);
                this.position.add(this.velocity);
                this.acceleration.reset(0, 0);
                this.alpha -= 0.008;
                if (this.alpha < 0) this.alpha = 0;
            }

            follow(forces: any, height: any) {
                var x = Math.floor(this.position.x / 20);
                var y = Math.floor(this.position.y / 20);
                var index = x * Math.floor(height / 20) + y;
                var force = forces[index];
                if (force) this.applyForce(force);
            }

            applyForce(force: any) {
                this.acceleration.add(force);
            }

            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                // draw triangle
                ctx.moveTo(this.position.x + this.points[0].x, this.position.y + this.points[0].y);
                ctx.lineTo(this.position.x + this.points[1].x, this.position.y + this.points[1].y);
                ctx.lineTo(this.position.x + this.points[2].x, this.position.y + this.points[2].y);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const resize = () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            initForces();
        }

        const initForces = () => {
            var i = 0;
            // create new V2 and not allow forces.length > width/20
            for (var x = 0; x < this.width; x += 50) {
                for (var y = 0; y < this.height; y += 50) {
                    if (!this.forces[i]) {
                        this.forces[i] = new V2(0, 0);
                    }
                    i++;
                }
            }

            if (i < this.forces.length) {
                this.forces.splice(i + 1);
            }
        }

        const updateForces = (t: any) => {
            var i = 0;
            var xOff = 0, yOff = 0;
            for (var x = 0; x < this.width; x += 50) {
                xOff += 0.1;
                for (var y = 0; y < this.height; y += 50) {
                    yOff += 0.1;
                    let a = noise.perlin3(xOff, yOff, t * 0.00005) * Math.PI * 4;
                    if (this.forces[i]) this.forces[i].reset(Math.cos(a) * 0.1, Math.sin(a) * 0.1);
                    i++;
                }
            }
        }

        const initParticles = () => {
            for (var i = 0; i < this.nParticles; i++) {
                this.particles.push(new Particle(Math.random() * this.width, Math.random() * this.height));
                this.particles[i].velocity.y = 0.1;
            }
        }

        const drawParticles = () => {
            for (var i = 0; i < this.nParticles; i++) {
                this.particles[i].update();
                this.particles[i].follow(this.forces, this.height);
                this.particles[i].draw();
            }
        }

        const launchParticle = () => {
            this.particles[this.p].position.reset(emitter.x, emitter.y);
            this.particles[this.p].velocity.reset(-1 + Math.random() * 2, -1 + Math.random() * 2);
            this.particles[this.p].color = `hsl(${Math.floor(emitter.x / this.width * 256)},40%,${60 + Math.random() * 20}%)`;
            this.particles[this.p].alpha = 1;
            this.p++;
            if (this.p === this.nParticles) this.p = 0;
        }

        const updateEmitter = () => {
            emitter.lerp(mouse, 0.2);
        }

        const animate = (t: any) => {
            ctx.clearRect(0, 0, this.width, this.height);
            updateEmitter();
            launchParticle();
            updateForces(t);
            drawParticles();
            requestAnimationFrame(animate);
        }

        const pointerMove = (e: any) => {
            mouse.x = e.touches ? e.touches[0].pageX : e.pageX;
            mouse.y = e.touches ? e.touches[0].pageY : e.pageY;
        }

        let mouse = new V2(window.innerWidth / 2, window.innerHeight / 2);
        let emitter = new V2(window.innerWidth / 2, window.innerHeight / 2);
        resize();
        initParticles();
        requestAnimationFrame(animate);
        console.log('request')

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', pointerMove);
        window.addEventListener('touchmove', pointerMove);

    }

}