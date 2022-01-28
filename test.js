const showShoes = document.querySelector('.shoes__box_1');
const app = { 
shoesList:[
  {
    id:1,
    piture: 'boot1(1).jpg',
    shoesName: 'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
    shoesPrice: '125.00$',
    color:'black',
  },
  {
    id:2,
    piture: 'boot1(2).jpg',
    shoesName: 'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
    shoesPrice: '125.00$',
    color:'black',
  },
  {
    id:3,
    piture: 'boot1(3).jpg',
    shoesName: 'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
    shoesPrice: '125.00$',
    color:'black',
  },
  {
    id:4,
    piture: 'boot1(4).jpg',
    shoesName: 'SINGLAIR PATENT CR BOOTS',
    shoesPrice: '125.00$',
    color:'black',
  },
  {
    id:5,
    piture: 'row_bot(1).jpg',
    shoesName: 'SINGLAIR RM BOOTS',
    shoesPrice: '125.00$',
    color:'black',
  },
  {
    id:6,
    piture: 'boot1(5).jpg',
    shoesName: 'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
    shoesPrice: '125.00$',
    color:'black',
  },
],
   render: function(){
         const toHtmls = this.shoesList.map(shoes =>{
           return `
           <div class="shoes__item">
                    <img class="img__shoes" src="/image/${shoes.piture}" alt="">
                    <h3>${shoes.shoesName}</h3>
                    <p>${shoes.shoesPrice}</p>
                    <button class="btn-shoes-change" style="background-color:${shoes.color}"></button>
                    <div class="btn__buy" onclick="showOrder()">
                    <button>ADD TO BAG</button>
                    </div>
            </div>
             `
         })
         showShoes.innerHTML = toHtmls.join('');
        },
      start: function(){
        this.render();
      }
};
app.start();