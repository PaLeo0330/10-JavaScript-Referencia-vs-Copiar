    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);

    let name = 'Wes';
    let name2 = name;
    console.log(name, name2);
    name = 'Wesley';
    console.log(name, name2);

    let yo = 'Leonardo';
    let yo2 = yo;
    console.log(yo, yo2);
    yo = 'Paul';
    console.log(yo, yo2);
    
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // // AND WE WANT TO MAKE A COPY OF IT.
    const team = players;
console.log(players, team);

const frutas = ['banana', 'manzana', 'pera', 'uva'];

const copia = frutas;
console.log(frutas, copia);
    
    // You might think we can just do something like this:

    team[3] = 'Lux';
    copia[2] = 'Mango';

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    const copia2 = frutas.slice();

    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    const copia3 = [].concat(frutas);
    const tretre = (players.concat(frutas));
    console.log(tretre);

    // or use the new ES6 Spread
    const team4 = [...players];
    const copia4 = [...frutas];

    team4[3] = 'heeee hawww';
    console.log(team4);

    copia4[1] = 'coco'
    console.log(copia4);

    const team5 = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
   const person = {
    name: 'Wes Bos',
    age: 80
    };

    const me = {
      name: 'Leonardo',
      age: 28
    };

    // and think we make a copy:
    const captain = person;
    captain.number = 99;

    const mecop = me;
    mecop.numero = 33;

  

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log(cap2);

    const me2 = Object.assign({}, me, {numero: 24, age: 26, color: 'rojo'});
    console.log(me2);
    


    // We will hopefully soon see the object ...spread
    const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
  const wes = {
    name: 'Wes',
    age: 100,
    social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
    }};

    

    const leo = {
      nombre: 'Leonardo',
      edad: 28,
      redes: {
        twitter: '@leonardo',
        facebook: 'leonardo.developer'}
    }

    // console.clear();
    console.log(wes);

   const dev = Object.assign({}, wes);
   const dev1 = Object.assign({}, leo);

   const dev2 = JSON.parse(JSON.stringify(wes));

  
  const casa = ['puerta', 'ventana', 'techo', 'piso', 'pared'];

  const patio = ['piscina', 'jardin', 'arboles', 'mascotas', 'parrilla'];

  const copiaCasa = casa;
  console.log(casa, copiaCasa);

  const copiaPAtio = patio;
  console.log(patio, copiaPAtio);

  const copiaCasa2 = [...casa];
  console.log(copiaCasa2);

  const copiaPAtio2 = [...patio];
  console.log(copiaPAtio2);

  const copiaCasa3 = Array.from(casa);
  console.log(copiaCasa3);

  const copiaPAtio3 = Array.from(patio);
  console.log(copiaPAtio3);

  const copiaCasa4 = casa.slice(2, 5);
  console.log(copiaCasa4);
  
  const copiaPAtio4 = patio.slice(2, 5);
  console.log(copiaPAtio4);

  casa[6] = 'ninos';
  casa[5] = 'mascotas';
  patio[5] = 'manguera';
  patio[6] = 'parrilla';
  console.log(casa, patio)

  const copiaCasa5 = Object.assign({}, casa);
  console.log(copiaCasa5);

  const copiaTodo = (casa.concat(patio));
  console.log(copiaTodo);

  const arreglo = Object.assign({}, copiaTodo);
  console.log(arreglo);


  const filtro = copiaTodo.filter(todo => (todo === 'mascotas'));
  console.log(filtro);

  let find = copiaTodo.find(todo => (todo === 'mascotas'));
  console.log(find);

  let findindex = copiaTodo.findIndex(todo => (todo === 'mascotas'));
  console.log(findindex);

  var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

