import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"

const GeneralLayout = ({ children }: { children:React.ReactNode }) => {
  return (
    <div>
        <Header />
        <MobileNav />
        { children }
    </div>
  )
}

export default GeneralLayout