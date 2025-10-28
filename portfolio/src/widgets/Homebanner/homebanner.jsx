const HomeBanner = ({ data }) => {
    return (
        <section id="home" className="flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
                <img src={data?.image} alt="" className="w-full h-auto object-contain max-h-[500px]" />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center font-bebas text-center p-6 md:p-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{data?.title}</h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl max-w-md wrap-break-word">{data?.description}</p>
            </div>
        </section>
    );
};

export default HomeBanner;
