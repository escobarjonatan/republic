import React from 'react';
import Individual from '../Individual/Individual.jsx';


const Team = () => {
    return (
        <section id='team' class="p-8 mt-11 bg-white rounded-lg shadow">
            <h2 className='font-bold sm:text-3xl text-xl mb-5'>Our Professional Barbers</h2>
            <p class="text-center mb-11 sm:text-xl">
                Click on any of these barbers to schedule your appointment
            </p>
            <div class="flex items-center flex-col md:flex-row justify-evenly">
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="Guillermo"
                />
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="Jesus Romero"
                />
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="Jose Ponse"
                />
            </div>
            <div class="flex items-center flex-col md:flex-row justify-evenly">
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="Josh"
                />
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="Lalo"
                />
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="Julio"
                />
            </div>
            <div class="flex items-center flex-col md:flex-row justify-evenly">
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="Luis"
                />
                <Individual
                    facebook='https://www.facebook.com/'
                    instagram='https://instagram.com/'
                    name="mike"
                />
            </div>
        </section>
    );
};

export default Team;