import { HELLO } from '../../redux/constants'

const hello = () => {
    console.log('action creator been clicked')
    return {
        type: HELLO
    }
}

export default hello