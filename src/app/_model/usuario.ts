export class Usiario{
    data!: {
        permisos: any[];
        token: string;
        usuario: {
            userName: string;
        };
    };
    lastAction!: string;
    success!: boolean;
    textResponse!: string;
    titleResponse!: string;
}