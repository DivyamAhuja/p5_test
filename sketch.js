

let p5_1 = new p5((sketch)=>{
  let angle;
  sketch.setup = ()=>{
    let c = sketch.createCanvas(400, 400, sketch.WEBGL);
    c.position(0, 0);
    angle = 0;
  };
  sketch.draw = ()=>{
    sketch.background(0);

    sketch.rotateX(angle);
    sketch.beginShape(sketch.TRIANGLES);
    sketch.fill(255, 0, 0);
    sketch.vertex(-100, -100, 0);
    sketch.fill(0, 255, 0);
    sketch.vertex( 100, -100, 0);
    sketch.fill(0, 0, 255);
    sketch.vertex( 0,  100, 0 );
    sketch.endShape(sketch.CLOSE);
    angle += 0.01;
  };
}, document.getElementById('g1'));

let p5_2 = new p5((sketch)=>{
  let angle;
  sketch.setup = ()=>{
    let c = sketch.createCanvas(400, 400, sketch.WEBGL);
    c.position(400, 0);
    angle = 0;
  };
  sketch.draw = ()=>{
    sketch.background(0);

    sketch.lights();
    sketch.specularMaterial(100);

    sketch.rotateX(angle);
    sketch.beginShape(sketch.TRIANGLES);
    sketch.fill(255, 0, 0);
    sketch.vertex(-100, -100, 0);
    sketch.fill(0, 255, 0);
    sketch.vertex( 100, -100, 0);
    sketch.fill(0, 0, 255);
    sketch.vertex( 0,  100, 0 );
    sketch.endShape(sketch.CLOSE);
    angle += 0.01;
  };
}, document.getElementById('g2'));

let p5_3 = new p5((sketch)=>{
  let angle;
  sketch.setup = ()=>{
    let c = sketch.createCanvas(400, 400, sketch.WEBGL);
    c.position(0, 400);
    angle = 0;
  };
  sketch.draw = ()=>{
    sketch.background(0);

    sketch.ambientLight(255, 0, 0);
    sketch.ambientMaterial(255, 0, 0);

    sketch.rotateX(angle);
    sketch.beginShape(sketch.TRIANGLES);
    sketch.fill(255, 0, 0);
    sketch.vertex(-100, -100, 0);
    sketch.fill(0, 255, 0);
    sketch.vertex( 100, -100, 0);
    sketch.fill(0, 0, 255);
    sketch.vertex( 0,  100, 0 );
    sketch.endShape(sketch.CLOSE);
    angle += 0.01;
  };
}, document.getElementById('g3'));

let p5_4 = new p5((sketch)=>{
  let angle;
  let img;
  sketch.preload = ()=>{
    img = sketch.loadImage('shin400.jpeg');
  }
  sketch.setup = ()=>{
    let c = sketch.createCanvas(400, 400, sketch.WEBGL);
    c.position(400, 400);
    angle = 0;
  };
  sketch.draw = ()=>{
    sketch.background(0);
    
    sketch.ambientLight(255, 255, 255);
    sketch.specularMaterial(255, 255, 255);

    sketch.texture(img);
    sketch.textureMode(sketch.NORMAL);

    sketch.rotateX(angle);
    sketch.beginShape(sketch.TRIANGLES);
    //sketch.fill(255, 0, 0);
    sketch.vertex(-100, -100, 0, 1, 0);
    //sketch.fill(0, 255, 0);
    sketch.vertex( 100, -100, 0, 1, 1);
    //sketch.fill(0, 0, 255);
    sketch.vertex( 0,  100, 0, 0, 0);
    sketch.endShape(sketch.CLOSE);
    angle += 0.01;
  };
}, document.getElementById('g4'));

