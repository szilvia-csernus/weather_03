import React from "react";
import styles from './Table.module.scss';


export function Table({headRow, rowsOfData, uniqueStyles}) {

    return (
        <table className={styles.table + " " + uniqueStyles}>
            <thead>
                <tr key={0}>
                    {headRow.map((data, key) => {
                        return (
                            <td key={key}>{data}</td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {rowsOfData.map((row, key) => {
                    return (
                        <tr key={key}>
                            {row.map((data, key) => {
                                return (
                                    <td key={key}>{data}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
