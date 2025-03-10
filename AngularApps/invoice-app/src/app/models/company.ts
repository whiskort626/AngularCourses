export class Company {
    id: number;
    fiscalNumber: number;
    name: string;
    address: string;
    phone: string;

    constructor() {
        this.id = 0;
        this.fiscalNumber = 0;
        this.name = '';
        this.address = '';
        this.phone = '';
    }
}