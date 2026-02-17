import UploadPicture from "./components/UploadForm";
import ResultDiag from "./components/Result"

function App() {

  return (

    <div>
      
      <header>

      <h1>Nail Scanner App</h1>

      </header>

      <main>

      <h2>Upload a picture of your Nail</h2>
      
      <UploadPicture/>

      <ResultDiag/>

      </main>


      <footer>

        <p>© 2026 Nail AI</p>

      </footer>


    </div>

  )


}

export default App;