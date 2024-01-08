import { useRef, useContext } from "react";
import classNames from "classnames/bind";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Context } from "../../pages/APIcall";
import * as services from "../../services";

import styles from "./BlogForm.module.scss";

const cx = classNames.bind(styles);

const path = "/posts";

function BlogForm() {
   const { blog, setBlog, isEdit, setIsEdit, postId, setPostId } = useContext(Context);
   const queryClient = useQueryClient();
   const inputRef = useRef();
   const textareaRef = useRef();

   const { mutate } = useMutation({
      mutationFn: (data) => services.addBlogService(path, data),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["posts"] });
         setBlog({ title: "", content: "" });
         inputRef.current.focus();
      },
      onError: (error) => {
         throw new Error(error);
      },
   });

   const { mutate: editMutate } = useMutation({
      mutationFn: (data) => services.updateBlogService(`${path}/${postId}`, data),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["posts"] });
         setBlog({ title: "", content: "" });
         inputRef.current.focus();
         setIsEdit(!isEdit);
         setPostId(null);
      },
      onError: (error) => {
         throw new Error(error);
      },
   });

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!blog.title.trim() || !blog.content.trim()) return;

      const data = { title: blog.title, content: blog.content };
      isEdit ? editMutate(data) : mutate(data);
   };

   const handleSetBlog = (key, value) => {
      setBlog({ ...blog, [key]: value });
   };

   return (
      <>
         <h1 className={cx("blog-title")}>Blogs</h1>

         <form onSubmit={handleSubmit} className={cx("blog-form")}>
            <input
               ref={inputRef}
               value={blog.title}
               type="text"
               placeholder="Title"
               spellCheck={!1}
               onChange={(e) => handleSetBlog("title", e.target.value)}
            />
            <textarea
               ref={textareaRef}
               value={blog.content}
               type="text"
               placeholder="Content"
               spellCheck={!1}
               onChange={(e) => handleSetBlog("content", e.target.value)}
            />
            <button type="submit">{isEdit ? "Save" : "Add"}</button>
         </form>
      </>
   );
}

export default BlogForm;
