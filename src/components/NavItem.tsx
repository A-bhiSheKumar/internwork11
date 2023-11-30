import { Button } from "./ui/button"
 
//we are telling navitems props what kind of interface it gonna have
interface NavItmesProps {
    category: Category
}

const NavItem = ({}: NavItmesProps) => {
  return <div className="flex ">
    <div className="realtive flex items-center">
        <Button className="gap-1.5">

        </Button>
    </div>

  </div>
}

export default NavItem