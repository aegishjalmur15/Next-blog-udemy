import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featuredPosts";
import Hero from '../components/home-page/hero';


const DUMMY_POSTS =[
    {
        title: "next course",
        slug: "getting-started-with-nextjs",
        image:"getting-started-nextjs.png",
        excerpt:"NextJS is the react framework for production, it makes building fullstack app...",
        date:"2022-05-23",

    },
    {
        title: "next course",
        slug: "getting-started-with-nextjs2",
        image:"getting-started-with-nextjs.png",
        excerpt:"NextJS is the react framework for production, it makes building fullstack app...",
        date:"2022-05-23",

    },
    {
        title: "next course",
        slug: "getting-started-with-nextjs3",
        image:"getting-started-with-nextjs.png",
        excerpt:"NextJS is the react framework for production, it makes building fullstack app...",
        date:"2022-05-23",

    },
    {
        title: "next course",
        slug: "getting-started-with-nextjs4",
        image:"getting-started-with-nextjs.png",
        excerpt:"NextJS is the react framework for production, it makes building fullstack app...",
        date:"2022-05-23",

    }

];

function HomePage(){
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    );
}

export default HomePage;
