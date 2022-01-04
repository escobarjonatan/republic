const Services = () => (
    <>
        <section id='Services' className="mt-11 text-center">
            <h2 className='font-bold sm:text-3xl text-xl mb-11'>Our Professional Services</h2>
            <div className='flex items-center justify-center'>
                <table class="table1">
                    <thead>
                        <tr className='bg-gray-800 text-white'>
                            <th className='sm:p-8 p-1 border-2 border-gray-800'>Service</th>
                            <th className='sm:p-8 p-1 border-2 border-gray-800'>Description</th>
                            <th className='sm:p-8 p-1 border-2 border-gray-800'>Price</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white text-md sm:text-base'>
                        <tr>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>Haircut</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800 max-w-xl'>some really cool description</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>$25</td>
                        </tr>
                        <tr>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>Beard lineup</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800 max-w-xl'>some really cool long description. some really cool long description. some really cool long description</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>$25</td>
                        </tr>
                        <tr>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>Edge up</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800 max-w-xl'>some really cool description</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>$25</td>
                        </tr>
                        <tr>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>Edge up</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800 max-w-xl'>some really cool description</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>$25</td>
                        </tr>
                        <tr>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>Eyebrows</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800 max-w-xl'>some really cool description</td>
                            <td className='sm:p-8 p-1 border-2 border-gray-800'>$25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </>
);

export default Services;
