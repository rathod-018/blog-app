import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Posts
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            );
        } catch (error) {
            console.log("Error creating post:", error.message || error);
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status }
            );
        } catch (error) {
            console.log("Error updating post:", error.message || error);
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Error deleting post:", error.message || error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Error fetching post by slug:", error.message || error);
            return null;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.error(
                "Error fetching posts. Check your database and collection IDs:",
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                error.message || error
            );
            return { total: 0, documents: [] }; // safe fallback
        }
    }

    // File upload
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            console.error("Error uploading file:", error.message || error);
            return null;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
        } catch (error) {
            console.log("Error deleting file:", error.message || error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
        } catch (error) {
            console.log("Error fetching file preview:", error.message || error);
            return null;
        }
    }
}

const service = new Service();
export default service;
