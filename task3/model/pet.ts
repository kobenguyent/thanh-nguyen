const faker = require('faker');

export const petStatus = ['available', 'pending', 'sold'];

export interface Pet {
    "id": number,
    "name": string,
    "category": {
        "id": number,
        "name": string
    },
    "photoUrls": [
        string
    ],
    "tags": [
        {
            "id": number,
            "name": string
        }
    ],
    "status": string
}

export class Pet {
    constructor(data: any) {
        return {
            "id": data.id || faker.random.number(),
            "name": data.name || "doggie",
            "category": {
                "id": data.catId || 1,
                "name": data.catName || "Dogs"
            },
            "photoUrls": [
                data.photoUrls || "string"
            ],
            "tags": [
                {
                    "id": data.tagId || 0,
                    "name": data.tagName || "string"
                }
            ],
            "status": data.status || petStatus[0]
        }
    }
}
