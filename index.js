// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

function newImage(src, position, left, bottom) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = position;
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
    return image;
}

function newItem(src, position, left, bottom) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = position;
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
    image.addEventListener('click', function() {
        image.remove();
    });
    return image;
}

// Usage of newImage function (with help from ChatGPT)
let greenCharacter = newImage('assets/green-character.gif', 'fixed', '100px', '100px');
let pineTree = newImage('assets/pine-tree.png', 'fixed', '450px', '200px');
let tree = newImage('assets/tree.png', 'fixed', '200px', '300px');
let pillar = newImage('assets/pillar.png', 'fixed', '350px', '100px');
let crate = newImage('assets/crate.png', 'fixed', '150px', '200px');
let well = newImage('assets/well.png', 'fixed', '500px', '425px');
let sword = newItem('assets/sword.png', 'fixed', '500px', '405px');


let shield = newItem('assets/shield.png', 'fixed', '165px', '185px');
let staff = newItem('assets/staff.png', 'fixed', '600px', '100px');



//Original Code
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// let tree = document.createElement('img')
// tree.src = 'assets/tree.png'
// tree.style.position = 'fixed'
// tree.style.left = '200px'
// tree.style.bottom = '300px'
// document.body.append(tree)

// let pillar = document.createElement('img')
// pillar.src = 'assets/pillar.png'
// pillar.style.position = 'fixed'
// pillar.style.left = '350px'
// pillar.style.bottom = '100px'
// document.body.append(pillar)

// let crate = document.createElement('img')
// crate.src = 'assets/crate.png'
// crate.style.position = 'fixed'
// crate.style.left = '150px'
// crate.style.bottom = '200px'
// document.body.append(crate)

// let well = document.createElement('img')
// well.src = 'assets/well.png'
// well.style.position = 'fixed'
// well.style.left = '500px'
// well.style.bottom = '425px'
// document.body.append(well)

//added sword
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })
