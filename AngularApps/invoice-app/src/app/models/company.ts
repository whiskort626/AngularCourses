export class Company {
    id: number;
    fiscalNumber: number;
    name: string;
    address: string;
    phone: string;

    constructor(id: number, fiscalNumber: number, name: string, address: string, phone: string) {
        this.id = id;
        this.fiscalNumber = fiscalNumber;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}