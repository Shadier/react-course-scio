export default interface UserModel {
    name?: NameModel;
}

interface NameModel {
    title?: string;
    frist: string;
    last: string;
}