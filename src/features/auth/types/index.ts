export type AuthUser = {
    id: string;
    email: string;
};

export type UserResponse = {
    token: string;
    refreshToken: string;
    user: AuthUser;
};

export type LoginCredentialsDTO = {
    email: string;
    password: string;
};