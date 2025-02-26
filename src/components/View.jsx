import { useLoaderData } from "react-router-dom";

const View = () => {
    const coffee = useLoaderData();
    return (
        <div className="flex  items-center md:w-5/6 ml-auto p-5 mt-10 mx-10">
            <figure>
                <img className='w-96 '
                    src={coffee.photo}
                    alt={coffee.name} />
            </figure>
            <div className="flex flex-col gap-y-2 ml-3">
                <h3 className="font-bold">Name: <span className='text-gray-400 font-semibold'>{coffee.name}</span></h3>
                <h3 className="font-bold">Chef: <span className='text-gray-400 font-semibold'>{coffee.chef}</span></h3>
                <h3 className="font-bold">Supplier: <span className='text-gray-400 font-semibold'>{coffee.supplier}</span></h3>
                <h3 className="font-bold">Category: <span className='text-gray-400 font-semibold'>{coffee.category}</span></h3>
                <h3 className="font-bold">Taste: <span className='text-gray-400 font-semibold'>{coffee.taste}</span></h3>
                <h3 className="font-bold">Price: <span className='text-gray-400 font-semibold'>{coffee.price}$</span></h3>

            </div>

        </div>
    );
};

export default View;