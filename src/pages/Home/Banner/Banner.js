import React from 'react';
import { Carousel } from 'flowbite-react';

const Banner = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img
                    src="https://infobellstech.com/images/resource/itsolution.jpg"
                    alt="..."
                />
                <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-fea75ed7f9c05efb30bc02ea7927ae79"
                    alt="..."
                />
                <img
                    src="https://media.istockphoto.com/id/531861190/photo/missing-puzzle-piece-problem-and-solution-white.jpg?s=612x612&w=0&k=20&c=hU0KmkOHgvVtF5H0ILcv18kDpV7_T0CIeGudJAL_MEg="
                    alt="..."
                />
                <img
                    src="https://hexaware.com/wp-content/uploads/2019/10/sap-disaster-recovery-solution-implementation-on-azure-for-a-leading-multi-technological-solutions-provider.jpg"
                    alt="..."
                />
                <img
                    src="https://ditech.co/uploads/images/services/1646203183-59727757.jpg?pq=low"
                    alt="..."
                />
            </Carousel>
        </div>
    );
};

export default Banner;