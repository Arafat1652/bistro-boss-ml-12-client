import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, image, _id} = useLoaderData()

    const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log('menures',menuRes.data);
      if (menuRes.data.modifiedCount> 0) {
        // show success toast
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };
    return (
        <div>
            <SectionTitle subHeading='Wanna Update' heading='Update'>
            </SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* recipe name */}
          <div>
            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                defaultValue={name}
                placeholder="Recipe Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex">
            {/* category */}

            <label className="form-control w-full mb-6 mr-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* price */}

            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                defaultValue={price}
                type="number"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* recipe */}
          <div className="mb-6">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                {...register("recipe")}
                defaultValue={recipe}
                className="textarea textarea-bordered h-24"
                placeholder="detials"
              ></textarea>
            </label>
          </div>
          {/* file input */}
          <div className="mb-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn btn-secondary">
            Update Recipe Item
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;