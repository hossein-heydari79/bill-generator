import { data, main_render } from './main.js'


let func_plus = (i) => {
    let item = data.find((item, index) => i === index);
    if (item.count < 9) {
        item.count++
    }

    main_render();
}


let func_minus = (i) => {
    let item = data.find((item, index) => index === i);
    if (item.count > 0) {
        item.count--;
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