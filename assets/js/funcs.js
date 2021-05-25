import { data, main_render, Inventory, off } from './main.js'


let func_plus = (i) => {

    let all = document.getElementById("all");
    let service = document.getElementById("service");

    let item = data.find((item, index) => i === index);
    if (item.count < 9) {
        item.count++
    }

    let select_check = Inventory.select.find((item, index) => data[i] === item);
    if (!select_check) {
        Inventory.select.push(item);
    }
    else {
        select_check.count = item.count;
    }

    if (Inventory.price() != 0) {
        all.innerHTML = `${Inventory.price()},000`;
    }
    else {
        all.innerHTML = Inventory.price();
    }

    if ((Inventory.price() * (2 / 100)) != 0) {
        service.innerHTML = `${(Inventory.price() * 2) * 10}`;
    }
    else {
        service.innerHTML = 0;
    }

    main_render();
}

let funcAll = document.getElementById("funcAll");
funcAll.addEventListener("click", () => {
    let all_price = document.getElementById("all-price");
    let done = document.getElementById("done").innerHTML;

    if (Inventory.price() + (Inventory.price() * 2) * 10 == 0) {
        all_price.innerHTML = 0;
    }
    else {
        all_price.innerHTML = `${Inventory.price() * 1000 + ((Inventory.price() * 2) * 10) - done}`
    }

})



let func_minus = (i) => {

    let all = document.getElementById("all");
    let service = document.getElementById("service");

    let item = data.find((item, index) => index === i);
    if (item.count > 0) {
        item.count--;
    }


    let select_check = Inventory.select.findIndex((item, index) => data[i] === item);

    if (Inventory.select[select_check].count == 0) {
        Inventory.select.splice(select_check, 1);
    }


    if (Inventory.price() != 0) {
        all.innerHTML = `${Inventory.price()},000`;
    }
    else {
        all.innerHTML = Inventory.price();
    }

    if ((Inventory.price() * (2 / 100)) != 0) {
        service.innerHTML = `${(Inventory.price() * 2) * 10}`;
    }
    else {
        service.innerHTML = 0;
    }

    main_render();
}

let func_price = (i) => {

    let item = data.find((item, index) => i === index);

    let price = parseInt(item.count) * parseInt(item.price);

    if (price != 0) {
        item.sum = `${price},000`;
    }
    else {
        item.sum = 0;
    }

    main_render();

}

let occured = document.getElementById("occured");

occured.addEventListener("click", () => {
    let off_code = document.getElementById("off-code").value;
    let index = off.findIndex((item) => item == off_code);

    if (index != -1) {
        document.getElementById("off-code").style.backgroundColor = "white";
        if (off[index] == "gold") {
            let done = document.getElementById("done");
            done.innerHTML = `${(Inventory.price() * 20) * 10}`
        }

        if (off[index] == "silver") {
            let done = document.getElementById("done");
            done.innerHTML = `${(Inventory.price() * 10) * 10}`
        }

        if (off[index] == "bronze") {
            let done = document.getElementById("done");
            done.innerHTML = `${(Inventory.price() * 5) * 10}`
        }
    }
    else {
        document.getElementById("off-code").style.backgroundColor = "#FBDFDC";
    }
})

export { func_minus, func_plus, func_price };