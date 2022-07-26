import { render, screen } from '@testing-library/react'
import MovieCard from '../components/MovieCard';

const testMovie = {
    "name": "Test Movie",
    "totalViews": {
        "total": 10919,
        "sky-go": 1324,
        "now-tv": 4213,
        "peacock": 5832
    },
    "prevTotalViews": {
        "total": 13687,
        "sky-go": 1957,
        "now-tv": 4181,
        "peacock": 7549
    },
    "description": "To save her island home a plucky Polynesian teen must set sail and journey into the great blue yonder. Oscar-nominated Disney animation with the voice of Dwayne Johnson. (2016)(107 mins)",
    "duration": 6420,
    "assetImage": "http://epgstatic.sky.com/epgdata/1.0/vodimage/0/0/Mas_moana.jpg",
    "videoImage": "https://uk.imageservice.sky.com/contentid/764b39c2db1bc510VgnVCM1000000b43150a____/BOXART",
    "provider": "Sky Disney",
    "genre": [
        "kids",
        "movies",
        "animation"
    ]
}

test('MovieCard should render testMovie', () => {
    render(<MovieCard movie={testMovie}/>)
    expect(screen.getAllByText('Test Movie'))
})