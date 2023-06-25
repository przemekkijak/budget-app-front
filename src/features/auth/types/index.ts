export type AuthUser = {
    id: string;
    email: string;
};

export type UserResponse = {
    jwt: string;
    user: AuthUser;
};
