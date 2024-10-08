import CategoryLayout from "./categories/CategoryLayout"
import CompletedProjectCard from "./categories/CompletedProjectCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrowIcon from "../assets/images/icons/Right Arrow.svg";
import LeftArrowIcon from "../assets/images/icons/Left Arrow.svg";
import thumbnail from "../assets/images/project-thumbnail.jpg";
import logo from "../assets/images/MR Logo White.png";

function CompletedProject() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const categories = [
        {
            thumbnail,
            clientLogo: logo,
            title: "Pressure and Soft Washing Door Hanger Design",
            clientName: "clientname",
            timeStamp: "5 days ago"
        },
        {
            thumbnail,
            clientLogo: logo,
            title: "Pressure and Soft Washing Door Hanger Design",
            clientName: "clientname",
            timeStamp: "5 days ago"
        },
        {
            thumbnail,
            clientLogo: logo,
            title: "Pressure and Soft Washing Door Hanger Design",
            clientName: "clientname",
            timeStamp: "5 days ago"
        },
        {
            thumbnail,
            clientLogo: logo,
            title: "Pressure and Soft Washing Door Hanger Design",
            clientName: "clientname",
            timeStamp: "5 days ago"
        },
        {
            thumbnail,
            clientLogo: logo,
            title: "Pressure and Soft Washing Door Hanger Design",
            clientName: "clientname",
            timeStamp: "5 days ago"
        },
    ]
    return (
        <CategoryLayout title={"Completed Projects"}>
            <div>
                <Slider {...settings}>
                    {categories.map(category => <CompletedProjectCard key={Math.random()} thumbnail={category.thumbnail} clientLogo={category.clientLogo} title={category.title} clientName={category.clientName} timeStamp={category.timeStamp} />)}
                </Slider>
            </div>
        </CategoryLayout>
    )
}

// Custom arrows design components
function NextArrow({ onClick }) {
    return (
        <div onClick={onClick} className="slick-arrow before:content-none h-[35px] w-[35px] border cursor-pointer flex items-center justify-center rounded-full absolute top-[30%] -right-[15px] z-10">
            <img src={RightArrowIcon} alt="" />
        </div>
    );
}

function PrevArrow({ onClick }) {
    return (
        <div onClick={onClick} className="slick-arrow before:content-none h-[35px] w-[35px] border cursor-pointer flex items-center justify-center rounded-full absolute top-[30%] -left-[15px] z-10">
            <img src={LeftArrowIcon} alt="" />
        </div>
    );
}

export default CompletedProject