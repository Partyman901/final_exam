const imgArray = [
    { pic: "pic5.jpg", blur: "pic5B.jpg"},
    { pic: "pic4.jpg", blur: "pic4B.jpg"},
    { pic: "pic3.jpg", blur: "pic3B.jpg"},
    { pic: "pic2.jpg", blur: "pic2B.jpg"},
    { pic: "pic1.jpg", blur: "pic1B.jpg"},
]

const thumbDiv = document.querySelector('#thumb-bar')

const displayedImg = document.querySelector('.displayed-img')

const footerElement = document.querySelector('footer')

const userInput = document.querySelector('input')

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
            const insertInput = `
        <label>What effect do you want to apply?</label>
        <input id="effect" type="text">
        <button onclick='submitBtn(displayedImg, imgArray)'>Submit</button>
        `
        if (footerElement.childElementCount == 0) {
        footerElement.insertAdjacentHTML('afterbegin', insertInput)
            }
        }
    }
}

function submitBtn(tag, array) {
    const inputValue = document.querySelector('input').value
    const userInput = document.querySelector('input')
    const tagSource = tag.src
    console.log(tagSource)
    console.log(array)
    if (inputValue == "blur") {
        for (item of array) {
            const imageString = item.pic
            if (tagSource.includes(imageString)) {
                const attribute = document.createAttribute("src")
                const blurImg = item.blur
                console.log(blurImg)
                attribute.value = `images/${blurImg}`
                displayedImg.setAttributeNode(attribute)
                }
            }
        } else {
            alert("Invalid input")
            }   
    userInput.value = ''
}
