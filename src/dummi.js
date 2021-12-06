import React from 'react';
import renderer from 'react-test-renderer';

function handleTest(component) {
    it('renders correctly', () => {
        const vDom = React.createElement(component);
        const tree = renderer.create(vDom).toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    });
}

export { handleTest }