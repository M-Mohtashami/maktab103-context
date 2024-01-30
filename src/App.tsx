import MainLayout from './layout/MainLayout'
import { TaostProvider } from './context/ToastContext'
import ShowToast from './components/ShowToast'


function App() {

  return (
    <TaostProvider>
    <MainLayout>
      <ShowToast />
    </MainLayout>
    </TaostProvider>
  )
}

export default App
