/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import classNames from "classnames/bind";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Context } from "../../pages/APIcall";
import * as services from "../../services";

import styles from "./BlogItem.module.scss";

const cx = classNames.bind(styles);

const path = "/posts";

function BlogItem({ data }) {
   const queryClient = useQueryClient();
   const { setBlog, setIsEdit, setPostId } = useContext(Context);

   const pRef = useRef();

   const { mutate } = useMutation({
      mutationFn: (id) => services.deleteBlogService(`${path}/${id}`),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
      onError: (error) => {
         throw new Error(error);
      },
   });

   const handleDelete = (id) => {
      mutate(id);
   };

   const handleEdit = (data) => {
      setBlog({ title: data.title, content: data.content });
      setIsEdit(true);
      setPostId(data.id);
   };

   return (
      <div className={cx("blog-item")}>
         <h3 className={cx("blog-item-title")}>{data.title}</h3>
         <pre ref={pRef} className={cx("blog-item-content")}>
            {data.content}
         </pre>

         <div className={cx("blog-item__btn-container")}>
            <button className={cx("blog-item__btn", "edit")} onClick={() => handleEdit(data)}>
               Edit
            </button>
            <button className={cx("blog-item__btn", "delete")} onClick={() => handleDelete(data.id)}>
               Delete
            </button>
         </div>
      </div>
   );
}

export default BlogItem;
