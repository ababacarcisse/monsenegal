import { Link } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import { Icons } from "./Icons";

const Navbar = () => {  
    return (
        <div className="bg-white  sticky z-50  top-0 inset-x-0 h-16" >
            <header className="relative bg-white" >
                <MaxWidthWrapper>
                <div className="border-b boerder-gray-200">
                    <div className="flex h16 items-center" >
                        <div className="ml-4 flex lg:ml-0">
                            <Link href="/" >
                                <Icons.logo className="w-10 h-10 text-blue-600" />
                                </Link>
                        </div>
                        <div className="hidden z-50 lg:ml-0 lg:block lg:self-stretch">
                            <NavItems/>
                        </div>
                        {/*TODO: mobile nav */}    
                    </div>


                </div>           
         </MaxWidthWrapper>
            </header>
        </div>
      
    );
}
export default Navbar;  