const imgArray = [
    { pic: "pic5.jpg", blur: "pic5B.jpg"},
    { pic: "pic4.jpg", blur: "pic4B.jpg"},
    { pic: "pic3.jpg", blur: "pic3B.jpg"},
    { pic: "pic2.jpg", blur: "pic2B.jpg"},
    { pic: "pic1.jpg", blur: "pic1B.jpg"},
]

const thumbDiv = document.querySelector('#thumb-bar')

const displayedImg = document.querySelector('.displayed-img')

for (item of imgArray) {
    console.log(item.pic)
    const insertPic = `
    <img onmouseover="displayPic(this, imgArray)" id="thumb-pic" src="images/${item.pic}">
    `
    thumbDiv.insertAdjacentHTML('afterbegin', insertPic)
}

function displayPic(item, array) {
    const picture = item.src
    for (image of array) {
        const imageString = image.pic
        if (picture.includes(imageString)) {
            const attribute = document.createAttribute("src")
            attribute.value = `images/${imageString}`
            console.log(attribute)
            displayedImg.setAttributeNode(attribute)
        }
    }
}
