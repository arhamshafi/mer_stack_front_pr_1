import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { TbRuler2 } from "react-icons/tb";
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
    const [category, setCategory] = useState("all")
    const [brand, setBrand] = useState("")
    const [loader, setLoader] = useState(false)
    const [selectedBrands, setSelectedBrands] = useState([]);
    console.log(selectedBrands);
    // console.log(fil);



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
            setLoader(true)
            const res = await axios.get("http://localhost:6767/MERN/get_products")
            setProducts(res.data.items)
        }
        catch (err) {
            console.log(err);
            setLoader(false)
        }
    }

    const handleCategory = async (cate) => {
        setCategory(cate)

        setTimeout(() => {
            setLoader(true)
            if (cate == "all") {
                set_filter_prd(products)
                setLoader(false)
            }
            else {
                const filter = products ? products.filter(items => items.category == cate) : null
                set_filter_prd(filter)
                setLoader(false)
            }
        }, 300)

    }

    const handleBrand = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]);

    }

    //========================== Products Filteration ========================= //

    useEffect(() => {
        if (!products) return;

        let filtered = [...products];

        if (selectedBrands.length > 0) {
            filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
        }
           
        set_filter_prd(filtered);
        setLoader(false)

    }, [products, selectedBrands])


   

    useEffect(() => {
        get_products();
    }, []);


    return (
        <App_context.Provider value={{
            opn_menu, setopn_menu, menu_toogle, sign_up_handler, sign_up_form, login_handler, login_form, Login, Sign_up, logout,
            Grid_Dis, setGrid_Dis, filter_prd, set_filter_prd, category, handleCategory, loader, brand, handleBrand, selectedBrands
        }}>
            {children}
        </App_context.Provider>
    )
}
export default App_Provider 