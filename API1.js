let loader = document.querySelector('.loader')

class Marvel {
    constructor() {
        this.ts = new Date().getTime().toString();
        this.hash = '977EB28D08DA2DA2290598E9E8D8A1DD'
    }
    async getMarvel(heroName) {
        let marvelResponse = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${heroName}&ts=1635742595388&apikey=72ba07781930ae66da77fd94f9c3df40&hash=b27b1245d38357dd24cdfef9df55ffb1`)

        let data = await marvelResponse.json();
        let result = await data.data.results[0];
        let comicFetch = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${result.id}/comics?ts=1635742595388&apikey=72ba07781930ae66da77fd94f9c3df40&hash=b27b1245d38357dd24cdfef9df55ffb1`);
        let comResponse = await comicFetch.json();
        let seriesFetch = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${result.id}/series?ts=1635742595388&apikey=72ba07781930ae66da77fd94f9c3df40&hash=b27b1245d38357dd24cdfef9df55ffb1`);
        let seriesResponse = await seriesFetch.json()
        console.log(seriesResponse);
        let comData = comResponse.data.results;
        let name = result.name;
        let description = result.description;
        let image = `${result.thumbnail.path}.${result.thumbnail.extension}`;
        return {
            image,
            name,
            description,
            comData
        }
    }
}



// 1635742595388b82b7e2098a68dac2802e77b1252b1e6ea2d996872ba07781930ae66da77fd94f9c3df40
// https://gateway.marvel.com:443/v1/public/characters?ts=1635742595388&apikey=72ba07781930ae66da77fd94f9c3df40&hash=b27b1245d38357dd24cdfef9df55ffb1




// http://i.annihil.us/u/prod/marvel/i/mg/7/03/6169ef0892110.jpg
// this.privateKey = 'b82b7e2098a68dac2802e77b1252b1e6ea2d9968';
// this.publicKey = '72ba07781930ae66da77fd94f9c3df40';