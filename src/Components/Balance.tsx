import { LineChart } from '@mui/x-charts/LineChart';

export interface BalanceData{
    timestamp: string
    localDate: string
    amount: {
        currency: string
        value: number
        stringValue: string
    }
}

interface BalancesProps{
    balances: BalanceData[]
}

export const Balance = ({balances}: BalancesProps) => {
    const balancePerDay = balances.filter((balance, index) => index % 2 === 0);
    return (
    <LineChart
    xAxis={[
      {
        id: 'Years',
        data: balancePerDay.map((balance) => Date.parse(balance.localDate)),
        scaleType: 'time',
      },
    ]}
      series={[
        {
          data: balancePerDay.map((balance) => balance.amount.value),
          showMark: false,
        },
      ]}
      width={600}
      height={400}
      margin={{ left: 100 }}
    />
    )
}