import React, { useState } from "react";

import Description from "../components/Forms/Description";
import FacilitiesAndAmenities from "../components/Forms/FacilitiesAndAmenities";
import Pictures from "../components/Forms/Pictures";
import ReviewAndPublish from "../components/Forms/ReviewAndPublish";
import Contact from "../components/Forms/Contact";
import Availability from "../components/Forms/Availability";
import Prices from "../components/Forms/Prices";

const NewAdvertisement = () => {

    const [page, setPage] = useState(0);

    //passed to facilities and amenities
    const [checkboxState, setCheckboxState] = useState({});

    const [selectedImage, setSelectedImage] = useState([]);

    const [formData, setFormData] = useState({
        furnishing: [],
        suitability: [],
        addedImages:[],
        additionalCosts:[],
        availableDays: []
    });

    const componentList = [
        <Description
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <FacilitiesAndAmenities
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            checkboxState={checkboxState}
            setCheckboxState={setCheckboxState}
        />,
        <Pictures
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            // imageDescription={imageDescription}
        />,
        <Contact
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <Prices
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <Availability
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <ReviewAndPublish
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    };

    return (
        <>
            {/* Timeline */}
            <div className="columns is-mobile">
                <div className={`step column is-step-1 is-step-images ${page > 0 ? "is-done" : ""} ${page === 0 ? "in-process" : ""}`}>
                    <span className="circle ">
                        <span className="inner-text">1</span>
                    </span>
                    <span className="step-name">description</span>
                    {/* <Link className="step-name" to='description'>Description</Link> */}
                </div>
                <div className={`step column is-step-2 is-step-images ${page > 1 ? "is-done" : ""} ${page === 1 ? "in-process" : ""}`}>
                    <span className="circle ">
                        <span className="inner-text">2</span>
                    </span>
                    <span className="step-name">facilities and amenities</span>
                    {/* <Link className="step-name" to='facilities-and-amenities'>Facilities And Amenities</Link> */}
                </div>
                <div className={`step column is-step-3 is-step-images ${page > 2 ? "is-done" : ""} ${page === 2 ? "in-process" : ""}`}>
                    <span className="circle ">
                        <span className="inner-text">3</span>
                    </span>
                    <span className="step-name">Pictures</span>
                    {/* <Link className="step-name" to='pictures'>Pictures</Link> */}
                </div>
                <div className={`step column is-step-4 is-step-images ${page > 3 ? "is-done" : ""} ${page === 3 ? "in-process" : ""}`}>
                    <span className="circle ">
                        <span className="inner-text">4</span>
                    </span>
                    <span className="step-name">Contact</span>
                    {/* <Link className="step-name" to='contact'>Contact</Link> */}
                </div>
                <div className={`step column is-step-5 is-step-images ${page > 4 ? "is-done" : ""} ${page === 4 ? "in-process" : ""}`}>
                    <span className="circle ">
                        <span className="inner-text">5</span>
                    </span>
                    <span className="step-name">Prices</span>
                    {/* <Link className="step-name" to='prices'>Prices</Link> */}
                </div>
                <div className={`step column is-step-6 is-step-images ${page > 5 ? "is-done" : ""} ${page === 5 ? "in-process" : ""}`}>
                    <span className="circle ">
                        <span className="inner-text">6</span>
                    </span>
                    <span className="step-name">availability</span>
                    {/* <Link className="step-name" to='availability'>Availability</Link> */}
                </div>
                <div className={`step column is-step-7 is-step-images ${page > 6 ? "is-done" : ""} ${page === 6 ? "in-process" : ""}`}>
                    <span className="circle last">
                        <span className="inner-text">7</span>
                    </span>
                    <span className="step-name">Publish advertisement</span>
                    {/* <Link className="step-name" to='review-and-publish'>Review And Publish</Link> */}

                </div>
            </div>
            {/* <Outlet/> */}

            <form onSubmit={handleSubmit}>
                <div>{componentList[page]}</div>
            </form>
        </>
    )
}

export default NewAdvertisement;