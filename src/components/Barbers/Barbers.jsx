import Barber from '../Barber/Barber.jsx';

const Barbers = () => {

    return (
        <>
            <section id='barbers' className="mt-11">
                <h2 className='font-bold sm:text-3xl text-xl mb-11'>Our Professional Barbers</h2>
                <div className='flex flex-wrap justify-center'>
                    <Barber />
                    <Barber />
                    <Barber />
                    <Barber />
                    <Barber />
                    <Barber />
                </div>
            </section>
        </>
    );
};

export default Barbers;