import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import {GifExpertApp} from '../GifExpertApp'


describe('pruebas sobre GifExpertApp', () => { 

    const wrapper=shallow(<GifExpertApp />)

    test('Debe mostrar el componente correctamente', ()=>{

    
        expect(wrapper).toMatchSnapshot();
    })


    test('debe de mostrar una lista de categorias', ()=>{
        
        const categories = ['Paco', 'Pepe']
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
 })