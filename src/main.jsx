import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ShopKeeperApp from './ShopKeeper'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ShopKeeperApp/>
  </StrictMode>,
)

