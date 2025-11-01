// headerData.js
const headerData = {
    data: {
        widget_type: "Header",
        data: {
            logo: {
                text: "YourPortfolio",
                image: "/logo/abhi_logo.png",
                url: "#home",
            },
            navigation: [
                { title: "Home", url: "#home" },
                { title: "About", url: "#about" },
                { title: "Projects", url: "#projects" },
                { title: "Contact", url: "#contact" },
                { title: "Blogs", url: "#blogs" },
            ],
            mobileMenu: {
                enabled: true,
                menuItems: [
                    { title: "About", url: "#about" },
                    { title: "Projects", url: "#projects" },
                    { title: "Contact", url: "#contact" },
                    { title: "Blogs", url: "#blogs" },
                ],
            },
        },
    },
};

export default headerData;
