import React from "react";
import { Link } from "react-router";
import footerData from "../../staticData/footerData";

const Footer = () => {
    const { navigation, socialLinks, contact, copyright } = footerData.data.data;

    return (
        <footer className="w-full bg-gray-800 shadow-md text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center pt-15 py-6 justify-between space-y-6 md:space-y-0">
                <div className="flex flex-row space-x-6 cormorant">
                    <div className="flex flex-col space-y-2 px-5">
                        {navigation.map((nav, index) => (
                            <Link key={index} to={nav.url} className="hover:text-blue-400 transition-colors">
                                {nav.title}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col space-y-2 px-5">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{social.title}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col px-5 bodoni-moda">
                    <div className="flex flex-col text-left space-y-2 h-full break-words">
                        <p>
                            Email:{" "}
                            <a href={`mailto:${contact.email}`} className="hover:text-blue-400">
                                {contact.email}
                            </a>
                        </p>
                        <p>
                            Phone:{" "}
                            <a href={`tel:${contact.phone}`} className="hover:text-blue-400">
                                {contact.phone}
                            </a>
                        </p>
                    </div>
                    <div className="mt-4 text-gray-400 text-sm">{copyright}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
