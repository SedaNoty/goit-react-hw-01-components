import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th className={css.column_heading}>Type</th>
            <th className={css.column_heading}>Amount</th>
            <th className={css.column_heading}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.element} key={id}>
              <td className={css.column_data}>{type}</td>
              <td className={css.column_data}>{amount}</td>
              <td className={css.column_data}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default TransactionHistory;