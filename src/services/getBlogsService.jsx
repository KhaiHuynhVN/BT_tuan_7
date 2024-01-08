import { httpRequest } from "../utils";

const getBlogsService = async (path) => {
   try {
      const res = await httpRequest.get(path);
      return res;
   } catch (err) {
      console.error(err);
   }
};

export default getBlogsService;
