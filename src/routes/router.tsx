
import "../index.css";
import { createBrowserRouter } from "react-router-dom";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import Cards from "./Cards.tsx";
import Error from "./Error.tsx";
import Root from "../layouts/Root.tsx";
import Card from "./Card.tsx";

import ProtectedRoute from "../components/ProtecetdRoute.tsx";
import FavoriteCards from "./FavoriteCards.tsx";
import CreateCard from "./CreateCard.tsx";
import MyCards from "./MyCards.tsx";
import CardEdit from "./CardEdit.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
            {
                path: "/cards", element:
                    <ProtectedRoute>
                        <Cards />
                    </ProtectedRoute>
            },

            {
                path: "/createcard", element:
                    <ProtectedRoute>
                        <CreateCard />
                    </ProtectedRoute>
            },
            {
                path: "/cardEdit/:id", element: (
                    <ProtectedRoute>
                        <CardEdit />
                    </ProtectedRoute>
                )
            },

            {
                path: "/cards/:id", element: (
                    <ProtectedRoute>
                        <Card />
                    </ProtectedRoute>
                )
            },
            {
                path: "/favoritecards", element: (
                    <ProtectedRoute>
                        <FavoriteCards />
                    </ProtectedRoute>
                )
            },

            {
                path: "/mycards", element: (
                    <ProtectedRoute>
                        <MyCards />
                    </ProtectedRoute>
                )
            },

        ],
    },
]); 