import React from 'react'
import Loader from 'react-loader-spinner'

export default function Loading() {
    return (
        <>
            <Loader
                type="ThreeDots"
                height={150}
                width={150}
                color="#006400"
                timeout={5000} //3 secs
                className="loader"
            />
        </>
    )
}
