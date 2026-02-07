import Button from "./Button";

const Navbar = ()=>{
    return (
        <nav className="fixed top-0 w-full">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <div className="logo">
                        <h1 className="text-white font-semibold text-xl">Hza_Dev</h1>
                    </div>

                    {/* menu */}
                    <Button>
                        Menu
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;