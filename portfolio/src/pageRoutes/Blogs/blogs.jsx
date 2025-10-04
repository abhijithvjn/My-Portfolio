import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Blogs = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="text-center mb-16">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    This page is currently under development. Please check back soon!
                </p>
            </header>

            {/* Card Notice */}
            <div className="max-w-xl w-full">
                <Card className="border-none shadow-lg p-8 bg-white dark:bg-gray-800 text-center">
                    <CardHeader>
                        <h3 className="text-2xl md:text-3xl font-semibold cormorant">Coming Soon!</h3>
                    </CardHeader>
                    <CardContent className="mt-4 text-gray-700 dark:text-gray-300">
                        <p className="mb-2">Preparing valuable articles for you.</p>
                        <p>
                            Meanwhile, you can reach out or follow us for updates at:{" "}
                            <a
                                href="mailto:abhijithvjn1999@gmail.com"
                                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                abhijithvjn1999@gmail.com
                            </a>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Blogs;
