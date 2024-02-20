import React from 'react';
import data from './data';

function App() {
  return (
    <div class="grid-container">
            <header class="row">
                <div>
                    <a href="index.html" class="brand">amazonae</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Signin</a>
                </div>
            </header>
            <main>
                <div>
                <div class="row center">
                    {data.products.map((product) => (
                        <div key={product._id} class="card">
                        <a href={`/product/${product._id}`}>
                            
                            <img class="medium" src={product.image} alt={product.name}></img>
                        </a>
                        <div class="card-body ">
                            <div class="row">
                            <a href={`/product/${product._id}`}><h3>{product.name}</h3></a>
                            <div class="rating ">
                                <span>
                                    <i class="fa-solid fa-heart"></i>
                                </span>
                            </div>
                        </div>
                            <div class="price">
                                ${product.price}
                            </div>
                        </div>
                     </div>
                 
                    ))
                    }
                  </div>  
               </div>
            </main>
            <footer class="row center">
                All right reserved
            </footer>
        </div>
  );
}

export default App;
