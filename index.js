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
        picUrl:
            'http://www.gstatic.com/tv/thumb/tvbanners/10420628/p10420628_b_v8_aa.jpg',
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
errors = [];
errorMessage = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>';
validations = {
    name: false,
    price: false,
    seller: false,
    url: false,
    description: false,
    quantity: false
};
function enableButton() {
    console.log(errors.length);
    if (
        validations.name === true &&
        validations.price === true &&
        validations.seller === true &&
        validations.url === true &&
        validations.description === true &&
        validations.quantity === true
    ) {
        $('#addSellItem').removeAttr('disabled');
    } else {
        $('#addSellItem').attr('disabled', true);
    }
    if (errors.length >= 1) {
        $('#errors').html(errorMessage + errors[0]);
    } else {
        $('#errors').html('');
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
            '<div class="col-sm-4"><div class="photo"><img src="' +
            INVENTORY[i].picUrl +
            '"></div><p>' +
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

$('#itemName').on('input', function(event) {
    var name = event.currentTarget.value;
    console.log($('#itemName').val());
    if (name === '') {
        errors.push(' Name is blank');
        validations.name = false;
    } else {
        if (errors.includes(' Name is blank')) {
            errors.splice(errors.indexOf(' Name is blank'), 1);
        }
        validations.name = true;
    }

    enableButton();
});
$('#itemPrice').on('input', function(event) {
    var price = event.currentTarget.value;
    if (price === '') {
        errors.push(' Price is blank');
        validations.price = false;
    } else {
        if (errors.includes(' Price is blank')) {
            errors.splice(errors.indexOf(' Price is blank'));
        }
        validations.price = true;
    }
    enableButton();
});
$('#itemSeller').on('input', function(event) {
    var seller = event.currentTarget.value;
    if (seller === '') {
        errors.push(' Seller is blank');
        validations.seller = false;
    } else {
        if (errors.includes(' Seller is blank')) {
            errors.splice(errors.indexOf(' Seller is blank'));
        }
        validations.seller = true;
    }
    enableButton();
});
$('#itemUrl').on('input', function(event) {
    var url = event.currentTarget.value;
    if (url === '') {
        errors.push(' Url is invalid');
        validations.url = false;
    } else {
        if (errors.includes(' Url is invalid')) {
            errors.splice(errors.indexOf(' Url is invalid'));
        }
        validations.url = true;
    }
    enableButton();
});
$('#itemDescription').on('input', function(event) {
    var description = event.currentTarget.value;
    if (description === '') {
        errors.push(' Description is blank');
        validations.description = false;
    } else {
        if (errors.includes(' Description is blank')) {
            errors.splice(errors.indexOf(' Description is blank'));
        }
        validations.description = true;
    }
    enableButton();
});
$('#itemQuantity').on('input', function(event) {
    var quantity = event.currentTarget.value;
    if (quantity === '') {
        errors.push(' Quantity is invalid');
        validations.quantity = false;
    } else {
        if (errors.includes(' Quantity is invalid')) {
            errors.splice(errors.indexOf(' Quantity is invalid'));
        }
        validations.quantity = true;
    }
    enableButton();
});

function main() {
    // attachHandlers();
    drawItems();
}

$(main);
