import Link from "next/link";
export default function Navber () {
    return (
    <div className="bg-nav" >
        <nav> 
            <ul>
                <li><Link href={'/'} className="link-label"> <label>Fibonacci</label> </Link></li>
            </ul>
        
        </nav>
    
    </div>
      );
}