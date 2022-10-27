
import { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

export default class MainTemplate extends Component{
    render() {
        return (
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        )
    }
}