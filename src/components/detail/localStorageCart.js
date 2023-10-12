function localStorageCart(size,buttons,productId,name, price,imagen) {

  if (!size) {
    console.error('No size assigned ❌ ');
    throw new Error('No size assigned ❌ ')
  }
//Obtener el carrito del localStorage y en caso que no exista vamos a crear uno

const carGet=localStorage.getItem('cart')
const arrayCart=JSON.parse(carGet) || []

//[{size:?, productId:1,name:'',price:, imagen:, quantity:}]
const matched=arrayCart.find((product)=>product.productId === productId && product.size === size)

//guardar el carrito actualizado en el localStorage



if(matched){
  //si el producto ya esta creado lo aumenta
  matched.quantity++
}
else{
  //si el producto no esta en el carro, lo creare. Recordar que estoy descriminando
  arrayCart.push({ size,productId,name,price,imagen, quantity: 1})
}

const arrayJSON=JSON.stringify(arrayCart)
localStorage.setItem('cart',arrayJSON)

}

export default localStorageCart