import React from "react";

export default function Time({name, value, onChange}) {
    const availableTime = [
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
    ]

    return (
        <>
        <select value={value} name={name} onChange={(e) => onChange(e.target.value)} required>
        <option value="" key={-1}>No TIme Selected</option>
         {availableTime.map((val) => {
            return <option value={val} key={val}>{val}</option>
            })}
         </select>
        </>
    )
}