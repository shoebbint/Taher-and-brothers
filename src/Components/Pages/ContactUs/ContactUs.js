import React from 'react';
import PageHeader from '../../Shared/PageHeader/PageHeader';
import ContactForm from './ContactForm/ContactForm';
import CustomTemp from './CustomTemp/CustomTemp';

const ContactUs = () => {
    return (
        <div>
            {/* <h1>this is contact us</h1> */}
            <PageHeader></PageHeader>
            <CustomTemp></CustomTemp>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;