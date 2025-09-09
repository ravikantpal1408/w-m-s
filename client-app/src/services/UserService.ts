import { User } from "../models/UserModel";

export default class UserService {
  private static BASE_URL = "http://localhost:8000";

  static async fetchUser(): Promise<User[]> {
    const response = await fetch(`${this.BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch theme");
    }
    const data = await response.json();
    return data;
  }
}
