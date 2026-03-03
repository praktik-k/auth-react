import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase";

function App() {

  useEffect(() => {
    const auth = getAuth(app);
    console.log("Auth instance:", auth);
  }, []);

  return (
    <div>
      auth-react
    </div>
  );
}

export default App;
