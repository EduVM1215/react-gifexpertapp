
import {GifGridItem} from '../../Components/GifGridItem';
import React from 'react';
import {shallow} from 'enzyme'


describe('GifGridTest Unit Testing', () => { 
    
    const title = "Titulo"
    const url = "http://localost/algo.jpg"

    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('debe mostrar el componente correctamente', () => { 

        expect(wrapper).toMatchSnapshot();
     })

    test('debe tener un parrafo con el title', () => { 

        const p = wrapper.find('p');
        
        expect(p.text().trim()).toBe(title);

     })
     
     test('debe tener una imagen igual al url y alt de los props', () =>{

        const i = wrapper.find('img');
        expect(i.props().src).toBe(url);
        expect(i.props().alt).toBe(title)

     })

     test('el div tiene que tener la clase que le permite animarse', () =>{
         
        const div = wrapper.find('div')
        const className = div.props().className
        //expect(div.props().className).toBe("card animate__animated animate__fadeInDown")
        expect(className.includes("animate__fadeInDown")).toBe(true)
     })

 })