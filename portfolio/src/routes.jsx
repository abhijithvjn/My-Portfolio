import Layout from "./components/Layout/layout";
import { pageRoutes } from "./contants/pageRoutes";
import Homepage from "./pageRoutes/Homepage";

export const routes = [
    {
        path: pageRoutes.HOME,
        element: <Layout />,
        children: [
            {
                path: pageRoutes.HOME,
                element: <Homepage />,
            },
            {
                path: pageRoutes.ABOUT,
                element: <div>about</div>,
            },
            {
                path: pageRoutes.CONTACT,
                element: <div>contact</div>,
            },
        ],
    },
]