import { GlobalStyler } from './GlobalStyler/GlobalStyler.jsx'
import { AppSyler } from './GlobalStyler/AppStyler.jsx'

//import componentes
import { QrCodeComponents } from './Componentes/QrCode.jsx'

export function App() {

  return (
    <>
      <GlobalStyler/>
        <AppSyler>
          <div className='container'>
            <div className='content'>
              <div>
                <h2>Como conectar:</h2>
                <p>1. Abra o aplicativo do WhatsApp</p>
                <p>2. Busque as opções, geralmente três pontinhos na parte superior direita do aplicativo.</p>
                <p>3. Nas opções terá &quot;Dispositivos conectados&quot;, clique nela.</p>
                <p>4. Clique em &quot;Conectar Dispositivo&quot; e aponte a câmera para o QRcode abaixo</p>
              </div>
              <QrCodeComponents/>
            </div>
          </div>
        </AppSyler>
    </>
  )
}