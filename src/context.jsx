import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const App_context = createContext()

const App_Provider = ({ children }) => {

    const [opn_menu, setopn_menu] = useState("")
    const [login_form, setlogin_form] = useState({ email: "", password: "" })
    const [sign_up_form, set_signup_form] = useState({ name: "", email: "", number: "", password: "" })
    const navigate = useNavigate()

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
            navigate("/dash")

            setlogin_form({ email: "", password: "" })
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
            navigate("/dash")
            set_signup_form({ name: "", email: "", number: "", password: "" })
        }
        catch (err) {
            if (err.response && err.response.data && err.response.data.msg) {
                toast.error(err.response.data.msg)
            } else {
                toast.error("Something went wrong")
            }
        }

    }
    return (
        <App_context.Provider value={{ opn_menu, setopn_menu, menu_toogle, sign_up_handler, sign_up_form, login_handler, login_form, Login, Sign_up }}>
            {children}
        </App_context.Provider>
    )
}
export default App_Provider 