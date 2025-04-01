import { DogecoinJS } from '@mydogeofficial/dogecoin-js'
import { useEffect, useState } from 'react'
import DogecoinContext from '../contexts/Dogecoin.js'

export default function App() {
    const [dogecoin, setDogecoin] = useState<DogecoinJS>()

    useEffect(() => {
        DogecoinJS.init().then(setDogecoin)
    }, [])

    useEffect(() => {
        console.log(dogecoin)
    }, [dogecoin])

    return (
        <DogecoinContext.Provider value={dogecoin}>
            <div className='app'>

            </div>
        </DogecoinContext.Provider>
    )
}