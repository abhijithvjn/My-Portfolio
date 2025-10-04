import { useNavigate } from "react-router";

const Contact = ({ data }) => {
    const { title, phone, message, email, button } = data;
    const navigate = useNavigate();

    const handleClick = () => {
        if (button?.url) {
            navigate(button.url);
        }
    };

    return (
        <section id="contact" className="py-20">
            <header className="text-center max-w-3xl mx-auto mb-12 font-bebas">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">{title}</h2>
                <p className="text-lg md:text-xl">{message}</p>
            </header>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-12 lg:py-16 gap-8">
                <div className="flex flex-col space-y-6 bg-white rounded-2xl shadow-lg p-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 cormorant">Email</h3>
                        <a href={`mailto:${email}`} className="text-lg text-blue-600 hover:underline break-words">
                            {email}
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-2 cormorant">Phone</h3>
                        <a href={`tel:${phone}`} className="text-lg text-blue-600 hover:underline">
                            {phone}
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center rounded-2xl shadow-xl p-8">
                    <h3 className="text-3xl font-bold mb-4 cormorant">{button?.title}</h3>
                    <button
                        onClick={handleClick}
                        className="px-8 py-3 cursor-pointer bg-(--button-bg) rounded-xl cormorant text-xl shadow-lg hover:bg-gray-200 transition"
                    >
                        {button?.text}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
