import styles from '../styles/App.module.css'
import Main from '../layout/main'
import TitleBar from '../layout/titlebar'
import { useAppLogic } from '../lib/useAppLogic'

function App (): React.ReactElement {
  const {
    Accounts,
    mainWindows,
    setMainWindows,
    accountOn,
    crearWindow,
    isOpenWindow,
    closewindow
  } = useAppLogic()

  return (
    <div className={styles.App}>
      <TitleBar
        accountOn={accountOn}
        mainWindows={mainWindows}
        setMainWindows={setMainWindows}
        crearWindow={crearWindow}
      />
      <Main
        accounts={Accounts}
        mainWindows={mainWindows}
        layoutOn={accountOn}
        setMainWindows={setMainWindows}
        crearWindow={crearWindow}
        closewindow={closewindow}
        isOpenWindow={isOpenWindow}
      />
    </div>
  )
}
export default App
