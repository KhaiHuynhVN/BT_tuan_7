import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./ReactHookForm.module.scss";

const schema = yup
   .object()
   .shape({
      name: yup.string().required(),
      age: yup.number().required(),
      password: yup
         .string()
         .required()
         .min(6)
         .matches(
            /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/,
            "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
         ),
   })
   .required();

const cx = classNames.bind(styles);

function ReactHookForm() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   });

   return (
      <div className={cx("wrapper")}>
         <h1 className={cx("wrapper")}>React Hook Form page</h1>
         <h2>This page is used to demo React Hook Form</h2>

         <form className={cx("react-hook-form")} onSubmit={handleSubmit((d) => console.log(d))}>
            <input {...register("name")} />
            {errors.name?.message && <p className={cx("err-msg")}>{"Name is a required field"}</p>}
            <input type="number" {...register("age", { valueAsNumber: true })} />
            {errors.age?.message && <p className={cx("err-msg")}>{"Age is a required field"}</p>}
            <input type="password" {...register("password")} />
            {errors.password?.message && <p className={cx("err-msg")}>{"Password is a required field"}</p>}
            <button type="submit">Submit</button>
         </form>
      </div>
   );
}

export default ReactHookForm;
