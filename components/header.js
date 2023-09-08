import Link from "next/link"

const Header = () => {
    return (
        <div className='header'>
            <Link href='/'>
                Home
            </Link>
            <Link href='/about'>
                About
            </Link>
        </div>
    )
}

export default Header