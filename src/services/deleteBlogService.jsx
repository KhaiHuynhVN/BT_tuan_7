import { httpRequest } from "../utils";

const deleteBlogService = async (path) => {
   try {
      const res = await httpRequest.deleteAPI(path);
      return res;
   } catch (err) {
      console.error(err);
   }
};

export default deleteBlogService;
