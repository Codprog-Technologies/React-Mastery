import Products from "./components/Products";

import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
    return (
        <Provider store={store}>
            <ToastContainer
                position="bottom-right"
                newestOnTop={true}
                autoClose={600}
                hideProgressBar={true}
            />
            <Header />
            <Products />
        </Provider>
    );
}

export default App;
