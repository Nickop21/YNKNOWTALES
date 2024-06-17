import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query, Account } from "appwrite";
// import imageCompression from 'browser-image-compression';
export class Service {
  client = new Client();
  account;
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwritePojectid);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featureImage, status, userId ,category}) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        featureImage,
        {
          title,
          content,
          featureImage,
          status,
          userId,
          category
        }
      );
    } catch (error) {
      console.log("createpost", error);
    }
  }

  async updatePost(slug, { title, content, featureImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("updatepost", error);
    }
  }
  async deletepost(slug) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("deletepost", error);
      return false
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("getpost", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("getposts", error);
    }
  }

  async compressImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          const maxWidth = 1920;
          const maxHeight = 1080;
          let { width, height } = img;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              resolve(new File([blob], file.name, { type: file.type }));
            },
            file.type,
            0.7 // Adjust the compression quality here
          );
        };

        img.onerror = (error) => {
          reject(error);
        };
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  }



  async uploadeFile(file) {
      const compressedFile = await this.compressImage(file);
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        compressedFile
      );
    } catch (error) {
      console.log("uplodefile", error);
    }
  }
  async deleteFile(fileid) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileid);
      return true;
    } catch (error) {
      console.log("delete file", error);
      return false;
    }
  }

  getfilePreview(fileid){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileid
    )
  }
}

const appwriteService=new Service();


export default appwriteService;