import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Calendar } from "react-feather"

export const ItemBlog = ({ data }) => {

    const [focused, changeFocused] = useState(false);

    const getDate = (date) => new Date(date).toLocaleDateString() // TODO move to moment and move to utils

    return (
        <div className="blog-item w-full md:w-1/2 lg:w-1/3 p-4">
            <div className={`transition-all duration-300 hover:shadow-2xl shadow ${focused && 'focused'}`}>
                <Link
                    to={data.metadata.permalink}
                    title={data.metadata.title}
                    onFocus={() => changeFocused(true)} onBlur={() => changeFocused(false)}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="image">
                        {data.assets.image ?
                            <img src={data.assets.image} alt="" className="w-full" /> :
                            <img src={data.frontMatter.image} alt="" className="w-full" />
                        }
                    </div>
                    <div className="p-4 py-3">
                        <h4 className="text-3xl pt-1">
                            {data.frontMatter.title}
                        </h4>
                        <div className="flex items-center">
                            <Calendar className="stroke-current" />
                            <small className="pl-2 font-sans">{getDate(data.metadata.date)} by {data.frontMatter.author}</small>
                        </div>
                        <p className="pt-3">
                            {data.frontMatter.description}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ItemBlog;