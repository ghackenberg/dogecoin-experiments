import { DogecoinJS } from '@mydogeofficial/dogecoin-js'

async function boot() {
    const doge = await DogecoinJS.init()

    const [privKey, pubKey] = doge.generatePrivPubKeypair()

    console.log(privKey)
    console.log(pubKey)

    const txIndex = doge.startTransaction()

    console.log(txIndex)

    //doge.finalizeTransaction(txIndex, ...)

}

boot()