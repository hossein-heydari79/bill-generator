import { data, main_render, Inventory } from './main.js'


let func_plus = (i) => {

    let all = document.getElementById("all");

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

    main_render();
}


let func_minus = (i) => {

    let all = document.getElementById("all");

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


export { func_minus, func_plus, func_price };