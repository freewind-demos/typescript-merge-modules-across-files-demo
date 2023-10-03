// NOTE We should NOT add the 'export' before module, which will make it a real module rather than a namespace
declare module My.Ns {
    export type Goods = {
        city: string,
        price: number
    }
}
