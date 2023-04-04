import React from "react"
import Link from "next/link"
//ourdomain.com/news
const RandomPage = () => {
    return (
        <>

            <h1>This is Random Page</h1>

            <ul>
                <li >
                    <Link href="/weather/weatherUpdates"> Item1</Link>


                </li>
                <li >
                    <Link href="/weather/weatherUpdates"> Item2</Link>

                </li>
                <li >
                    <Link href="/weather/weatherUpdates"> Item3</Link>

                </li>
            </ul>
        </>)


}
export default RandomPage 