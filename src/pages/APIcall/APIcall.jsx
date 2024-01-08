import classNames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

import * as services from "../../services";
import BlogForm from "../../components/BlogForm";

import styles from "./APIcall.module.scss";
import BlogItem from "../../components/BlogItem/BlogItem";

const cx = classNames.bind(styles);

const path = "/posts";

const Context = createContext();

function APIcall() {
   const [blog, setBlog] = useState({ title: "", content: "" });
   const [isEdit, setIsEdit] = useState(false);
   const [postId, setPostId] = useState(null);
   const { data, isPending, error } = useQuery({ queryKey: ["posts"], queryFn: () => services.getBlogsService(path) });

   return (
      <Context.Provider value={{ blog, setBlog, isEdit, setIsEdit, postId, setPostId }}>
         <div className={cx("wrapper")}>
            <h1>API call page</h1>
            <h2>This page is used to demo API call</h2>

            <div className={cx("blog-wrapper")}>
               <BlogForm />

               <div className={cx("blog-list")}>
                  {error && <div>Error: {error.message}</div>}
                  {isPending && <div>Loading...</div>}
                  {data?.map((blog) => (
                     <BlogItem key={blog.id} data={blog} />
                  ))}
               </div>
            </div>
         </div>
      </Context.Provider>
   );
}

export default APIcall;
export { Context };
