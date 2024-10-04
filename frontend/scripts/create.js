const form = document.querySelector('.form');
const title = document.querySelector('.title');
const category = document.querySelector('.category');
const image = document.querySelector('.image');
const description = document.querySelector('.description');

const formData = {
    title: '',
    category: '',
    image: '',
    description: '',
}

const handleTitleChange = (e) => {
    const {target} = e;
    const {name, value} = target;
    formData.title = value
}
const handleCategoryChange = (e) => {
    const {target} = e;
    const {name, value} = target;
    formData.category = value
}
const handleImageChange = (e) => {
    const {target} = e;
    const {name, value} = target;
    formData.image = value
}
const handleDescriptionChange = (e) => {
    const {target} = e;
    const {name, value} = target;
    formData.description = value
}


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
}

title.addEventListener('input', handleTitleChange);
category.addEventListener('input', handleCategoryChange);
image.addEventListener('input', handleImageChange);
description.addEventListener('input', handleDescriptionChange);

form.addEventListener('submit', handleSubmit);