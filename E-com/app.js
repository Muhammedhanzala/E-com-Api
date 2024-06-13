
document.addEventListener('DOMContentLoaded', () => {
    const productTitle = document.querySelector('.product-title');
    const productImage = document.querySelector('.product-image');
    const productDescription = document.querySelector('.product-description');
    const productPrice = document.querySelector('.product-price');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            
            const product = {
                title: data.title,
                description: data.body,
                imageUrl: 'https://via.placeholder.com/300', 
                price: (Math.random() * 100).toFixed(2) 
            };

            productTitle.textContent = product.title;
            productImage.src = product.imageUrl;
            productDescription.textContent = product.description;
            productPrice.textContent = `$${product.price}`;
        })
        .catch(error => console.error('Error fetching the product data:', error));
});

