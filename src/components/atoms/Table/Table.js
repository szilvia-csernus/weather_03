import React from "react";

export function Table({tableWidth, tableTitle, tableBody}) {
    return (
        <table>
            <thead>
                <tr>
                    <td colSpan={tableWidth}><h2 className="subtitle">{tableTitle}</h2></td>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    )
}
