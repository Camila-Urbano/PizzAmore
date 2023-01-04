let productosPreview = document.querySelector('.productos_preview');
let previewBox = productosPreview.querySelectorAll('.pizza_preview');

document.querySelectorAll('.productos .pizza').forEach(pizza => 
{

    pizza.onclick = () =>
    {
        productosPreview.style.display = 'flex';
        let nombre = pizza.getAttribute('data-name');
        previewBox.forEach(preview =>
        {
            let targeta = preview.getAttribute('data-targeta');
            if(nombre == targeta)
            {
                preview.classList.add('active');
            }
        });
    };
    
});

previewBox.forEach(cerrar => 
{
    cerrar.querySelector('.fa-xmark').onclick = () =>
    {
        cerrar.classList.remove('active');
        productosPreview.style.display = 'none';
    };

});