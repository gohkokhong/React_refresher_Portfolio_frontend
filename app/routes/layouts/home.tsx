import { Outlet } from "react-router";
import Hero from "../components/Hero";
import type { Route } from "../about/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "My website project portfolio" },
  ];
}

const HomeLayout = () => {
    return (
        <>
            <Hero name="Kok Hong" />
            <section className="max-w-6xl mx-auto px-6 my-8">
                <Outlet />
            </section></>
    );
}

export default HomeLayout;