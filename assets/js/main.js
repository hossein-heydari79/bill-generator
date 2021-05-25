import { func_minus, func_plus, func_price } from './funcs.js'


let data = [
    {
        img: "https://picsum.photos/100",
        name: "قیمه مکزیکی",
        price: "10,000",
        count: "0",
        sum: "0"
    },
    {
        img: "https://picsum.photos/100",
        name: "قیمه با عدسی",
        price: "15,000",
        count: "0",
        sum: "0"
    },
    {
        img: "https://picsum.photos/100",
        name: "قیمه با ژله",
        price: "20,000",
        count: "0",
        sum: "0"
    },
    {
        img: "https://picsum.photos/100",
        name: "قیمه نذری",
        price: "25,000",
        count: "0",
        sum: "0"
    }
]



let main_render = () => {
    let main = document.getElementById("main");
    main.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let food = document.createElement("div");
        food.setAttribute("class", "food");

        let all_price = document.createElement("div");
        all_price.setAttribute("class", "all-price");

        let all_price_span = document.createElement("span");
        all_price_span.innerHTML = data[i].sum;
        all_price.append(all_price_span);

        let all_price_p = document.createElement("p");
        // all_price_p.innerHTML = "تومان";
        all_price_p.append(document.createTextNode("تومان"));
        all_price.append(all_price_p);

        food.append(all_price);

        let div_main = document.createElement("div");

        let div_main_title = document.createElement("p");
        div_main_title.setAttribute("class", "title-food");
        div_main_title.innerHTML = data[i].name;
        div_main.append(div_main_title);

        let div_main_price = document.createElement("p");
        div_main_price.setAttribute("class", "title-price");

        let price = document.createElement("span");
        price.innerHTML = data[i].price;

        let toman = document.createElement("span");
        toman.innerHTML = " تومان";

        div_main_price.append(price);
        div_main_price.append(toman);

        div_main.append(div_main_price);


        let des = document.createElement("div");
        des.setAttribute("class", "des");

        let plus_minus = document.createElement("div");
        plus_minus.setAttribute("class", "plus-minus");

        let plus = document.createElement("i");
        plus.setAttribute("class", "fa fa-plus");
        plus.addEventListener("click", () => {
            func_plus(i);
            func_price(i);
        })

        plus_minus.append(plus);

        let minus = document.createElement("i");
        minus.setAttribute("class", "fa fa-minus");
        minus.addEventListener("click", () => {
            func_minus(i);
            func_price(i);
        })

        plus_minus.append(minus);

        des.append(plus_minus);

        let des_span = document.createElement("span");
        des_span.innerHTML = data[i].count;
        des.append(des_span);

        div_main.append(des);

        food.append(div_main);


        let img = document.createElement("img");
        img.setAttribute("src", "https://picsum.photos/100");
        img.setAttribute("class", "img");

        food.append(img);

        main.append(food);
    }

}

main_render();



export { data, main_render };