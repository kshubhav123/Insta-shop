import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/shop.css"
import axios from 'axios'

export const Shop = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const url = `${process.env.REACT_APP_API_URL}/product`

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios.get(url).then((res) => {
                setData(res.data)
                setLoading(false)
            }).catch((e) => console.log(e))
        }, 1000);
    }, [data.length])

    return (
        <React.Fragment>
            <h2 className="shop-heading my-5">SHOP</h2>

            <div className='row mx-0'>
                <div className='col-lg-2 col-md col-sm'>
                    <Leftbar data={data} />
                </div>
                <div className='col-lg-1'></div>
                {loading ?

                    <div className="loading-spinner col-lg-6 col-md-12 col-sm-12 my-2">
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
                    <div className='col-lg-9 col-md-12 col-sm-12 my-2'>
                        <Rightbar data={data} />
                    </div>
                }
            </div>

        </React.Fragment>
    )
}

const Leftbar = ({ data }) => {
    const [colors, setColors] = useState(['black', 'lightgreen', 'gold', 'blue', 'red', 'lightgrey', 'pink'])
    const [fliterdisplay, setFilterdisplay] = useState(true)
    const [selectedColors, setSelectedColors] = useState([]);
    const isColorSelected = (color) => selectedColors.includes(color);

    const HandleColor = (color) => {
        console.log(color);
    }

    return (
        <>
            <button className="navbar-toggler border w-100 p-2 mb-2 mt-3" onClick={() => setFilterdisplay(!fliterdisplay)}>
                <span className='fs-5 fw-bold'>FILTERS</span>
            </button>

            {fliterdisplay &&
                <div>
                    {/* colors */}
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white">
                        <Link to="/" className="d-flex align-items-center mb-md-0 me-md-auto link-dark text-decoration-none">
                            <span className="small fw-bold p-2 primary-color">COLOUR </span>
                        </Link>

                        <div className="d-flex flex-wrap">
                            {colors.map((c) => {
                                return (
                                    <button onClick={() => HandleColor(c)} className={`nav-link rounded-2 text-dark fs-6 p-3 m-1 ${isColorSelected(c) ? 'selected' : ''}`} style={{ backgroundColor: c }} aria-current="page"></button>
                                )
                            })}
                        </div>



                    </div>

                    {/* BRANDS */}
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white">
                        <Link to="/" className="d-flex align-items-center mb-md-0 me-md-auto link-dark text-decoration-none">
                            <span className="small fw-bold p-2 primary-color">BRANDS </span>
                        </Link>
                        <ul className="nav flex-wrap mb-auto">
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">Puma</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">Jordan</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">Puma</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">Jordan</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">Puma</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">Jordan</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">Hitachi</Link></li>
                        </ul>
                    </div>

                    {/* Size */}
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white">
                        <Link to="/" className="d-flex align-items-center mb-md-0 me-md-auto link-dark text-decoration-none">
                            <span className="small fw-bold p-2 primary-color">SIZE </span>
                        </Link>
                        <ul className="nav flex-wrap mb-auto">
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">XS</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">S</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">M</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">L</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">XL</Link></li>
                            <li><Link to="/" className="nav-link text-dark fs-6 px-3 m-1 border filer-nav-links" aria-current="page">XXL</Link></li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}


const Rightbar = (data) => {

    return (
        <>
            <div className="row">
                {
                    data.data && data.data.map((d, key) => {
                        return (
                            <CardItem data={d} key={key} />
                        )
                    })
                }
            </div>
        </>
    )
}

const CardItem = ({ data }) => {
    return (
        <div className='col-lg-4 col-md-6 my-3 mb-5'>
            <Link to={`/singleproduct/${data.id}/${data.category}`} className='card border-0 text-decoration-none'>
                {data.img && data.img.length > 0 ? (
                    <img src={data.img[0]} alt="product img" height="367" />
                ) : null}
                <div className='small text-secondary mx-2 mt-2'>{data.brand}</div>
                <div className='m-2 fs-6'>{data.title} </div>
                <div className='fs-6 fw-bold mx-2'> ₹ {data.price}  </div>
            </Link>
        </div>
    )
}