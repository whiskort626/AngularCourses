import { Invoice } from '../models/invoice';

export const InvoiceData: any[] = [
{
        id: 1,
        name: 'Componentes de PC',
        client: {
            id: 1,
            name: 'Andres',
            lastname: 'Doe',
            email: 'andres.doe@example.com',
            phone: '1234567890',
            address: {
                country: 'USA',
                city: 'New York',
                street: '5th Avenue',
                number: 123
            }
        },
        company: {
            id: 1,
            fiscalNumber: 123456789,
            name: 'Company A',
            address: '123 Business St, Business City, BC',
            phone: '0987654321'
        },
        items: [
            { id: 1, product: 'Monitor Asus', quantity: 3, price: 899, },
            { id: 2, product: 'CPU Intel i9', quantity: 1, price: 599 },
            { id: 3, product: 'Corsair Teclado Mecanico',  price: 399, quantity: 2}
        ]
    },
    {
        id: 2,
        name: 'Invoice 2',
        client: {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            lastname: 'Smith',
            phone: '1234567890',
            address: {
                country: 'USA',
                city: 'Los Angeles',
                street: 'Sunset Boulevard',
                number: 456
            }
        },
        company: {
            id: 2,
            fiscalNumber: 987654321,
            name: 'Company B',
            address: '456 Corporate Ave, Corporate City, CC',
            phone: '1234567890'
        },
        items: [
            { id: 3, product: 'Item 3', quantity: 3, price: 30 },
            { id: 4, product: 'Item 4', quantity: 2, price: 150 }
        ]
    }
];