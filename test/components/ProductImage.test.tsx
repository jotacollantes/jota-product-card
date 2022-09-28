import React from 'react'
import renderer from 'react-test-renderer'
import {ProductCard, ProductImage} from  '../../src/components'
import { product2 } from '../data/products'


describe('ProductImage',()=> {

    test('Debe de Mostrar el componente con la imagen personalizada',()=>{
        const wrapper= renderer.create(
            <ProductImage img="./coffee-mug.png"/>
        )
        //console.log(wrapper.toJSON())
        expect(wrapper.toJSON()).toMatchSnapshot(); 
    });
    test('Debe de mostrar el componente con la imagen del producto',()=>{

        const wrapper= renderer.create(
           
            <ProductCard product={product2}>
                    {
                     ()=> {
                        return <ProductImage />
                     }   
                    }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot(); 
    })
})