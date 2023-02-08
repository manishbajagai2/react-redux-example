import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/actions"

function App() {
    const amount = useSelector((state) => state.account)
    // console.log(amount)

    const dispatch = useDispatch()

    const { depositMoney, withdrawMoney } = bindActionCreators(
        actionCreators,
        dispatch
    )

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                margin: "1rem",
            }}
        >
            <div>The amount in the bank is {amount}</div>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => depositMoney(1000)}>Deposit</button>
                <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
            </div>
        </div>
    )
}

export default App
