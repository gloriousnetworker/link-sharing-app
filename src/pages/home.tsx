import React, { useState } from 'react';
import Navbar from '../components/Navbar';

type Link = {
    platform: string;
    url: string;
};

const Home = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [savedLinks, setSavedLinks] = useState<Link[]>([]);

    const handleSaveClick = () => {
        const uniqueLinks = links.filter(
            (link) => !savedLinks.some((savedLink) => savedLink.url === link.url)
        );
        setSavedLinks([...savedLinks, ...uniqueLinks]);
        setIsFormVisible(!isFormVisible);
    };

    const addLink = () => {
        setLinks([...links, { platform: '', url: '' }]);
    };

    const removeLink = (index: number) => {
        const newLinks = links.filter((_, i) => i !== index);
        setLinks(newLinks);
    };

    const handleInputChange = (index: number, field: string, value: string) => {
        const newLinks = links.map((link, i) =>
            i === index ? { ...link, [field]: value } : link
        );
        setLinks(newLinks);
    };

    const handleEditClick = (index: number) => {
        const newLinks = [...savedLinks];
        const newLink = prompt("Edit the link URL:", savedLinks[index].url);
        const newPlatform = prompt("Edit the platform:", savedLinks[index].platform);
        if (newLink && newPlatform) {
            newLinks[index] = { ...newLinks[index], url: newLink, platform: newPlatform };
            setSavedLinks(newLinks);
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className='container mx-auto p-8'>
                    <div className="flex space-x-8">
                        {/* Phone Preview */}
                        <div className="bg-white rounded p-4 w-1/3 lg:flex md:hidden xxs:hidden xs:hidden justify-center items-center sm:hidden">
                            <div className="w-80 h-96 flex items-center justify-center">
                                {savedLinks.length === 0 ? (
                                    <svg width="308" height="450" viewBox="0 0 308 632" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z" stroke="#737373" />
                                        <path d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z" fill="white" stroke="#737373" />
                                        <circle cx="153.5" cy="112" r="48" fill="#EEEEEE" />
                                        <rect x="73.5" y="185" width="160" height="16" rx="8" fill="#EEEEEE" />
                                        <rect x="117.5" y="214" width="72" height="8" rx="4" fill="#EEEEEE" />
                                        <rect x="35" y="278" width="237" height="44" rx="8" fill="#EEEEEE" />
                                        <rect x="35" y="342" width="237" height="44" rx="8" fill="#EEEEEE" />
                                        <rect x="35" y="406" width="237" height="44" rx="8" fill="#EEEEEE" />
                                        <rect x="35" y="470" width="237" height="44" rx="8" fill="#EEEEEE" />
                                        <rect x="35" y="534" width="237" height="44" rx="8" fill="#EEEEEE" />
                                    </svg>
                                ) : (
                                    <div className="bg-white rounded-3xl p-4 max-w-sm w-full mb-8 mt-2 pb-40 border border-black">
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <img
                                                    src="{profileImage}"
                                                    alt="ProfileImage"
                                                    className="rounded-full object-cover w-full h-full"
                                                />
                                            </div>
                                            <div className="text-gray-900 text-lg font-semibold">Name Placeholder</div>
                                            <div className="text-gray-500 text-sm">email@example.com</div>
                                        </div>
                                        <div className="mt-6 space-y-5">
                                            {savedLinks.map((link, index) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    className={`flex items-center justify-between px-4 py-3 rounded-lg mb-5 ${link.platform.toLowerCase() === 'youtube'
                                                            ? 'bg-red-500'
                                                            : link.platform.toLowerCase() === 'linkedin'
                                                                ? 'bg-blue-500'
                                                                : 'bg-black'
                                                        } text-white`}
                                                >
                                                    <span className="flex items-center space-x-2">
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                            {/* Add your SVG path here */}
                                                        </svg>
                                                        <span>{link.platform}</span>
                                                    </span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleEditClick(index);
                                                        }}
                                                        className="bg-gray-800 text-white py-1 px-2 rounded"
                                                    >
                                                        Edit
                                                    </button>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Customize Links Section */}
                        <div className="bg-white p-8 w-2/3">
                            <h1 className="text-2xl font-bold mb-4">Customize your links</h1>
                            <p className="text-gray-600 mb-6">Add/edit/remove links below and then share all your profiles with the world!</p>
                            <button onClick={addLink} className="bg-purple-100 w-full text-purple-600 py-2 px-4 rounded mb-6">
                                + Add new link
                            </button>
                            {links.length === 0 ? (
                                <div className="bg-gray-50 p-8 rounded-lg text-center">
                                    <div className='flex justify-center items-center mx-auto mb-4'>
                                        <svg width="250" height="161" viewBox="0 0 250 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M48.6936 15.4213C23.3786 25.2238 4.59362 50.0679 0.857884 80.1285C-2.26282 105.459 5.19347 133.446 49.0884 141.419C134.494 156.939 222.534 158.754 242.952 116.894C263.369 75.0336 235.427 8.00293 192.079 3.36363C157.683 -0.326546 98.1465 -3.7206 48.6936 15.4213Z" fill="white" />
                                            <path d="M157.022 9.56714H93.044C89.0309 9.56714 85.7776 12.8204 85.7776 16.8336V137.744C85.7776 141.757 89.0309 145.01 93.044 145.01H157.022C161.036 145.01 164.289 141.757 164.289 137.744V16.8336C164.289 12.8204 161.036 9.56714 157.022 9.56714Z" fill="#333333" />
                                            <path opacity="0.03" d="M125.033 140.872C128.174 140.872 130.72 138.326 130.72 135.185C130.72 132.044 128.174 129.498 125.033 129.498C121.892 129.498 119.346 132.044 119.346 135.185C119.346 138.326 121.892 140.872 125.033 140.872Z" fill="#333333" />
                                            <path d="M156.628 21.321H93.4314V126.78H156.628V21.321Z" fill="#EFEBFF" />
                                            <path opacity="0.03" d="M117.797 120.508C118.938 120.508 119.862 119.583 119.862 118.443C119.862 117.302 118.938 116.377 117.797 116.377C116.656 116.377 115.732 117.302 115.732 118.443C115.732 119.583 116.656 120.508 117.797 120.508Z" fill="#333333" />
                                            <path opacity="0.44" d="M125.033 120.508C126.174 120.508 127.099 119.583 127.099 118.443C127.099 117.302 126.174 116.377 125.033 116.377C123.893 116.377 122.968 117.302 122.968 118.443C122.968 119.583 123.893 120.508 125.033 120.508Z" fill="white" />
                                            <path opacity="0.03" d="M132.269 120.508C133.41 120.508 134.335 119.583 134.335 118.443C134.335 117.302 133.41 116.377 132.269 116.377C131.129 116.377 130.204 117.302 130.204 118.443C130.204 119.583 131.129 120.508 132.269 120.508Z" fill="#333333" />
                                            <path opacity="0.03" d="M148.199 32.9534H101.867V72.5051H148.199V32.9534Z" fill="#333333" />
                                            <path opacity="0.03" d="M134.373 80.1284H101.867V83.7503H134.373V80.1284Z" fill="#333333" />
                                            <path opacity="0.03" d="M148.199 80.1284H136.567V83.7503H148.199V80.1284Z" fill="#333333" />
                                            <path opacity="0.03" d="M117.053 91.2371H101.867V94.8589H117.053V91.2371Z" fill="#333333" />
                                            <path opacity="0.03" d="M148.199 91.2371H120.28V94.8589H148.199V91.2371Z" fill="#333333" />
                                            <path opacity="0.03" d="M136.954 102.353H101.867V105.975H136.954V102.353Z" fill="#333333" />
                                            <path d="M78.6555 21.321H15.4592V126.78H78.6555V21.321Z" fill="#EFEBFF" />
                                            <path opacity="0.44" d="M39.8251 120.508C40.9657 120.508 41.8903 119.583 41.8903 118.443C41.8903 117.302 40.9657 116.377 39.8251 116.377C38.6844 116.377 37.7598 117.302 37.7598 118.443C37.7598 119.583 38.6844 120.508 39.8251 120.508Z" fill="white" />
                                            <path opacity="0.03" d="M47.0611 120.508C48.2018 120.508 49.1264 119.583 49.1264 118.443C49.1264 117.302 48.2018 116.377 47.0611 116.377C45.9205 116.377 44.9958 117.302 44.9958 118.443C44.9958 119.583 45.9205 120.508 47.0611 120.508Z" fill="#333333" />
                                            <path opacity="0.03" d="M54.297 120.508C55.4376 120.508 56.3623 119.583 56.3623 118.443C56.3623 117.302 55.4376 116.377 54.297 116.377C53.1563 116.377 52.2317 117.302 52.2317 118.443C52.2317 119.583 53.1563 120.508 54.297 120.508Z" fill="#333333" />
                                            <path opacity="0.03" d="M70.227 32.9534H23.8948V72.5051H70.227V32.9534Z" fill="#333333" />
                                            <path opacity="0.03" d="M56.4002 80.1284H23.8948V83.7503H56.4002V80.1284Z" fill="#333333" />
                                            <path opacity="0.03" d="M70.2274 80.1284H58.595V83.7503H70.2274V80.1284Z" fill="#333333" />
                                            <path opacity="0.03" d="M39.0807 91.2371H23.8948V94.8589H39.0807V91.2371Z" fill="#333333" />
                                            <path opacity="0.03" d="M70.2272 91.2371H42.3079V94.8589H70.2272V91.2371Z" fill="#333333" />
                                            <path opacity="0.03" d="M58.9819 102.353H23.8948V105.975H58.9819V102.353Z" fill="#333333" />
                                            <path d="M234.6 21.321H171.403V126.78H234.6V21.321Z" fill="#EFEBFF" />
                                            <path opacity="0.03" d="M195.769 120.508C196.91 120.508 197.834 119.583 197.834 118.443C197.834 117.302 196.91 116.377 195.769 116.377C194.629 116.377 193.704 117.302 193.704 118.443C193.704 119.583 194.629 120.508 195.769 120.508Z" fill="#333333" />
                                            <path opacity="0.03" d="M203.005 120.508C204.146 120.508 205.071 119.583 205.071 118.443C205.071 117.302 204.146 116.377 203.005 116.377C201.865 116.377 200.94 117.302 200.94 118.443C200.94 119.583 201.865 120.508 203.005 120.508Z" fill="#333333" />
                                            <path opacity="0.44" d="M210.242 120.508C211.382 120.508 212.307 119.583 212.307 118.443C212.307 117.302 211.382 116.377 210.242 116.377C209.101 116.377 208.176 117.302 208.176 118.443C208.176 119.583 209.101 120.508 210.242 120.508Z" fill="white" />
                                            <path opacity="0.03" d="M226.171 32.9534H179.839V72.5051H226.171V32.9534Z" fill="#333333" />
                                            <path opacity="0.03" d="M212.345 80.1284H179.839V83.7503H212.345V80.1284Z" fill="#333333" />
                                            <path opacity="0.03" d="M226.171 80.1284H214.539V83.7503H226.171V80.1284Z" fill="#333333" />
                                            <path opacity="0.03" d="M195.025 91.2371H179.839V94.8589H195.025V91.2371Z" fill="#333333" />
                                            <path opacity="0.03" d="M226.179 91.2371H198.26V94.8589H226.179V91.2371Z" fill="#333333" />
                                            <path opacity="0.03" d="M214.926 102.353H179.839V105.975H214.926V102.353Z" fill="#333333" />
                                            <path opacity="0.1" d="M146.597 145.041C146.597 144.281 144.987 113.15 146.02 108.518C147.053 103.887 156.529 81.2445 154.031 78.6022C151.533 75.9598 142.383 81.9735 142.383 81.9735C142.383 81.9735 144.054 54.7071 140.105 52.7633C136.157 50.8195 134.403 58.4353 134.403 58.4353L132.3 88.9362L121.882 144.896L146.597 145.041Z" fill="#333333" />
                                            <path d="M139.559 113.295C140.887 107.98 142.884 102.794 144.16 97.4253C145.003 93.8718 150.455 79.02 151.981 74.6465C152.451 73.3025 152.854 71.6776 151.943 70.5842C151.635 70.2645 151.252 70.0274 150.829 69.8947C150.406 69.762 149.956 69.738 149.521 69.8249C148.643 70.0081 147.833 70.4313 147.182 71.0474C145.663 72.3838 142.862 78.9972 140.811 78.9896C138.329 78.9896 139.498 72.156 139.43 70.8424C139.149 65.1856 139.566 57.9343 137.357 52.6193C135.717 48.6709 131.647 49.2024 130.69 53.4697C129.733 57.7369 129.771 75.6184 129.771 75.6184C129.771 75.6184 113.887 72.8925 111.176 77.7368C108.465 82.5811 113.044 113.355 113.044 113.355L139.559 113.295Z" fill="#F4A28C" />
                                            <path d="M141.495 160.5L141.206 111.594L111.525 105.079L99.574 160.5H141.495Z" fill="#633CFF" />
                                            <path opacity="0.1" d="M141.495 160.5L141.206 111.594L127.038 108.48L124.502 160.5H141.495Z" fill="#333333" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Getting started</h2>
                                    <p className="text-gray-600">Start adding links to see the preview!</p>
                                </div>
                            ) : (
                                links.map((link, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold">Link #{index + 1}</span>
                                            <button onClick={() => removeLink(index)} className="text-red-500">Remove</button>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Platform"
                                            value={link.platform}
                                            onChange={(e) => handleInputChange(index, 'platform', e.target.value)}
                                            className="border p-2 rounded w-full mb-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="URL"
                                            value={link.url}
                                            onChange={(e) => handleInputChange(index, 'url', e.target.value)}
                                            className="border p-2 rounded w-full mb-2"
                                        />
                                    </div>
                                ))
                            )}
                            <div className="text-center flex justify-end items-end my-8">
                                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg" onClick={handleSaveClick}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
