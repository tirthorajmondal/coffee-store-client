import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffees = () => {
    const loadedCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffee);
    const navigate = useNavigate();

    const handleView = id => {
        navigate(`coffees/view/${id}`)
    }
    const handleEdit = id => {
        navigate(`coffees/edit/${id}`)
    }

    const handleDlete = (id) => {
        console.log(id);

        //sweet alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirmed');

                fetch(`https://coffee-store-server-by-tirtho.vercel.app/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            // alert('Deleted')
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)

                        }
                    })
            }
        });
    }
    return (
        <div>
            {/* banner */}
            <div className="bg-[url(/src/assets/images/more/6.jpeg)] h-[calc(100vh-100px)] -scale-x-100 bg-cover bg-top flex justify-start items-center">
                <div className="-scale-x-100 text-white  p-2 md:w-1/2 self-center mx-20 flex-wrap">
                    <h2 className='text-4xl '>Would you like a Cup of Delicious Coffee? </h2>
                    <p className='text-lg my-5'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='px-3 py-2 bg-[#E3B577] text-[#242222] '>Learn  More</button>
                </div>

            </div>
            {/* //coffes  */}
            <div className="">
                <h2 className="text-xl text-center mt-5">---Sip & Savor---</h2>
                <h2 className="text-4xl text-center font-bold">Our Popular Products</h2>
                <button className='border mx-auto flex self-center px-3 py-2 rounded-md mt-4'> <Link to="/addcoffee">Add Coffee</Link></button>
            </div>

            <div className="grid grid-cols-2 gap-5  px-3 my-5  max-w-6xl mx-auto ">
                {/* 111 */}
                {
                    coffees.map(cof => <div key={cof._id} className="flex  items-center p-5 border rounded-lg ">
                        <figure>
                            <img className='w-40'
                                src={cof.photo}
                                alt={cof.name} />
                        </figure>
                        {/* {console.log(cof.photo)} */}

                        <div className="flex flex-col  gap-y-2 ">
                            <h3 className="font-bold">Name: <span className='text-gray-400 font-semibold'>{cof.name}</span></h3>
                            <h3 className="font-bold">Chef: <span className='text-gray-400 font-semibold'>{cof.chef}</span></h3>
                            <h3 className="font-bold">Price: <span className='text-gray-400 font-semibold'>{cof.price}</span></h3>
                        </div>
                        <div className="card-body max-w-max">
                            <div className="card-actions justify-end flex-col">
                                <button className="btn btn-primary w-full" onClick={() => handleView(cof._id)}>View</button>
                                <button className="btn btn-secondary w-full" onClick={() => handleEdit(cof._id)}>Edit</button>
                                <button onClick={() => handleDlete(cof._id)} className="btn btn-info w-full">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Coffees;