import React from "react";
import {PrivateRoute} from "../../routers/PrivateRoute";
import { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { MemoryRouter } from "react-router-dom";

describe('Validar las rutas privadas', () => {

    const porps = {
        location:{
            pathname:'/marvel'
        }
    }   

    
    Storage.prototype.setItem = jest.fn();

    test('usuario no autenticado', () => {

        Enzyme.configure({ adapter: new Adapter() })

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated = {false}
                    component= {()=><span>Componente</span>}
                    {...porps}
                    />
            </MemoryRouter>
        )

        console.log('xxxx'+wrapper.html()+'xxxx');

        expect(wrapper.find('span').exists()).toBe(false);        
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    })
    
})
