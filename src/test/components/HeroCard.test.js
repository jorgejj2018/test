import React from "react";
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { HeroCard } from "../../components/heroes/HeroCard";

describe('pruebas <HeroCard/>', () => {

    test('Validar la informacion de las tarjetas', () => {
        
        const id = 'dc-batman'
        const superhero = 'Batman'
        const alter_ego = 'Bruce Wayne'
        const first_appearance = 'Detective Comics #27'
        const characters = 'Bruce Wayne'

        Enzyme.configure({ adapter: new Adapter() })

        const wrapper = shallow( <HeroCard
            id = {id}
            superhero = {superhero}
            alter_ego = {alter_ego}
            first_appearance = {first_appearance}
            characters = {characters}
        />)

        const textParrafo = wrapper.find('h5').text().trim();
        console.log(textParrafo);

        expect(wrapper).toMatchSnapshot();
        expect(textParrafo).toBe('Batman')
    })
    
})
