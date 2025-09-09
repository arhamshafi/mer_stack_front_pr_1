import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const App_context = createContext()

const App_Provider = ({ children }) => {

    const [opn_menu, setopn_menu] = useState("")
    const [login_form, setlogin_form] = useState({ email: "", password: "" })
    const [sign_up_form, set_signup_form] = useState({ name: "", email: "", number: "", password: "" })
    const [Grid_Dis, setGrid_Dis] = useState(true)
    const navigate = useNavigate()
    const [products, setProducts] = useState(null)
    const [filter_prd, set_filter_prd] = useState([])

    // ============================ STATES =========================//
    const menu_toogle = (menu) => {
        if (opn_menu == menu) {
            setopn_menu("")
        }
        else {
            setopn_menu(menu)
        }
    }
    //============================= menu toogler ============//

    const sign_up_handler = (e) => {
        const { value, name } = e.target
        set_signup_form({ ...sign_up_form, [name]: value })
    }
    const login_handler = (e) => {
        const { name, value } = e.target
        setlogin_form({ ...login_form, [name]: value })
    }
    //============================ Auth form Handler ==================//
    const Login = async () => {
        try {
            if (!login_form.email || !login_form.password) {
                toast.warning("Invalid Credentials")
                return;
            }
            const res = await axios.post("http://localhost:6767/MERN/login", login_form)
            console.log(res.data);
            sessionStorage.setItem("mernToken", JSON.stringify(res?.data?.token))
            sessionStorage.setItem("active_user", JSON.stringify(res?.data?.name))
            toast.success(res?.data?.msg)
            setTimeout(() => {
                navigate("/")
                setlogin_form({ email: "", password: "" })
            }, 1500)

        }
        catch (err) {
            if (err.response && err.response.data && err.response.data.msg) {
                toast.error(err.response.data.msg)
            } else {
                toast.error("Something went wrong")
            }
        }

    }

    const Sign_up = async () => {
        try {

            if (!sign_up_form.name || !sign_up_form.email || !sign_up_form.password || !sign_up_form.number) {
                toast.warning("Both Fields Requires")
                return;
            }

            const res = await axios.post("http://localhost:6767/MERN/sign_up", sign_up_form)
            console.log(res.data);
            toast.success(res?.data?.msg)
            sessionStorage.setItem("mernToken", JSON.stringify(res?.data?.token))
            sessionStorage.setItem("active_user", JSON.stringify(res?.data?.name))
            setTimeout(() => {
                navigate("/")
                set_signup_form({ name: "", email: "", number: "", password: "" })
            }, 1500)
        }
        catch (err) {
            if (err.response && err.response.data && err.response.data.msg) {
                toast.error(err.response.data.msg)
            } else {
                toast.error("Something went wrong")
            }
        }

    }
    //==================== login / sign up ===========================//
    const logout = () => {
        sessionStorage.removeItem("active_user")
        sessionStorage.removeItem("token")
        setopn_menu("")
        navigate("/login")
    }
    //============================ get product request ==================== //

    const get_products = async () => {
        try {
            const res = await axios.get("http://localhost:6767/MERN/get_products")
            setProducts(res.data.items)
        }
        catch (err) {
            console.log(err);
        }
    }

    //========================== Products Filteration ========================= //


    useEffect(() => {
        if (products && products.length > 0) {
            set_filter_prd(products);
        }
        console.log("rendering...");

    }, [products]);


    useEffect(() => {
        get_products()
    }, [])


    return (
        <App_context.Provider value={{
            opn_menu, setopn_menu, menu_toogle, sign_up_handler, sign_up_form, login_handler, login_form, Login, Sign_up, logout,
            Grid_Dis, setGrid_Dis, filter_prd, set_filter_prd
        }}>
            {children}
        </App_context.Provider>
    )
}
export default App_Provider 