import React from "react";
import homeData from "../../staticData/homepageData";
import HomeBanner from "../../widgets/Homebanner";
import About from "../../widgets/About";
import Projects from "../../widgets/Projects";
import Contact from "../../widgets/Contact";
import Blogs from "../../widgets/Blogs";

const Homepage = () => {
    const data = homeData?.data;
    const widgetMap = {
        HomeBanner,
        About,
        Projects,
        Contact,
        Blogs,
    };
    return (
        <div>
            {data?.widgets?.map((widget, index) => {
                const WidgetComponent = widgetMap[widget.widget_type];
                return <WidgetComponent key={index} data={widget?.data} />;
            })}
        </div>
    );
};

export default Homepage;
