import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductsButtons, ProductTitle, } from '../.';

const product={
  id: '1',
  title: 'Coffe mug - card',
  //img: './coffee-mug.png'
}
const App = () => {
  return (
    <>
      <ProductCard
        
        product={product}
        
        //Asigamos un objeto con el count y maxCount al initialValues
        initialValues={{
          count: 4,
          //maxCount:10
        }}
        >

          {
            ({reset,isMaxCountReached,count,maxCount})=> (<>
            <ProductImage />
          <ProductTitle />
          <ProductsButtons /> 
          </>)
          }
          
</ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
