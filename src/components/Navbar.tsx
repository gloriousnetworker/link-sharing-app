import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (

        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <div className="flex items-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.61875 25.3798C4.57341 27.3332 7.71475 27.3332 14.0001 27.3332C20.2854 27.3332 23.4281 27.3332 25.3801 25.3798C27.3334 23.4292 27.3334 20.2852 27.3334 13.9998C27.3334 7.7145 27.3334 4.57184 25.3801 2.6185C23.4294 0.666504 20.2854 0.666504 14.0001 0.666504C7.71475 0.666504 4.57208 0.666504 2.61875 2.6185C0.666748 4.57317 0.666748 7.7145 0.666748 13.9998C0.666748 20.2852 0.666748 23.4278 2.61875 25.3798ZM10.6667 9.6665C9.8097 9.6665 8.97189 9.92065 8.25928 10.3968C7.54666 10.873 6.99125 11.5497 6.66327 12.3415C6.33529 13.1334 6.24948 14.0046 6.41668 14.8452C6.58388 15.6858 6.99659 16.4579 7.60262 17.064C8.20865 17.67 8.98077 18.0827 9.82136 18.2499C10.6619 18.4171 11.5332 18.3313 12.325 18.0033C13.1169 17.6753 13.7936 17.1199 14.2698 16.4073C14.7459 15.6947 15.0001 14.8569 15.0001 13.9998C15.0001 13.7346 15.1054 13.4803 15.293 13.2927C15.4805 13.1052 15.7349 12.9998 16.0001 12.9998C16.2653 12.9998 16.5197 13.1052 16.7072 13.2927C16.8947 13.4803 17.0001 13.7346 17.0001 13.9998C17.0001 15.2525 16.6286 16.4769 15.9327 17.5184C15.2368 18.56 14.2477 19.3717 13.0904 19.8511C11.9331 20.3304 10.6597 20.4558 9.43118 20.2115C8.20263 19.9671 7.07414 19.3639 6.18841 18.4782C5.30267 17.5924 4.69948 16.464 4.45511 15.2354C4.21073 14.0069 4.33616 12.7334 4.81551 11.5762C5.29487 10.4189 6.10663 9.42978 7.14814 8.73386C8.18965 8.03795 9.41413 7.6665 10.6667 7.6665C10.932 7.6665 11.1863 7.77186 11.3739 7.9594C11.5614 8.14693 11.6667 8.40129 11.6667 8.6665C11.6667 8.93172 11.5614 9.18607 11.3739 9.37361C11.1863 9.56115 10.932 9.6665 10.6667 9.6665ZM21.6667 13.9998C21.6667 15.1491 21.2102 16.2513 20.3975 17.064C19.5849 17.8766 18.4827 18.3332 17.3334 18.3332C17.0682 18.3332 16.8138 18.4385 16.6263 18.6261C16.4388 18.8136 16.3334 19.068 16.3334 19.3332C16.3334 19.5984 16.4388 19.8527 16.6263 20.0403C16.8138 20.2278 17.0682 20.3332 17.3334 20.3332C18.586 20.3332 19.8105 19.9617 20.852 19.2658C21.8935 18.5699 22.7053 17.5808 23.1847 16.4235C23.664 15.2662 23.7894 13.9928 23.5451 12.7643C23.3007 11.5357 22.6975 10.4072 21.8118 9.52149C20.926 8.63576 19.7975 8.03257 18.569 7.7882C17.3404 7.54382 16.067 7.66924 14.9098 8.1486C13.7525 8.62795 12.7634 9.43971 12.0674 10.4812C11.3715 11.5227 11.0001 12.7472 11.0001 13.9998C11.0001 14.2651 11.1054 14.5194 11.293 14.7069C11.4805 14.8945 11.7349 14.9998 12.0001 14.9998C12.2653 14.9998 12.5197 14.8945 12.7072 14.7069C12.8947 14.5194 13.0001 14.2651 13.0001 13.9998C13.0001 12.8506 13.4566 11.7484 14.2693 10.9357C15.0819 10.123 16.1841 9.6665 17.3334 9.6665C18.4827 9.6665 19.5849 10.123 20.3975 10.9357C21.2102 11.7484 21.6667 12.8506 21.6667 13.9998Z" fill="#633CFF" />
                </svg>

                <span className="text-xl font-bold">devlinks</span>
            </div>
            <div className="flex space-x-4">
                <a href="home" className="text-gray-600 hover:text-purple-600">Links</a>
                <a href="profile" className="text-gray-600 hover:text-purple-600">Profile Details</a>
            </div>
            <Link href="/preview"><button className="bg-transparent border border-purple-600 text-purple-600 py-2 px-4 rounded-lg">Preview</button></Link>
        </nav>

    );
};

export default Navbar;