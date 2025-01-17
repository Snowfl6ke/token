import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useEffect, useState } from "react"

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="p-4 bg-gray-800 mb-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <p className="text-white">Snow Token</p>
        
        {isMounted && <WalletMultiButton style={{ backgroundColor: '#708090', color: 'white' }} />}
      </nav>
    </header>
  )
}

export default Header
