import React, {useContext} from "react"
import {ContextApp} from "./reducerApp"

const toTimeStamp = (date) => +new Date(date.split(".").reverse().join("."))

function ListTasks() {
    const {state} = useContext(ContextApp)
    const {plan: {tasks = [], goal}} = state
    const listDateStart = tasks.map((el) => toTimeStamp(el.date.start))
    const listDateEnd = tasks.map((el) => toTimeStamp(el.date.end))
    const thead = [...new Set([...listDateStart, ...listDateEnd].sort((a, b) => b - a))].reverse()
    
    return (
        <div style={{textAlign: "center"}}>
        <h2>{goal.name}</h2>
        <p>{goal.description}</p>
        <table className="tableListTasks">
            <thead>
                <tr>
                {thead.map((el, i) => <th key={i}>{new Date(el).toLocaleDateString()}</th>)}
                </tr>
            </thead>
            <tbody>
                {tasks.map((el, i) => {
                    const listTd = thead.map((td) => {
                        if(toTimeStamp(el.date.start) <= td && toTimeStamp(el.date.end) >= td) {
                            return true
                        }
                        return false
                    })
                    let list = []
                    listTd.forEach(e => {
                        if(!e) list.push(0)
                        if(e) {
                            if(!list.filter(f => f).length) {
                                list.push(listTd.filter(f => f).length)
                            }
                        }
                    })
                    // console.log(list)
                    return <tr key={i}>
                        {list.map((td, idTD) => {
                            if(td)  return <td key={idTD} colSpan={td} style={{backgroundColor: "rgb(204 204 204 / 37%)"}}>
                                <small>{el.date.start}-{el.date.end}</small>
                                <strong>{el.name}</strong>
                                <small><i>{el.description}</i></small>
                                </td>
                            return <td key={idTD}/>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    );
}

export default ListTasks;