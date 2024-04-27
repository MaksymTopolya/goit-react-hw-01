import css from "./TransactionHistoryItems.module.css"
export default function TransactionHistoryItems({ elem }) {
    return (
    <tr className={css.tr}>
      <td className={css.td}>{elem.type}</td>
      <td className={css.td}>{elem.amount}</td>
      <td className={css.td}>{elem.currency}</td>
    </tr>
    )
}