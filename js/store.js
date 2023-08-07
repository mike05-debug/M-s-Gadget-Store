if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // Search Method
    const searchInput = document.querySelector('.main-search')
    const searchBtn = document.querySelector('.search-btn');
    const userBookTemp = document.querySelector('[book-user-temp]')
    const userBookCtnr = document.querySelector('[book-container]')

    let allBooks = [];

    // searchInput.value = "blue"

    searchInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();
        allBooks.forEach(book => {
            const isVisible = book.title.toLowerCase().includes(value) || book.author.toLowerCase().includes(value);
            book.element.classList.toggle("hide", !isVisible);
        })
    });

    // searchBtn.addEventListener('click', function(){
    //     const value = searchInput.value.toLowerCase();
    //     allBooks.forEach(function(book){
    //         const isVisible = book.title.toLowerCase().includes(value);
    //         book.element.classList.toggle("hide", !isVisible);
    //     })
    // })

    // getting accesss to the json file
    fetch('json/books.json')
    .then(res => {return res.json()})
        .then(data => {
            allBooks = data.map(book =>{ 
                const card = userBookTemp.content.cloneNode(true).children[0];

                const image = card.querySelector('[book-image]');
                const title = card.querySelector('[book-title]');
                const price = card.querySelector('[book-price]');
                const author = card.querySelector('[book-author]');
                const paperType = card.querySelector('[book-paper]');

                image.src = book.image;
                title.textContent = book.title;
                price.textContent = book.price;
                author.textContent = book.author;
                paperType.textContent = book.paperType;
                userBookCtnr.append(card);

                let addToBookbagBtns = document.querySelectorAll('[bookbag-btn]');
                for (let i = 0; i < addToBookbagBtns.length; i++) {
                    const btn = addToBookbagBtns[i];
                    btn.addEventListener('click', addToCart);
                }

                return {title: book.title, author: book.author, element: card};
            })
        }).catch(error => {
            console.error(`Error Retrieving Data!`);
    })

    // --Cart Section--
    let cartItemBtn = document.getElementsByClassName('btn-danger');

    for (let i = 0; i < cartItemBtn.length; i++) {
        const button = cartItemBtn[i];
        button.addEventListener('click', removeCartItem);
    }

    let qtyInput = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < qtyInput.length; i++) {
        const input = qtyInput[i];
        input.addEventListener('change', qtyChanged);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseItems);
}

const purchaseItems = () => {
    if(signedIn == 'false') {
        alert(`Cannot rent book(s) unless you have an account`);
    }
    else {
        alert('Thank you for your purchase.');
        let cartItems = document.getElementsByClassName('cart-items')[0];
        while(cartItems.hasChildNodes) {
            cartItems.removeChild(cartItems.firstChild);
            updateCartTotal();
        }
    }
}

const addToCart = (e) => {
    let btn = e.target;
    let bookItem = btn.parentElement;
    let title = bookItem.querySelectorAll('[book-title]')[0].innerText;
    let price = bookItem.querySelectorAll('[book-price]')[0].innerText;
    let imageSrc = bookItem.querySelectorAll('[book-image]')[0].src;
    console.log(title, price, imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

const addItemToCart = (title, price, imageSrc) => {
    if(signedIn == 'false') {
        const title = 'Cannot add book(s) to cart if not signed in';
        swal(title);
    }
    else {
        let cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        let cartItems = document.getElementsByClassName('cart-items')[0];
        let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
        for (let i = 0; i < cartItemNames.length; i++) {
            if(cartItemNames[i].innerText == title) {
                swal('This item is already added to the cart');
                return;
            }
        }
        let cartRowContent = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <span>Rental Period: </span><input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">Remove</button>
            </div>
        `
        cartRow.innerHTML = cartRowContent;
        cartItems.append(cartRow);
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', qtyChanged);
    }
}

const qtyChanged = (e) => {
    let input = e.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

const removeCartItem = (e) => {
    let btnCLicked = e.target;
    btnCLicked.parentElement.parentElement.remove()
    updateCartTotal();
}


const updateCartTotal = () => {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let itemPrice = cartRow.getElementsByClassName('cart-price')[0];
        let itemQty = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(itemPrice.innerText.replace('$', ''));
        let qty = itemQty.value;
        total = total + (price * qty);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}
