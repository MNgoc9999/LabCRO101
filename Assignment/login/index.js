import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const LoginScreen = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (isRegister) {
            if (name && email && password) {
                onRegister();
            } else {
                alert("Vui lòng nhập đầy đủ thông tin");
            }
        } else {
            if (email && password) {
                onLogin();
            } else {
                alert("Vui lòng nhập email và mật khẩu");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 p-4">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl text-center">
                    <CardContent>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">{isRegister ? "Đăng Ký" : "Đăng Nhập"}</h2>
                        {isRegister && (
                            <div className="relative mb-4">
                                <FaUser className="absolute left-3 top-3 text-gray-500" />
                                <Input type="text" placeholder="Họ và Tên" value={name} onChange={(e) => setName(e.target.value)} className="pl-10" />
                            </div>
                        )}
                        <div className="relative mb-4">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" />
                        </div>
                        <div className="relative mb-4">
                            <FaLock className="absolute left-3 top-3 text-gray-500" />
                            <Input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" />
                        </div>
                        <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all" onClick={handleAuth}>
                            {isRegister ? "Đăng Ký" : "Đăng Nhập"}
                        </Button>
                        <p className="mt-4 text-gray-600 cursor-pointer" onClick={() => setIsRegister(!isRegister)}>
                            {isRegister ? "Đã có tài khoản? Đăng nhập" : "Chưa có tài khoản? Đăng ký"}
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
export default LoginScreen;