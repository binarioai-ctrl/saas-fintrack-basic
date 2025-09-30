import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { TransactionList } from '@/components/fintech/transaction-list'

export default function TransactionsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Transacciones"
        text="Gestiona y visualiza todas tus transacciones financieras"
      />
      <TransactionList />
    </DashboardShell>
  )
}