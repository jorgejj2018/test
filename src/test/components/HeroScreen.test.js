import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import {HeroScreen} from "../../components/heroes/HeroScreen";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas de componente <HeroScreen/>', () => {
    
    Enzyme.configure({ adapter: new Adapter() })

    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn(),
        length: 10
    }



    test('El componente debe funcionar correctamente', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>               
                <HeroScreen path="/hero/:heroId" component={ HeroScreen } history={historyMock}/>
            </MemoryRouter>
        )
        
        expect(wrapper.find('h3').text().trim()).toBe('Hulk')
    })
    
    
  

})


    // const wrapper = mount(
    //     <MemoryRouter initialEntries={['/Hero']}>               
    //         <HeroScreen history={historyMock}/>
    //     </MemoryRouter>
    // ) 
  // test('Mostrar el redirect si no tenemos el URL del heroe', () => {
        
        // expect(wrapper).toMatchSnapshot();

    // })