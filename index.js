INVENTORY = [
    {
        name: 'Sword Art Online',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Sword Art Online: season 2',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Tokyo Ghoul',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Tokyo Ghoul: root A',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Attack On Titan',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Dragon Ball',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Dragon Ball Z',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Dragon Ball Super',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Dragon Ball GT',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Naruto',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Naruto Shippuden',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'One Piece',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Death Note',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Kill la Kill',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Akame ga Kill',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Hunter X Hunter',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'Bleach',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    },
    {
        name: 'My Hero Academia',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: '',
        seller: 'Anime World'
    }
];
shoppingCart = [];

function addToCart(number) {
    INVENTORY[number].inStock -= 1;
    shoppingCart.push(INVENTORY[number]);
    console.log(shoppingCart);
    drawItems();
}
function hideSellForm() {
    $('#toggleSellForm').html(
        'Add item to sell <i class="fa fa-plus" aria-hidden="true"></i>'
    );
    $('#toggleSellForm').css('color', 'black');
    $('#itemName').attr('hidden', 'true');
    $('#itemPrice').attr('hidden', 'true');
    $('#itemUrl').attr('hidden', 'true');
    $('#itemDescription').attr('hidden', 'true');
    $('#itemQuantity').attr('hidden', 'true');
    $('#addSellItem').attr('hidden', 'true');
    $('#itemSeller').attr('hidden', 'true');
}
function showSellForm() {
    $('#toggleSellForm').html(
        'Cancel <i class="fa fa-minus" aria-hidden="true"></i>'
    );
    $('#toggleSellForm').css('color', 'red');
    $('#data').html('');
    $('#itemName').removeAttr('hidden');
    $('#itemPrice').removeAttr('hidden');
    $('#itemUrl').removeAttr('hidden');
    $('#itemDescription').removeAttr('hidden');
    $('#itemQuantity').removeAttr('hidden');
    $('#addSellItem').removeAttr('hidden');
    $('#itemSeller').removeAttr('hidden');
}
function seeInfo(number) {
    console.log('seeInfo(' + number + ') has been clicked');
    $('#data').html(
        '<button onclick="drawItems()">Back</button><p>' +
            INVENTORY[number].name +
            '<br>$' +
            INVENTORY[number].price +
            '<br>Seller: ' +
            INVENTORY[number].seller +
            '<br>In Stock: ' +
            INVENTORY[number].inStock +
            '<br>Description : ' +
            INVENTORY[number].description +
            '</p>'
    );
}
function drawItems() {
    $('#cart').html(
        '<i class="fa fa-shopping-cart" aria-hidden="true">' +
            shoppingCart.length
    );
    html = '';
    for (i = 0; i < INVENTORY.length; i++) {
        if (i == 0) {
            html += '<div class="row">';
        }
        if (i % 3 == 0) {
            html += '</div><div class="row">';
        }
        html +=
            '<div class="col-sm-4"><p>' +
            INVENTORY[i].name +
            '<br>$' +
            INVENTORY[i].price +
            '<br>' +
            INVENTORY[i].inStock +
            '<button id="addToCart' +
            i +
            '" onclick="addToCart(' +
            i +
            ')">Add to Cart</p><button id="info' +
            i +
            '" onclick="seeInfo(' +
            i +
            ')">More info</button></div>';

        $('#data').html(html);
        if (INVENTORY[i].inStock === 0) {
            $('#addToCart' + i).attr('disabled', 'true');
        }
    }
}
function showCart() {
    total = 0;
    html = '<button onclick="drawItems()">Back</button>';
    for (i = 0; i < shoppingCart.length; i++) {
        html +=
            '<p>' +
            shoppingCart[i].name +
            '<br>' +
            shoppingCart[i].price +
            '<br>' +
            shoppingCart[i].inStock +
            '<br></p>';
        total += shoppingCart[i].price;
    }
    $('#data').html(html + '<br>Total: ' + total);
}
function toggleSellForm() {
    if ($('#toggleSellForm').css('color') === 'rgb(0, 0, 0)') {
        showSellForm();
    } else if ($('#toggleSellForm').css('color') === 'rgb(255, 0, 0)') {
        hideSellForm();

        drawItems();
    }
}
function sell() {
    // sellers = [];
    // names = [];
    // for (i = 0; i < INVENTORY.length; i++) {
    //     sellers.push(INVENTORY[i].seller);
    //     names.push(INVENTORY[i].name);
    // }
    // if (names.indexOf($('#itemName').val()) > -1) {
    //     if (sellers.indexOf($('#itemSeller').val()) > -1) {
    //         console.log('Name and seller matches');
    //     } else {
    //         console.log('Name matches but seller does not match');
    //     }
    // } else {
    //     console.log('Name does not match');
    // }
    item = {
        name: $('#itemName').val(),
        price: $('#itemPrice').val(),
        inStock: $('#itemQuantity').val(),
        description: $('#itemDescription').val(),
        picUrl: $('#itemUrl').val(),
        seller: $('#itemSeller').val()
    };
    INVENTORY.push(item);
    hideSellForm();
    drawItems();
}
function main() {
    drawItems();
}
$(main);
