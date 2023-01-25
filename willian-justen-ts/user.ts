type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

type CharInfo = {
    username: string;
    level: number;
}

type PlayerInfo = AccountInfo & CharInfo

const account: AccountInfo = {
    id: 1,
    name: 'juquinha'
}

const account2: AccountInfo = {
    id: 2,
    name: 'juquinha2',
    email: 'juquinha@juquinha.com.br'
}

const accountx:  PlayerInfo = {
    id: 1,
    name: 'juquinha',
    username: 'jj',
    level: 22
}