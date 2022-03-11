import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import {GifGrid} from '../../Components/GifGrid'
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Tests sobre GifGrid', () => { 


    const category = 'Metal Gear'
    //const wrapper = shallow(<GifGrid category = {category}/>)

    test('debe de mostrar el componente correctamente', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        })
        const wrapper = shallow(<GifGrid category = {category}/>)
        expect(wrapper).toMatchSnapshot();
     })


     test('debe de mostrar items cuando se cargan imagenes useFetchGifs', ()=>{

        
        const gifs = [{
            id: 'abc',
            url: 'https://localhost/hola.jpg',
            title: 'hola'
        },
        {
            id:'123',
            url: 'https://localhost/adios.jpg',
            title: 'adios'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })
        
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
     })
 })