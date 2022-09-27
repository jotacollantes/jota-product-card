### Juan Jose Collantes
### Ejemplo

```
import { ProductCard, ProductImage, ProductsButtons, ProductTitle, } from '../.';
```

```
<ProductCard
        key={product.id}
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
```
