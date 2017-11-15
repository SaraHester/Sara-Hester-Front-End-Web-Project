INVENTORY = [
    {
        name: 'Sword Art Online',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Sword Art Online: season 2',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Tokyo Ghoul',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Tokyo Ghoul: root A',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Attack On Titan',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Dragon Ball',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Dragon Ball Z',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Dragon Ball Super',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Dragon Ball GT',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    { name: 'Naruto', price: 20, inStock: 20, description: '', picUrl: '' },
    {
        name: 'Naruto Shippuden',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    { name: 'One Piece', price: 20, inStock: 20, description: '', picUrl: '' },
    { name: 'Death Note', price: 20, inStock: 20, description: '', picUrl: '' },
    {
        name: 'Kill la Kill',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Akame ga Kill',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    {
        name: 'Hunter X Hunter',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    },
    { name: 'Bleach', price: 20, inStock: 20, description: '', picUrl: '' },
    {
        name: 'My Hero Academia',
        price: 20,
        inStock: 20,
        description: '',
        picUrl: ''
    }
];
shoppingCart = [];

function addToCart(number) {
    INVENTORY[number].inStock -= 1;
    shoppingCart.push(INVENTORY[number]);
    console.log(shoppingCart);
    drawItems();
}
function seeInfo(number) {
    console.log('seeInfo(' + number + ') has been clicked');
    $('#data').html(
        '<button onclick="drawItems()">Back</button><p>' +
            INVENTORY[number].name +
            '<br>$' +
            INVENTORY[number].price +
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
function showSellForm() {
    console.log($('#showSellForm').css('color'));
    if ($('#showSellForm').css('color') === 'rgb(0, 0, 0)') {
        $('#showSellForm').html(
            'Cancel <i class="fa fa-minus" aria-hidden="true"></i>'
        );
        $('#showSellForm').css('color', 'red');
        $('#data').html('');
        $('#itemName').removeAttr('hidden');
        $('#itemPrice').removeAttr('hidden');
        $('#itemUrl').removeAttr('hidden');
        $('#itemDescription').removeAttr('hidden');
        $('#itemQuantity').removeAttr('hidden');
        $('#addSellItem').removeAttr('hidden');
    } else if ($('#showSellForm').css('color') === 'rgb(255, 0, 0)') {
        $('#showSellForm').html(
            'Add item to sell <i class="fa fa-plus" aria-hidden="true"></i>'
        );
        console.log($('#showSellForm').css('color', 'black'));
        $('#itemName').attr('hidden', 'true');
        $('#itemPrice').attr('hidden', 'true');
        $('#itemUrl').attr('hidden', 'true');
        $('#itemDescription').attr('hidden', 'true');
        $('#itemQuantity').attr('hidden', 'true');
        $('#addSellItem').attr('hidden', 'true');
        drawItems();
    }
}
function main() {
    drawItems();
}
$(main);
