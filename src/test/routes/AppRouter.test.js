import React from "react";
import {AppRouter} from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from '../../auth/AuthContext'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

describe('Pruebas en <AppRouter/>', () => {

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged: true
        }
    }    

    
    test('Mostrar login si no esta autenticado', () => {

        Enzyme.configure({ adapter: new Adapter() })

       
        const wrapper = mount(
            <AuthContext.Provider value ={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
    

})
