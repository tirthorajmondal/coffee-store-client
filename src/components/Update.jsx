import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const coffee = useLoaderData();
    const id = coffee._id;
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value || "https://ibb.co.com/cXQM7x0L/1.png";
        const updatedCoffee = { name, chef, supplier, taste, category, price, photo };

        fetch(`https://coffee-store-server-by-tirtho.vercel.app/coffees/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data Updated",
                        showConfirmButton: false,
                        timer: 1500
                    })

                    navigate(`/`)
                }
            })
    }
    return (
        <div className="bg-rose-200 p-20 ">
            <form onSubmit={handleUpdate} className="space-y-4 w-full max-w-lg mx-auto p-6 bg-rose-300 rounded-lg shadow-lg border border-rose-400">
                <h2 className="text-2xl font-semibold text-center text-rose-900 mb-6">Update This Coffee</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-rose-900">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Coffee Name"
                            defaultValue={coffee.name}
                            className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-rose-900">Chef</label>
                        <input
                            type="text"
                            name="chef"
                            placeholder="Enter Coffee Chef"
                            defaultValue={coffee.chef}
                            className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-rose-900">Supplier</label>
                        <input
                            type="text"
                            name="supplier"
                            placeholder="Enter Coffee supplier"
                            defaultValue={coffee.supplier}
                            className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-rose-900">Taste</label>
                        <input
                            type="text"
                            name="taste"
                            placeholder="Enter Coffee Taste"
                            defaultValue={coffee.taste}
                            className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-rose-900">Category</label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter Coffee Category"
                            defaultValue={coffee.category}
                            className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-rose-900">Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter Coffee Price"
                            defaultValue={coffee.price}
                            className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-rose-900">Photo</label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Enter Phoot URL"
                        defaultValue={coffee.photo}
                        className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-400 transition duration-200"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;