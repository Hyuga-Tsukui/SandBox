import { type } from "os";

type Reservation = {
    id: number,
    destination: string;
}


type Reserve = {
    (from: Date, destination: string, to?: Date): Reservation
}

const reserve: Reserve = (
    from,
    destination,
    to
) => {
    if(to !== undefined) {
        return {id: 1, destination}
    }

    return {id: 1, destination}
}