interface Plant {
    id: number;
    dateCreated?: Date;
    name: string;
    species?: string;
    wateringFrequency: number;
    lastWatered: Date;
}

export default Plant;