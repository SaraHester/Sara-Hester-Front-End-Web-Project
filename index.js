INVENTORY = [
    { name: 'Sword Art Online', price: 20 },
    { name: 'Sword Art Online: season 2', price: 20 },
    { name: 'Tokyo Ghoul', price: 20 },
    { name: 'Tokyo Ghoul: root A', price: 20 },
    { name: 'Attack On Titan', price: 20 },
    { name: 'Dragon Ball', price: 20 },
    { name: 'Dragon Ball Z', price: 20 },
    { name: 'Dragon Ball Super', price: 20 },
    { name: 'Dragon Ball GT', price: 20 },
    { name: 'Naruto', price: 20 },
    { name: 'Naruto Shippuden', price: 20 },
    { name: 'One Piece', price: 20 },
    { name: 'Death Note', price: 20 },
    { name: 'Kill la Kill', price: 20 },
    { name: 'Akame ga Kill', price: 20 },
    { name: 'Hunter X Hunter', price: 20 },
    { name: 'Bleach', price: 20 },
    { name: 'My Hero Academia', price: 20 }
];
function main() {
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
            '<br>' +
            INVENTORY[i].price +
            '</p></div>';
        $('#items').html(html);
    }
}
$(main);
