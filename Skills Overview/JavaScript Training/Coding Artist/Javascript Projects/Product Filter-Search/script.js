 let products = {
     data: [{
         productName: "Leng The Fabulous",
         category: "Topwear",
         price: "30",
         image: "https://product.hstatic.net/1000331482/product/huong_sau_4d3b558db41a4ff9824a7b797898bc14_large.jpg"
     }, {
         productName: "Leng The Fabulous",
         category: "Topwear",
         price: "49",
         image: "https://product.hstatic.net/1000331482/product/huong_truoc_copy_efb667ff5def4b6ea15d102faf0042ac_large.jpg"
     }, {
         productName: "Leng The Fabulous",
         category: "Topwear",
         price: "38",
         image: "https://product.hstatic.net/1000331482/product/trangtruoc_d5ae92a5e21040f7bced6cffaf86815c_large.jpg"
     }, {
         productName: "Leng The Fabulous",
         category: "Topwear",
         price: "42",
         image: "https://product.hstatic.net/1000331482/product/z1972140853554_fecb62856842650f67017338e02a0e16_a43ab8a961024cb7b988e910118dfdf4_large.jpg"
     }, {
         productName: "Women's Bottomwear",
         category: "Bottomwear",
         price: "30",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIMRXmhLStwPhr2ykwZ-8LrflVnSmWMxd9rskPT6o6A0LbD5tc96fNZ5JuthJSEABFiY&usqp=CAU"
     }, {
         productName: "Women's Bottomwear",
         category: "Bottomwear",
         price: "49",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrvyCRctWfXkxzcu13by-wVkmeapynOBmNkaY1sYcctQZBnr5rsACuEC4Hxy2rAJz9N0&usqp=CAU"
     }, {
         productName: "Women's Bottomwear",
         category: "Bottomwear",
         price: "38",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfiB1Q7iJ-c7KL3yzFl6q_SY-V9qXTvucTB-0V_s9ak3wflEvAD_aEbnwFJ8C3Gmnjkc&usqp=CAU"
     }, {
         productName: "Women's Bottomwear",
         category: "Bottomwear",
         price: "42",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrQ_63N5cm0LS0iNQILeunstIc1hL0QwnKWXc6EmK6ib-sFVnpURqr3dMeqAZQjkl0nM&usqp=CAU"
     }, {
         productName: "Bomber Jacket",
         category: "Jacket",
         price: "30",
         image: "https://cf.shopee.vn/file/642845c525dc934aba259bdd3938182a"
     }, {
         productName: "Bomber Jacket",
         category: "Jacket",
         price: "49",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5tBZuvrarx0vZeWmyVGQO-QVbyP5H9LXHxhnxjTIZgqmO5mVG4sd1V8cj9N1VIt_I74&usqp=CAU"
     }, {
         productName: "Bomber Jacket",
         category: "Jacket",
         price: "38",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3aS6xlSfMALry_l0mjcFPlRbth9v3ruilssVvWGBNDmof55nEjjMw30Jw6PO7SoA9jU&usqp=CAU"
     }, {
         productName: "Bomber Jacket",
         category: "Jacket",
         price: "42",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEklphqBbXvTtaR_sA9hLnqXsiyJMPlbvyX1lG9aFSDwNAMSKxjzFnqQwPyElMUYMcrk&usqp=CAU"
     }, {
         productName: "Smart Watch",
         category: "Watch",
         price: "30",
         image: "https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg"
     }, {
         productName: "Smart Watch",
         category: "Watch",
         price: "49",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyR-wAcWMJUiNV7XT-LQ0K1ApdmMQ2_onTIf4Pvb2fahedNZhsif40bcu0qJ59HEFEGg&usqp=CAU"
     }, {
         productName: "Smart Watch",
         category: "Watch",
         price: "38",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxaqFJXUAeveUtAWJaocdJA7_KczBMnH5REDvV6VD4-GwsrttadoacU0CPmOMuJdsPOw&usqp=CAU"
     }, {
         productName: "Smart Watch",
         category: "Watch",
         price: "42",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhW7YYTV7qoGOoLfK1zfccfJbshxW_kggfR0JkV5uhU60NFxDgJB9OvV_iZhxJwRmcNs&usqp=CAU"
     }]
 };

 for (let i of products.data) {
     // create card
     let card = document.createElement('div');

     // card should have category
     card.classList.add('card', i.category, 'hide');

     // image div
     let imgContainer = document.createElement('div');
     imgContainer.classList.add('image-container');

     // img tag
     let image = document.createElement('img');
     image.setAttribute('src', i.image);
     imgContainer.appendChild(image);
     card.appendChild(imgContainer);

     //container
     let container = document.createElement('div');
     container.classList.add('container');

     // product name
     let name = document.createElement('h5');
     name.classList.add('product-name');
     name.innerText = i.productName.toUpperCase();
     container.appendChild(name);

     // price
     let price = document.createElement('h6');
     price.innerText = "$" + i.price;
     container.appendChild(price);

     card.appendChild(container);
     document.getElementById('products').appendChild(card);
 }

 // parameter passed from button (parameter same as category)
 function filterProduct(value) {
     // Button class code
     let button = document.querySelectorAll('.button-value');
     button.forEach(button => {
         // check if value equals innerText
         if (value.toUpperCase() == button.innerText.toUpperCase()) {
             button.classList.add('active');
         } else {
             button.classList.remove('active');
         }
     });

     // select all cards
     let elements = document.querySelectorAll('.card');
     // loop through all cards
     elements.forEach(element => {
         // display all cards on 'all' button click
         if (value == 'all') {
             element.classList.remove('hide');
         } else {
             // check if element contains category class
             if (element.classList.contains(value)) {
                 // display element based on category
                 element.classList.remove('hide');
             } else {
                 // hide other elements
                 element.classList.add('hide');
             }
         }
     });
 }

 // search button click
 document.getElementById('search').addEventListener('click', () => {
     //initializations
     let searchInput = document.getElementById('search-input').value;
     let elements = document.querySelectorAll('.product-name');
     let cards = document.querySelectorAll('.card');

     // loop through all elements
     elements.forEach((element, index) => {
         // check if text includes the search value
         if (element.innerText.includes(searchInput.toUpperCase())) {
             // display matching card
             cards[index].classList.remove('hide');
         } else {
             cards[index].classList.add('hide');
         }
     });
 });

 // initially display all products
 window.onload = () => {
     filterProduct('all');
 }