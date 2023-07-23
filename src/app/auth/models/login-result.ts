import { User } from "./user";

export interface LoginResult {
  token: string;
  refreshToken: string;
  user: User
}
