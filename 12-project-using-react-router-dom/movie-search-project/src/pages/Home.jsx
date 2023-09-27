import axios from "axios";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "one piece";

    try {
        const movieSearchEndpoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

        const response = await axios.get(movieSearchEndpoint);

        return {
            movieApiResponse: response.data,
            searchTerm,
            isError: false,
            error: "",
        };
    } catch (error) {
        const errorMessage =
            error?.response?.data?.Error ||
            error.message ||
            "Something went wrong...";
        return {
            movieApiResponse: null,
            searchTerm,
            isError: true,
            error: errorMessage,
        };
    }
}

function Home() {
    const data = useLoaderData();

    return (
        <div>
            <SearchForm searchTerm={data.searchTerm} />
            <MovieList data={data} />
        </div>
    );
}

export default Home;
