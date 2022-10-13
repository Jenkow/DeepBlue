const products = [
    {
        id: '1',
        name:'Remera Marco Botánico',
        price: 6480,
        category: 'remera',
        img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/cama_sep4456.jpg',
        stock: 4,
        description: 'Descripcion de Remera Marco Botánico'
    },
    {id: '2', name:'Remera Oceánica Batik', price: 7980, category: 'remera', img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/cama_sep4468.jpg', stock: 6, description: 'Descripción de Remera Oceánica Batik'},
    {id: '3', name:'Buzo Cuzco', price: 14280, category: 'buzo', img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/camaron_julio0219.jpg', stock: 5, description: 'Descripción de Buzo Cuzco'},
    {id: '4', name:'Buzo Tromen', price: 13900, category: 'buzo', img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/cama_sep4593.jpg', stock: 3, description: 'Descripción de Buzo Tromen'},
    {id: '5', name:'Pantalón Chubut', price: 12420, category: 'pantalón', img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/camaron_julio0405_1.jpg', stock: 4, description: 'Descripción de Pantalón Chubut'},
    {id: '6', name:'Pantalón Quina', price:8660 , category: 'pantalón', img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/camaron_62__6.jpg', stock: 3, description: 'Descripción de Pantalón Quina'},
    {id: '7', name:'Campera Parka Puna', price: 37380, category: 'campera', img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/cama_sep4606.jpg', stock: 2, description: 'Descripción de Campera Parka Puna'},
    {id: '8', name:'Campera Atacama', price: 24850, category: 'campera', img: 'https://www.camaronbrujo.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/a/camaron_julio0261.jpg', stock: 3, description: 'Descripción de Campera Atacama'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}