import { render, screen } from '@testing-library/react'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import Graph from '../components/Graph';

test('Graph should be rendered', () => {
    render(<Graph />)
    expect(screen.getAllByText('07 July 2021'));
})