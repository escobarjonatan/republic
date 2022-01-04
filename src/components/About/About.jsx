const About = () => {

    return (
        <>
            <section id='about' className='mt-11'>
                <h1 className='font-sans font-bold sm:text-3xl text-xl'>
                    About
                    <span
                        className='font-mono sm:text-5xl text-3xl pl-5'>
                        republic
                    </span>
                    <span
                        className='pl-5'>
                        Barbershop
                    </span>
                </h1>
                <p className='mt-11 whitespace-pre-wrap'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
        </>
    );
};

export default About;