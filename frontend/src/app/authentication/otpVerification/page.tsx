"use client";
import React, { useState } from 'react';
import OTPForm from './../../../components/authentication/OtpVerification';
import sendOTP from '@/services/authentication/sendOtp';
import { useRouter } from 'next/navigation'; 

const OTPPage = () => {
    const [otp, setOtp] = useState('');
    const router = useRouter(); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpNumber = Number(otp);
        if (isNaN(otpNumber)) {
            console.error('Invalid OTP entered');
            return; 
        }

        try {
            console.log(otpNumber);
            
            const result = await sendOTP(otpNumber); 
            
            console.log('OTP verification successful:', result);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('userId', result.data.user._id);
           
            router.push('/dashboard');

        } catch (error) {
            console.error('OTP verification failed:', error);
        }
    };

    return (
        <div>
            <OTPForm otp={otp} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
    );
};

export default OTPPage;
