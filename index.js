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
validations = {
    name: false,
    price: false,
    seller: false,
    url: false,
    description: false,
    quantity: false
};
function enableButton() {
    if (
        validations.name === true &&
        validations.price === true &&
        validations.seller === true &&
        validations.url === true &&
        validations.description === true &&
        validations.quantity === true
    ) {
        $('#addSellItem').attr('disabled', false);
    } else {
        $('#addSellItem').attr('disabled', true);
    }
}
function checkName() {
    if ($('#itemName').val() != undefined) {
        validations.name = true;
        enableButton();
    }
}
function checkPrice() {
    if ($('#itemPrice').val() != undefined) {
        validations.price = true;
        enableButton();
    }
}
function checkSeller() {
    if ($('#itemSeller').val() != undefined) {
        validations.seller = true;
        enableButton();
    }
}
function checkUrl() {
    if ($('#itemUrl').val() != undefined) {
        validations.url = true;
        enableButton();
    }
}
function checkDescription() {
    if ($('#itemDescription').val() != undefined) {
        validations.description = true;
        enableButton();
    }
}
function checkQuantity() {
    if ($('#itemQuantity').val() != undefined) {
        validations.quantity = true;
        enableButton();
    }
}
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
    $('#itemName')
        .attr('hidden', 'true')
        .val('');
    $('#itemPrice')
        .attr('hidden', 'true')
        .val('');
    $('#itemUrl')
        .attr('hidden', 'true')
        .val('');
    $('#itemDescription')
        .attr('hidden', 'true')
        .val('');
    $('#itemQuantity')
        .attr('hidden', 'true')
        .val('');
    $('#addSellItem')
        .attr('hidden', 'true')
        .val('');
    $('#itemSeller')
        .attr('hidden', 'true')
        .val('');
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
        total += parseFloat(shoppingCart[i].price);
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
function attachHandlers() {
    $('#itemName').on('input', checkName());
    $('#itemPrice').on('input', checkPrice());
    $('#itemSeller').on('input', checkSeller());
    $('#itemUrl').on('input', checkUrl());
    $('#itemDescription').on('input', checkDescription());
    $('#itemQuantity').on('input', checkQuantity());
}
function main() {
    attachHandlers();
    drawItems();
}

$(main);
