export interface User {
    _id: string;
    name: string;
    avatarURL: string;
    username: string;
    password: string;
    dateOfBirth: Date;
    role: string;
    email: string;
    listOfLib: string[];
    address: string;
};

export interface Book {
    _id:         string;
    title:       string;
    slug:        string;
    author:      string[];
    genres:      string[];
    description?: string;
    language:    string;
    numPages:    number;
    imageUrl:    string;
    publisher:   string;
    publishDate: Date;
    series?:     string[];
    totalBorrow: number;
    libraryID:   string;
    totalNum:    number;
    currentNum:  number;
    numOfRating: number;
    avgRating:   number;
}

export interface Library {
    _id:            string;
    name:           string;
    address:        string;
    avatarImageUrl: string;
    description:    string;
    slug:           string;
    maxBorrowDays:  number;
    lateFeePerDay:  number;
    numOfRating:    number;
    avgRating:      number;
}