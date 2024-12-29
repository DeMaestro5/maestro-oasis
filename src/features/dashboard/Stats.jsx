import { formatCurrency } from '../../utils/helpers';
import Stat from './Stat';
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';

function Stats({ bookings, confirmedStays, cabinCounts, numDays }) {
  //1)
  const numBookings = bookings.length;

  //2)
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //3)
  const checkIns = confirmedStays.length;

  //4)
  //number of checked in nights / all available nights (num days * cabins)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCounts);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title='Total Bookings'
        value={numBookings}
        color='blue'
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title='Sales'
        value={formatCurrency(sales)}
        color='green'
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title='Check-ins'
        value={checkIns}
        color='indigo'
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title='Occupancy rate'
        value={Math.round(occupation * 100) + '%'}
        color='yellow'
      />
    </>
  );
}

export default Stats;
