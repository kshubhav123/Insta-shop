import React, { useEffect, useState } from 'react'
import "../assets/css/categories.css"
import axios from 'axios'

export const Categories = () => {

    const [categories, setCategories] = useState([])
    const [uniqueCategory, setUniqueCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const url = `${process.env.REACT_APP_API_URL}/product`

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios.get(url).then((res) => {
                setCategories(res.data)
                const uc = [...new Set(res.data.map((c) => c.category))]
                setUniqueCategory(uc)
                setLoading(false)
            }).catch((e) => console.log(e))
        }, 1000);
    }, [categories.length])

    return (
        <React.Fragment>
            <h2 className="shop-heading mt-5">CATEGORIES</h2>

            {
                loading ? <div className="loading-spinner">
                    <div class="spinner-grow text-primary mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-success mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-info mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-dark mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                    :
                    <div className='container p-3'>
                        <div className='row px-3'>
                            {uniqueCategory && uniqueCategory.map((c, index) => <CategoriesItems category={c} index={index} />)}
                        </div>
                    </div>

            }

        </React.Fragment>
    )
}

const CategoriesItems = ({ category, index }) => {
    const img = [
        "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/T-Shirts/tbuvzqlxkcdhlondtvno",
        "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Jeans/q0ivpfkbpgp2oxl7qlzd",
        "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Shirts/hasikqrhziy516vlwfot",
        "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Lowers/cedvkefuptxtazezforh",
        "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Shorts/hhnmg62anrel62ntko5m"
    ]

    return (
        <>
            <div className='col-lg-3 px-1 col-md-4 my-2 cat-card'>
                <div className='position-relative'>
                    <img src={img[index]} alt="categoryimage" className='w-100 my-3' style={{height:"18rem"}} />
                    <div className='position-absolute bottom-0 m-2 py-3 px-2 fs-3 fw-normal text-white cat-text'>{category}</div>
                </div>
            </div>
        </>
    )
}

