export interface Istd{
    fname : string,
    lname : string,
    email : string,
    contact : number
}


export interface Iproduct {
    pname : string,
    pDesc : string,
    pCatg : Icatg
}

export type Icatg = "Catlog" | "Product"