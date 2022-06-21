//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
   <>
     <nav className="navbar">
    <div className="max-width">
     <div className="logo">
                <a href="#">Portfo<span>lio</span></a></div>
        <ul className="menu">
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a >About</a></Link></li>
        <li><Link href="/projects"><a >Projects</a></Link></li>
        <li><Link href="/contact"><a >Contact</a></Link></li>
        </ul>
        </div>
    </nav>

    <style jsx>{`
.navbar {
  width: 100%;
  padding: 20px 0;
  font-family: 'Ubuntu', sans-serif;
  background: hsl(242, 19%, 5%);;
}

.max-width {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}

.navbar .logo a span {
  color: hsl(342, 92%, 46%);
  transition: all 0.3s ease;
}

.navbar.sticky .logo a span {
  color: #fff;
}

.navbar .menu li {
  padding:20px 10px 5px 10px;
    list-style: none;
    display: inline-block;
}

.navbar .menu li a {
  display: block;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  transition: color 0.3s ease;
}

.navbar .menu li a:hover,
.navbar.sticky .menu li a:hover {
  color: hsl(342, 92%, 46%);
}
`}
</style>
   </>
)

export default Header