// NOTE We should NOT add the 'export' before 'module', which will make it a real module rather than a namespace
module My.Ns {
    export type User = {
        name: string,
        age: number
    }
}
