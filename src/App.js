import Loading from './components/loading'
import React, { useEffect, useState } from "react";

import Main from './Main'


function App () {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.setTimeout(() => { setLoading(false) }, 1500)
    })
    return (
        <div>
            {loading ? <Loading /> : <Main />}
        </div>

    );
}

export default App;