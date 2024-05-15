// @ts-nocheck 
"use client";
import React, { useState } from 'react';
import { IconPlus, IconClose } from '@/components/ui/icons';

interface Place {
    cid: React.Key | null | undefined;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    rating: number;
    category: string;
    phoneNumber?: string;
    website?: string;
}

const LocationSidebar = ({ places }: { places: Place[] }) => {
    const [showMore, setShowMore] = useState(false);
    // only show the first 5 places
    places = places.slice(0, 4);

    return (
        <div className="bg-white dark:bg-gray-950 shadow-lg rounded-lg p-4 mt-4">
             
            <div className={`space-y-4 transition-all duration-500 ${showMore ? 'max-h-[5000px]' : 'max-h-[300px]'} overflow-hidden`}>
                {places?.slice(0, showMore ? places.length : 3).map((place: Place) => (
                    <div key={place.cid} className="bg-gray-100 dark:bg-gray-950 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">{place.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{place.address}</p>
                         
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Category: {place.category}</p>
                        {place.phoneNumber && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                Phone: <a href={`tel:${place.phoneNumber}`} className="text-white hover:underline">{place.phoneNumber}</a>
                            </p>
                        )}
                        {place.website && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                                Website: <a href={place.website} className="text-white hover:underline">{place.website}</a>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationSidebar;