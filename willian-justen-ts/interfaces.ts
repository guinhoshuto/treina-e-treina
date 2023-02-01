interface Game {
    title: string;
    description: string;
    genre: string;
    platforms: string[];
    getSimilars: (title: string) => void
}

const tlou: Game ={
    title: 'The Last of Us',
    description: 'he he he he',
    genre: 'action',
    platforms: ['ps1', 'ps2'],
    getSimilars: (title: string) => {
        console.log('nan')
    }
}

interface DLC extends Game {
    size: number;
    content: string[]
}

const leftBehind: DLC = {
    title: 'The Last of Us',
    description: 'he he he he',
    genre: 'action',
    platforms: ['ps1', 'ps2'],
    getSimilars: (title: string) => {
        console.log('nan')
    },
    size: 1,
    content: ['hihihi', 'hahaha']
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    platforms: string[];
    getSimilars: () => void;
    
    constructor(t: string, d: string, g: string, p: string[]){
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platforms =  p;
        this.getSimilars = () => {console.log('oi')}
    }
}