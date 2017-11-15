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
function addToCart(number) {
    INVENTORY[number].inStock -= 1;
    draw();
}
function draw() {
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
            ')">Add to Cart</p></div>';
        $('#items').html(html);
    }
}
function main() {
    draw();
}
$(main);
