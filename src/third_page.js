const load_third_page = () => {
    const div = document.querySelector('#content');

    const txt = document.createElement('p');
    txt.textContent = "This is the third page maaan relaax 😀"

    const img = document.createElement('img');
    img.src = "./third.jpg"
    img.width = 800;

    const header = document.createElement('h1')
    header.textContent = 'Akoozab'
    header.style.marginTop = '5px';

    div.appendChild(header);
    div.appendChild(txt);
    div.appendChild(img);
}


export { load_third_page };