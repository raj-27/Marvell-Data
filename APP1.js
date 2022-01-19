let marvell = new Marvel();
let ui = new UI()

// function run() {
//     marvell.getMarvel('Wolverine')
//         .then(result => {
//             console.log(result.comData);
//             ui.characterInfo(result.name, result.image, result.description)
//             ui.commicsList(result.comData)
//         })
// }
// run()


let myBtn = document.querySelector('.my-btn');
let heroValue = document.getElementById('heroName');
myBtn.addEventListener('click', (e) => {
    marvell.getMarvel(heroValue.value)
        .then(result => {
            console.log(result);
            // console.log(result.status);
            console.log(result.comData);
            ui.characterInfo(result.name, result.image, result.description)
            ui.commicsList(result.comData)
        })
    heroValue.value = '';
    e.preventDefault();
})