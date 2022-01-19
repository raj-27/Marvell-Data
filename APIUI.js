class UI {
    // constructor() {
    //     this.name = this.name;
    // }
    characterInfo(name, image, description) {
        let bannerInfo = document.querySelector('.banner');
        let banner = `    
        <div class="card card-body">
        <div class="row p-md-3 p-sm-2 p-2  bg-danger justify-content-center">
            <div class="col-md-5">
                    <img src="${image}" class="img-fluid" alt="" srcset="">
                 <h3 class='my-2'>Name: ${name}</h3>
            </div>
            <div class="col-md-5">
             <p class='bg-secondary  p-4 my-md-0 my-lg-5 my-sm-1 my-0'>${description}</p>
            </div>
        </div>
        </div>
        <h4 class='text-center text-decoration-underlined'>Commic Books</h4>
        <div class="container-fluid">
        <div class="row commicList my-4 row-col-12 row-cols-sm-2 row-cols-md-2  row-cols-lg-4  d-flex justify-content-center">
       
        </div>
       </div>        
        `
        bannerInfo.innerHTML = banner;
    }
    commicsList(listData) {
        let comList = document.querySelector('.commicList');
        let output = '';
        console.log(listData[0].prices[0].type);
        listData.forEach(item => {
            output += `
    <div class="card comic-card col-md-4 col-lg-3 my-2 shadow" style="width: 18rem;">
  <img class="card-img-top" src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.series.name}</h5>
    <h5 class=''>${item.prices[0].type}:${item.prices[0].price}</h5>
    <a href="${item.series.resourceURI}" class="btn btn-primary btn-lg btn-sm">Visit</a>
  </div>
</div>
          `
        });
        comList.innerHTML = output;
    }
}