export function findByID(list, id) {
    const [item] = list.filter((x) => x.id === id);
    return item;
}

export function findByUUID(list, uuid) {
    const [item] = list.filter((x) => x.uuid === uuid);
    return item;
}

export function getAvailableCars(date, availabilityList, carList) {
    const available = availabilityList.filter(
        (a) =>
            a.start.getTime() <= date.getTime() &&
            a.end.getTime() >= date.getTime()
    );
    const availableCars = available.map((avCar) =>
        findByID(carList, avCar.carID)
    );

    if (availableCars.length > 0) {
        return availableCars;
    } else {
        return [];
    }
}

