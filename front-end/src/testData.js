const customer1 = {
    id: "1234",
    userType: "CUSTOMER",
    firstName: "Bill",
    lastName: "Sanchez",
    gender: "Male",
    dob: new Date(1990, 11, 3),
    email: "bsanchez@gmail.com",
    phone: "+60125679753",
    uuid: "6da3a05a-36bf-4d4c-b776-b05f036f86f9",
};
const customer2 = {
    id: "1235",
    userType: "CUSTOMER",
    firstName: "Amelia",
    lastName: "Chan",
    gender: "Female",
    dob: new Date(1993, 1, 5),
    email: "achan@gmail.com",
    phone: "+60121235739",
    uuid: "c5e336c3-73b9-403f-8724-59a2b84a9d8a",
};
const customer3 = {
    id: "1236",
    userType: "CUSTOMER",
    firstName: "Carmen",
    lastName: "Kim",
    gender: "Female",
    dob: new Date(1985, 7, 23),
    email: "ckim@gmail.com",
    phone: "+60101792856",
    uuid: "3d2c33c1-cdbf-4e26-891b-d6356374d84a",
};
const customer4 = {
    id: "1237",
    userType: "CUSTOMER",
    firstName: "Devon",
    lastName: "Michael",
    gender: "Male",
    dob: new Date(1995, 8, 24),
    email: "dmich@gmail.com",
    phone: "+60134924837",
    uuid: "e6d04bc6-6db4-4059-9cf6-9bf2db23cc0a",
};

export const customerHeadings = ["User ID", "First Name", "Last Name"];
export const customerList = [customer1, customer2, customer3, customer4];

const prodMan1 = {
    id: "1238",
    userType: "PRODUCT MANAGER",
    firstName: "Amir",
    lastName: "Muhammad",
    gender: "Male",
    dob: new Date(1967, 3, 15),
    email: "muhamir@gmail.com",
    phone: "+60121947232",
    carID: ["C1234"],
    uuid: "9fc2f919-df2d-42bd-b887-c89fa5f5c646",
};
const prodMan2 = {
    id: "1239",
    userType: "PRODUCT MANAGER",
    firstName: "Cosette",
    lastName: "Hew",
    gender: "Female",
    dob: new Date(1976, 9, 13),
    email: "coshew@gmail.com",
    phone: "+60119874893",
    carID: ["C1236"],
    uuid: "5b782883-c8ed-43ea-8125-2d222ae643eb",
};
const prodMan3 = {
    id: "1240",
    userType: "PRODUCT MANAGER",
    firstName: "Nathan",
    lastName: "Liew",
    gender: "Male",
    dob: new Date(1977, 11, 23),
    email: "naliew@gmail.com",
    phone: "+60139264587",
    carID: ["C1235"],
    uuid: "3974b147-132e-4eee-a678-162b274128d8",
};
const prodMan4 = {
    id: "1241",
    userType: "PRODUCT MANAGER",
    firstName: "Priti",
    lastName: "Robertson",
    gender: "Female",
    dob: new Date(1980, 10, 7),
    email: "proberts@gmail.com",
    phone: "+60130220345",
    carID: [],
    uuid: "6764974c-6c97-4b0f-9090-030d3f917a6d",
};

export const prodManHeadings = ["User ID", "First Name", "Last Name"];
export const prodManList = [prodMan1, prodMan2, prodMan3, prodMan4];

const car1 = {
    id: "C1234",
    brand: "BMW",
    build: "Mini Countryman F60",
    year: 2017,
    mode: "auto",
    ownerID: "1238",
    latitude: 3.147686, 
    longitude: 101.721951,
    dayPrice: 400,
    featured: true,
    uuid: "8bd2ccbe-2195-4017-9a37-37f17403b129",
};
const car2 = {
    id: "C1235",
    brand: "Toyota",
    build: "Camry XV50",
    year: 2018,
    mode: "auto",
    ownerID: "1240",
    latitude: 3.149486,
    longitude: 101.759502,
    dayPrice: 200,
    featured: false,
    uuid: "f640b240-1fbc-4943-bcdf-ebbdd47f48ed",
};
const car3 = {
    id: "C1236",
    brand: "Perodua",
    build: "Myvi M800",
    year: 2017,
    mode: "auto",
    ownerID: "1239",
    latitude: 2.99037, 
    longitude: 101.711093,
    dayPrice: 120,
    featured: false,
    uuid: "1ef97825-cf5f-4e2e-88ad-417849edd54c",
};

export const carHeadings = ["Car ID", "Brand", "Build", "Year"];
export const carList = [car1, car2, car3];

const availability1 = {
    carID: "C1234",
    start: new Date(2022, 3, 1),
    end: new Date(2022, 3, 5),
};
const availability2 = {
    carID: "C1234",
    start: new Date(2022, 3, 7),
    end: new Date(2022, 3, 10),
};
const availability3 = {
    carID: "C1235",
    start: new Date(2022, 2, 28),
    end: new Date(2022, 3, 8),
};
const availability4 = {
    carID: "C1236",
    start: new Date(2022, 2, 28),
    end: new Date(2022, 3, 20),
};
const availability5 = {
    carID: "C1235",
    start: new Date(2022, 3, 11),
    end: new Date(2022, 3, 20),
};

export const availabilityList = [
    availability1,
    availability2,
    availability3,
    availability4,
    availability5,
];
