import { httpRequest } from "../utils";

const updateBlogService = async (path, data) => {
   try {
      const res = await httpRequest.put(path, data);
      return res;
   } catch (err) {
      console.error(err);
   }
};

export default updateBlogService;
