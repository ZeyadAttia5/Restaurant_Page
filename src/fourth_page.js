const load_fourth_page = () => {
    const div = document.querySelector('#content');

    const txt = document.createElement('p');
    txt.textContent = "This is the fourth page maaan relaax 😀" 

    const img = document.createElement('img');
    img.src = "../src/fourth.jpg"
    img.width = 800;

    const header = document.createElement('h1')
    header.textContent = 'Akoozab'
    header.style.marginTop = '5px';

    div.appendChild(header);
    div.appendChild(txt);
    div.appendChild(img);
}


export {load_fourth_page};