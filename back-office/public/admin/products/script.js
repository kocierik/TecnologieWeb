function retrieveProducts(target) {
    var url = "/v1/products/";
    fetch(url).then((response) => response.json()).then((data) => {
        $(target).text("");
        data.forEach(function (el) {
            console.log(el)
            var img = "/favicon.ico"
            if (el.image)
                img = "/pictures/" + el.image.filename
            $(target).append([{ img: img, name: el.name, price: el.price, id: el._id, description: el.description, alt: el.name + "'s picture" }].map(Item));
        });
    });
}
function itemRemove(name, id) {
    if (confirm('Are you sure you want to remove the product ' + name + " | " + id + '?')) {
        fetch("/v1/products/" + id, {
            method: 'DELETE',
        }).then(retrieveProducts("#itemList"))
    }
}

//item template
const Item = ({ img, name, price, id, description, alt }) => `
<tr>
    <td class="p-2 py-8 border-b border-solid border-gray-300">
        <div class="pl-4 flex flex-wrap flex-row items-center">
            <div class="mr-4 h-16 w-16 block flex flex-row items-center">
                <img class="rounded-lg" alt="${alt}" src="${img}" onerror="this.onerror=null; this.src='/favicon.ico'"></div>
            <div class="mr-4 h-16 w-64 block flex flex-row items-center text-gray-700">${name}</div>
            <div class="mr-4 h-16 w-16 block flex flex-row items-center text-gray-700">${price} $</div>
            <div class="mr-4 h-16 w-64 block flex flex-row items-center text-gray-700">${description}</div>
        </div>

    </td>
    <td class="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
        <a href="edit/?id=${id}"><i class="bi bi-pencil"></i></a>
        &nbsp;&nbsp;
        <button onclick='itemRemove("${name}","${id}")'><i class="bi bi-trash"></i></button>
    </td>
</tr>
`;

$(document).ready(function () {
    retrieveProducts('#itemList');
});