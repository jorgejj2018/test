import React from "react";
import {DashboardRoutes} from "../../routers/DashboardRoutes";
import { mount } from "enzyme";
import { AuthContext } from '../../auth/AuthContext'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'

describe('Pruebas en <DashboardRoutes/>', () => {

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged: true,
            name: 'jorge'
        }
    }    

    
    test('Verificar que el nombre de usuario este registrado', () => {

        Enzyme.configure({ adapter: new Adapter() })

       
        const wrapper = mount(
            <AuthContext.Provider value ={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('jorge')
    })
    

})
