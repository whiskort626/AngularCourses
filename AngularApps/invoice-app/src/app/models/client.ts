import { Address } from "./address";

export class Client {
    id: number;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    address: Address;

    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.lastname = '';
        this.phone = '';
        this.address = new Address();
    }
}