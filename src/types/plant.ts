interface Plant {
    id: number;
    name: string;
    species?: string;
    wateringFrequency: number;
    lastWatered: Date;
}

export default Plant;