import React from "react";
import { useNavigate } from "react-router";

const Blogs = ({ data }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        if (data?.readMoreButton?.url) {
            navigate(data.readMoreButton.url);
        }
    };

    return (
        <section id="blogs" className="py-20 bg-gray-50">
            <header className="text-center max-w-3xl mx-auto mb-12 font-bebas">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">{data?.title}</h2>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-10 lg:px-16">
                {data?.posts?.map((post, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2 cormorant">{post.title}</h3>
                            <p className="text-sm md:text-base line-clamp-5">{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {data?.readMoreButton && (
                <div className="flex justify-center mt-12">
                    <button
                        onClick={handleReadMore}
                        className="px-8 py-3 cursor-pointer bg-(--button-bg) rounded-xl cormorant text-xl shadow-lg transition"
                    >
                        {data.readMoreButton.text}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Blogs;
