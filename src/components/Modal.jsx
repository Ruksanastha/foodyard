import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_5").close()}
          >
            ✕
          </Link>
          <h2 className="font-bold text-red text-4xl flex justify-center">
            Login!
          </h2>
          <div className="modal-action mt-0 flex flex-col justify-center ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
              method="dialog"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                <label className="label mt-1">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-red text-white"
                />
              </div>
              <p className="text-centre my-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-red underline">
                  Signup
                </Link>
              </p>
            </form>
            <div className="flex justify-center gap-2">
              <button className="btn btn-circle hover:bg-red hover:text-white  ">
                <FaGoogle />
              </button>
              <button className="btn btn-circle hover:bg-red hover:text-white  ">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle hover:bg-red hover:text-white  ">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
// import { useForm } from "react-hook-form";

// const Modal = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <div>
//       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box relative">
//           {/* Close Button */}
//           <Link
//             to="/"
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={() => document.getElementById("my_modal_5").close()}
//           >
//             ✕
//           </Link>

//           <h2 className="font-bold text-red text-4xl flex justify-center">
//             Login!
//           </h2>

//           <div className="modal-action mt-0 flex flex-col justify-center ">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="card-body"
//               method="dialog"
//             >
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                   {...register("email")}
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                   {...register("password")}
//                 />
//                 <label className="label mt-1">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>

//               <div className="form-control mt-6">
//                 <input
//                   type="submit"
//                   value="Login"
//                   className="btn bg-red text-white"
//                 />
//               </div>
//               <p className="text-centre my-2">
//                 Don't have an account?{" "}
//                 <Link to="/signup" className="text-red underline">
//                   Signup
//                 </Link>
//               </p>
//             </form>
//             <div className="flex justify-center gap-2">
//               <button className="btn btn-circle hover:bg-red hover:text-white  ">
//                 <FaGoogle />
//               </button>
//               <button className="btn btn-circle hover:bg-red hover:text-white  ">
//                 <FaFacebookF />
//               </button>
//               <button className="btn btn-circle hover:bg-red hover:text-white  ">
//                 <FaGithub />
//               </button>
//             </div>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Modal;
