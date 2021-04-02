interface ZoekGetal {
    (getallen: number[],getal: number): number
}

let getallen: number[] = [1,3,5,7,9,13]

const zoekGetal : ZoekGetal = (getallen,getal)=> {
    for (let i = 0; i < getallen.length; i++) {
        if (getallen[i] ===getal) {
            return i;
        }
    }
}

export{};