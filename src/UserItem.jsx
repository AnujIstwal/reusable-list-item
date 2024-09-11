import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const UserItem = ({ user }) => {
    const { id, name, email, username, phone, website, company, address } =
        user;
    const avatarUrl = `https://i.pravatar.cc/150?u=${id}`;

    return (
        <div className="flex bg-white shadow-md hover:shadow-lg rounded-lg max-w-md mx-auto my-4 ">
            <div className="flex flex-col justify-between w-[26rem] pt-6 pb-2">
                <img
                    src={avatarUrl}
                    alt={`${name}'s avatar`}
                    className="w-28  rounded-full object-cover self-center opacity-100 hover:opacity-90"
                />
                <div className="flex  mt-6 text-xs justify-around">
                    <div className="flex items-center border border-slate-500 rounded-md px-2 hover:bg-slate-100">
                        <IoIosCall className="text-3xl" />
                        <button className="w-full ">Call</button>
                    </div>
                    <div className="flex items-center  bg-slate-800 text-slate-50 rounded-md px-2 hover:bg-slate-900">
                        <MdEmail className="text-3xl" />
                        <button className="w-full">Email</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[40rem] py-6 mx-2">
                <div className="flex flex-col border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold lead tracking-wide">
                            {name}
                        </h2>
                        <a
                            href={website}
                            target="_blank"
                            className="px-2  flex-wrap text-xs rounded-full border font-semibold text-green-600 bg-green-100 hover:bg-green-200"
                        >
                            Visit &rarr;
                        </a>
                    </div>
                    <p className="text-sm text-slate-500 pb-2">@{username}</p>
                </div>

                <div className="flex flex-col text-[0.9rem] mt-6 gap-1 ">
                    <div className="flex gap-4 ">
                        <p className="text-slate-500 w-16">Email</p>
                        <p className="">{email}</p>
                    </div>

                    <div className="flex gap-4 ">
                        <p className="text-slate-500 w-16">Company</p>
                        <p className="">{company.name}</p>
                    </div>

                    <div className="flex gap-4 ">
                        <p className="text-slate-500 w-16">City</p>
                        <p className="">{address.city}</p>
                    </div>

                    <div className="flex gap-4 ">
                        <p className="text-slate-500 w-16">Phone</p>
                        <p className="">{phone}</p>
                    </div>
                </div>
            </div>
            {/* <div className="flex items-center mb-4">
                <img
                    src={avatarUrl}
                    alt={`${name}'s avatar`}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {name}
                    </h2>
                    <p className="text-gray-600">{email}</p>
                </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-800">
                    <span className="font-medium">Username:</span> {username}
                </p>
                <p className="text-gray-800">
                    <span className="font-medium">Phone:</span> {phone}
                </p>
                <p className="text-gray-800">
                    <span className="font-medium">Website:</span>{" "}
                    <a
                        href={`http://${website}`}
                        className="text-blue-500 hover:underline"
                    >
                        {website}
                    </a>
                </p>
                <p className="text-gray-800 mt-2">
                    <span className="font-medium">Company:</span> {company.name}
                </p>
                <p className="text-gray-800">
                    <span className="font-medium">Catch Phrase:</span>{" "}
                    {company.catchPhrase}
                </p>
                <p className="text-gray-800">
                    <span className="font-medium">BS:</span> {company.bs}
                </p>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-800">
                    <span className="font-medium">Address:</span>
                </p>
                <p className="text-gray-600">
                    {address.suite}, {address.street}
                </p>
                <p className="text-gray-600">
                    {address.city}, {address.zipcode}
                </p>
            </div> */}
        </div>
    );
};

export default UserItem;
