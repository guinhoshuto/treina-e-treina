type Uid = number | string
type Item = 'sapato' | 'meia'

function logDetails(uid: Uid, item: Item){
    console.log(`o item ${item} de id: ${uid}`)
}

logDetails(1, 'sapato')
logDetails('1', 'sapato')
logDetails('1', 'meia')