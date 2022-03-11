import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import {AddCategory} from '../../Components/AddCategory'


describe('Pruebas sobre el componente AddCategory', ()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })
    
    test('debe de mostrar el componente correctamente', () => { 

        expect(wrapper).toMatchSnapshot();

    })

     test('debe de cambiar la caja de texto', () => { 
        const input = wrapper.find('input')
        const value='ola'
        input.simulate('change', { target: {value: value}});

        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('no debe de postear la info on submit', ()=>{

        const submit = wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', ()=>{

        const input = wrapper.find('input')
        const value='ola'
        input.simulate('change', { target: {value: value}});

        /*Submit = */ wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).toHaveBeenCalled();
        expect(input.text().trim()).toBe('');

    })



})