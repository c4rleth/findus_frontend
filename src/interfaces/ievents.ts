export default interface Eventos {
    id: number;
    name: string;
    description: string;
    day: string;
    hour: string;
    creatorName: string;
    participantsCount: number;
    tags: Array<String>;
    address: {
        id: number;
        state: string;
        city: string;
        district: string;
        street: string;
        number: number;
        zipcode: number;
        complement: string;
        latitude: number;
        longitude: number;
    };

}