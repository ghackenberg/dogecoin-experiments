import { DogecoinJS } from '@mydogeofficial/dogecoin-js'
import { createContext } from 'react'

const DogecoinContext = createContext<DogecoinJS>(null)

export default DogecoinContext