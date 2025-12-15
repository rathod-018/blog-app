import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);
            return await this.login({ email, password });
        } catch (error) {
            throw new Error(error?.message || "Failed to create account");
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw new Error(error?.message || "Login failed");
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch {
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch {
            return null;
        }
    }
}

const authService = new AuthService();
export default authService;