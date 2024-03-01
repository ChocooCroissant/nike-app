import { headerLogo } from "../../assets/images"
import { hamburger } from "../../assets/icons"
import { navLinks } from "../constants/index"
import { useState } from "react"
import { XMarkIcon } from '@heroicons/react/16/solid'

const Nav = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img 
                    src={headerLogo} 
                    alt="Logo"
                    width={130}
                    height={29}  
                />
            </a>
            <ul className="flex-1 z-40 flex justify-center items-center gap-16 max-lg:hidden font-bold">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className=" font-montserrat leading-normal text-lg text-slate-gray hover:text-gray-900"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img 
                        src={hamburger} 
                        alt="hamburger" 
                        width={25}
                        height={25}
                    />
                </button>
            </div>
            {isMenuToggled && (
                <div className="fixed right-0 bottom-0 w-[300px] h-full z-40 bg-pale-blue drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className=" h-6 w-6 text-gray-600"/>
                        </button>
                    </div>
                    <ul className="flex items-center flex-col gap-2 font-bold">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a 
                                    href={item.href}
                                    className=" font-montserrat leading-normal text-lg text-slate-gray hover:text-gray-900"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    </header>
  )
}

export default Nav;
