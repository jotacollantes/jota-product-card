import React from 'react'
import renderer from 'react-test-renderer'
import {ProductCard} from  '../../src/components'
import { product1 } from '../data/products'

const {act} =renderer;


describe('ProductCard',()=> {

    
    test('Debe de mostrar el componente correctamente',()=>{

        const wrapper= renderer.create(
           
            <ProductCard product={product1}>
                    {
                     ()=> {
                        return <h1>Product Card</h1>
                     }   
                    }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot(); 
    });

    test('Debe de incrementar el contador',()=>{

        const wrapper= renderer.create(
           
            <ProductCard product={product1}>
                    {
                     ({count,increase})=>(
                        <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={()=> {return increase()}  }></button>
                        </>
                     ) 
                        
                        
                    }
            </ProductCard>
        )
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
        //console.log(tree);

       
    //   {
    //     type: 'div',
    //     props: { className: 'productCard undefined', style: undefined },
    //     children: [
    //       { type: 'h1', props: {}, children: [Array] },
    //       { type: 'span', props: {}, children: [Array] },
    //       { type: 'button', props: [Object], children: null }
    //     ]
    //   }

    //*Simulamos el evento click del boton

    act(()=> {
        return (tree as any).children[2].props.onClick();
    });
    

    //*Volvemos a tomar el tree con el render con el nuevo valor del state count.
    tree = wrapper.toJSON();
    //console.log("Count: ",(tree as any).children[1].children[0])
    expect((tree as any).children[1].children[0]).toBe('1')

                    
    });
    
    
})