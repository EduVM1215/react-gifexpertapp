import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import {useFetchGifs} from '../../Hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el Hook useFetchGifs', () => { 

    test('Debe retornar el estado inicial', async ()=>{

        const {result, waitForNextUpdate} = renderHook( ()=>useFetchGifs('One Punch'))
        const {data, loading} = result.current;

        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })


    test('Debe de retornar un vector de imgs y el loding en false', async ()=>{
        
        const {result, waitForNextUpdate} = renderHook( ()=>useFetchGifs('One Punch'))
        await waitForNextUpdate()
        const {data, loading} = result.current;

        expect(data.length).toEqual(10)
        expect(loading).toBe(false)
    })
 })