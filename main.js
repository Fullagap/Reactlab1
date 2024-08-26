function App() {
    return (
        <div>
            <h1>Lab01</h1>
            <h1 style = {st1}>Wichasith Chaisrithong</h1>
            <p>age : {new Date().getFullYear()-2001}</p>
            <p>{new Date().getFullYear()-2001} year {new Date().getMonth()-4} month {new Date().getDate()-26}  day</p>

        </div>
    )
}

const st1 = {color : "red" , backgroundColor : "pink"}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App / >)