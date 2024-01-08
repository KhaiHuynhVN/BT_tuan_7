import { httpRequest } from "../utils";

const addBlogService = async (path, data) => {
   try {
      const res = await httpRequest.post(path, data);
      return res;
   } catch (err) {
      console.error(err);
   }
};

export default addBlogService;
