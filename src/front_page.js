const load_front_page = () => {
    const div = document.querySelector('#content')

    
    const txt = document.createElement('p')
    txt.textContent = "Indulge in exquisite culinary creations at Akoozab, where passion meets palate in every bite. Experience unparalleled flavors and impeccable service, making every moment unforgettable."
    
    const header = document.createElement('h1')
    header.textContent = 'Akoozab'
    header.style.marginTop = '5px';
    
    const table_foto = document.createElement('img')
    table_foto.src = '../background.png'
    table_foto.width = 800

    div.appendChild(header);
    div.appendChild(txt);
    div.appendChild(table_foto);


}


export {load_front_page};