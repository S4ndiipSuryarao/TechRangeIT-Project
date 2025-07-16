
import { useState } from 'react';

export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const initialFormData: FormData = { name: '', email: '', subject: '', message: '' };

export const useContactForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Server response:', result);
                
                setIsSubmitted(true);
                setFormData(initialFormData);
                setTimeout(() => setIsSubmitted(false), 5000);

            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setErrors({ message: 'Failed to send message. Please try again later.' });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return {
        formData,
        errors,
        isSubmitting,
        isSubmitted,
        handleChange,
        handleSubmit,
    };
};
