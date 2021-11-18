var board = document.createElement('div')
board.style.width = "1030"
board.style.display = "flex";
board.style.flexDirection = "row";
board.style.flexWrap = "wrap";
board.style.backgroundImage = "linear-gradient(to right,dodgerblue,mediumseagreen)"
board.style.border = "2px solid black"

var h1=document.createElement('h1')
h1.style.width = "1030"
h1.style.textAlign = "center"
h1.style.color = "red"
h1.style.marginLeft = "500px"
h1.innerHTML = "Make Up Products"
board.appendChild(h1)

async function getAllData() {
    try {
        var data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
        var obj = await data.json();
        console.log(obj);

        obj.forEach(element => {
            var box = document.createElement('div')
            box.style.width = "500px"
            box.style.height = "900px"
            box.style.display = "flex"
            box.style.flexDirection = "column"
            box.style.marginTop = "50px"
            box.style.marginLeft = "50px"
            box.style.marginRight = "50px"
            box.style.marginBottom = "20px"
            box.style.border = "10px solid white"
            box.style.borderRadius = "20px"
            box.backgroundColor = "#F8F8F8"
            board.appendChild(box)

            var pic = document.createElement('img')
            pic.setAttribute('src', element.image_link)
            pic.setAttribute('alt', 'image')
            pic.style.width = "490px"
            pic.style.height = "250px"
            pic.style.border = "5px solid white"
            pic.style.backgroundColor = "white"
            box.appendChild(pic)

            var brand = document.createElement('div')
            brand.style.height = "50px"
            brand.style.color = "black"
            brand.style.fontStyle = "bold"
            brand.style.textAlign = "center"
            //brand.style.border = "1px solid black"
            brand.style.fontWeight = "1000";
            brand.style.paddingTop = "15px";
            brand.style.backgroundColor = "white";
            brand.innerText = "Brand : " + element.brand;
            box.appendChild(brand)

            var product = document.createElement('div')
            product.style.height = "50px"
            product.style.color = "black"
            product.style.fontStyle = "bold"
            product.style.textAlign = "center"
            // product.style.border = "1px solid black"
            product.style.fontWeight = "900";
            // product.style.paddingTop = "15px";
            product.style.backgroundColor = "white";
            product.innerText = "Product :" + element.name;
            box.appendChild(product)

            var amount = document.createElement('div')
            amount.style.height = "50px"
            amount.style.color = "black"
            amount.style.textAlign = "center"
            // amount.style.border = "1px solid black"
            amount.style.fontWeight = "900";
            // amount.style.paddingTop = "15px";
            amount.style.backgroundColor = "white"
            amount.innerText = "Price :" + element.price_sign + element.price;
            box.appendChild(amount)

            var product = document.createElement('div')
            var ab = document.createElement('a')
            ab.innerText = "Click Here for the Product Link";
            ab.setAttribute('title', 'Click Here for the Product Link')
            ab.setAttribute('href', element.product_link)
            product.style.height = "50px"
            product.style.textAlign = "center"
            product.style.fontWeight = "900";
            product.style.backgroundColor = "white"
            product.appendChild(ab)
            box.appendChild(product)

            var detail = document.createElement('div')
            detail.style.height = "400px"
            detail.style.fontSize = "400"
            detail.style.overflow = "hidden";
            detail.style.textOverflow = "ellipsis";
            detail.style.fontFamily = "monospace";
            detail.style.textAlign = "justify";
            detail.style.wordSpacing = "normal";
            detail.style.lineHeight = "normal";
            detail.style.backgroundColor = "white"
            detail.style.color = "black"
            detail.style.padding = "16px";
            detail.innerText = "Description :" + element.description;
            box.appendChild(detail)


        });

    } catch (error) {
        console.log(error);
    }
}
getAllData()

document.body.appendChild(board);