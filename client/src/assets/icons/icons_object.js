
import React from "react";
// IMPORT ICONS
import { FaBusinessTime } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { AiTwotoneBank } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const categoryArr = [
    {
        category: "job",
        iconComponent: <FaBusinessTime />
    },
    {
        category: "home",
        iconComponent: <AiOutlineHome />
    },
    {
        category: "school",
        iconComponent: <MdSchool />
    },
    {
        category: "economy",
        iconComponent: <AiTwotoneBank />
    },
    {
        category: "vacation",
        iconComponent: <IoIosAirplane />
    },
    {
        category: "shopping",
        iconComponent: <AiOutlineShoppingCart />
    }

]

export default categoryArr;