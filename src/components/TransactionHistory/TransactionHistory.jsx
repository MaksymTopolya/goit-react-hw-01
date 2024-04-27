import TransactionHistoryItems from "../TransactionsHistoryItems/TransactionHistoryItems"
import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryItems key={item.id} elem={item} />
        ))}
      </tbody>
    </table>
  );
}
