import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

describe('Profile', () => {
    it('should have placeholder correctly in input user name', () => {
        const { getByPlaceholderText } = render(<Profile />)
        
        const inputName = getByPlaceholderText('Nome');
    
        expect(inputName).toBeTruthy();
    });
    
    it('should be load user data', () => {
        const { getByTestId } = render(<Profile />);
    
        const inputName = getByTestId('input-name');
        const inputSurname = getByTestId('input-surname');
    
        expect(inputName.props.value).toEqual('Diego');
        expect(inputSurname.props.value).toEqual('Ferreira');
    });
    
    it('should exists title correctly', () => {
        const { getByTestId } = render(<Profile />);
    
        const textTile = getByTestId('text-title');
    
        expect(textTile.props.children).toContain('Perfil')
    });
});