import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./item";

export class Invoice {
    id: number;
    name: string;
    client: Client;
    company: Company;
    items: Item[];

    constructor(id: number, name: string, client: any, company: any, items: any[]) {
        this.id = id;
        this.name = name;
        this.client = client;
        this.company = company;
        this.items = items;
    }
}