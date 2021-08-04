import React from "react";
import {Navbar} from "../../components/ui/Navbar";
import { mount } from "enzyme";
import { AuthContext } from '../../auth/AuthContext'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { MemoryRouter, Router } from "react-router-dom";
import '@testing-library/jest-dom'

describe('Pruebas en <Navbar/>', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location:[],
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged: true,
            name: 'Geral'
        }
    }    

    Enzyme.configure({ adapter: new Adapter() })
       
    const wrapper = mount(
        <AuthContext.Provider value ={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    
    test('Llamar la funcion logout y usar history', () => {
        
        wrapper.find('button').prop('onClick')()
        expect(historyMock.replace).toHaveBeenCalledWith('/login')

    })
    

})
