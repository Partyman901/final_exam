const imgArray = [
    { pic: "pic1.jpg", blur: "pic1B.jpg"},
    { pic: "pic2.jpg", blur: "pic2B.jpg"},
    { pic: "pic3.jpg", blur: "pic3B.jpg"},
    { pic: "pic4.jpg", blur: "pic4B.jpg"},
    { pic: "pic5.jpg", blur: "pic5B.jpg"},
]

const thumbDiv = document.querySelector('#thumb-bar')

for (item of imgArray) {
    console.log(item.pic)
    const insertPic = `
    <img onmouseover="displayPic(this)" class="thumb-pic" src="images/${item.pic}">
    `
    thumbDiv.insertAdjacentHTML('afterbegin', insertPic)
}