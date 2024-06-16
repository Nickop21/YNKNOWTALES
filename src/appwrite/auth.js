import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"
export class Authservice{
    client= new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwritePojectid);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            // if (userAccount) {
            //     // call another method
            //     // return this.login({email, password});
            // } else {
            //    return  userAccount;
            // }
            if (userAccount) {
                
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }
    async deleteSession(){
        try {
          // Attempt to delete the current session
         return await this.account.deleteSession('current');
          
        } catch (err) {
          console.error('Error deleting session:', err); // Log the full error
          
        }
      }
}
const authservice=new Authservice();


export default authservice;