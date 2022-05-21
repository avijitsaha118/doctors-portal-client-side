import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K26vvDN484WNYDOTppG4gU9ne06nL8pUrmkL8M9y5tpDALMA9CLfD0GHCsmGIFOXcagPUQ4rRJlxLStdADX29ma00RjTcisNq');

const Payment = () => {
    const { id } = useParams();
    const url = `https://serene-falls-35288.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success'>Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for {appointment.treatment} </h2>
                    <p>We will see you on <span className='text-orange-400'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please Pay: $ {appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment}/>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;