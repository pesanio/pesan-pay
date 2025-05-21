"use client";

import { useDataTable } from "@/hooks/use-data-table";
import { CustomDataTable } from "@/components/custom-data-table";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

// Define the balance transaction data type
type BalanceTransaction = {
  id: string;
  completedDate: string;
  completedTime: string;
  transactionType: string;
  channel: string;
  reference: string;
  amount: string;
  amountValue: number;
  balance: string;
};

// Sample data
const data: BalanceTransaction[] = [
  {
    id: "1",
    completedDate: "21 May 2025,",
    completedTime: "08:39 AM",
    transactionType: "QR Code VAT",
    channel: "QRIS",
    reference: "ariase-56b5b5987a0e435a-892164c9b4e7d81f",
    amount: "- 96",
    amountValue: -96,
    balance: "481.557",
  },
  {
    id: "2",
    completedDate: "21 May 2025,",
    completedTime: "08:39 AM",
    transactionType: "QR Code Fee",
    channel: "QRIS",
    reference: "ariase-56b5b5987a0e435a-892164c9b4e7d81f",
    amount: "- 875",
    amountValue: -875,
    balance: "481.653",
  },
  {
    id: "3",
    completedDate: "21 May 2025,",
    completedTime: "08:39 AM",
    transactionType: "QR Code VAT",
    channel: "QRIS",
    reference: "ariase-56b5b5987a0e435a-892164c9b4e7d81f",
    amount: "- 242",
    amountValue: -242,
    balance: "482.528",
  },
  {
    id: "4",
    completedDate: "21 May 2025,",
    completedTime: "08:39 AM",
    transactionType: "QR Code Fee",
    channel: "QRIS",
    reference: "ariase-56b5b5987a0e435a-892164c9b4e7d81f",
    amount: "- 2.205",
    amountValue: -2205,
    balance: "482.770",
  },
  {
    id: "5",
    completedDate: "21 May 2025,",
    completedTime: "08:39 AM",
    transactionType: "QR Code Payment",
    channel: "QRIS",
    reference: "ariase-56b5b5987a0e435a-892164c9b4e7d81f",
    amount: "+ 350.000",
    amountValue: 350000,
    balance: "484.975",
  },
];

// Define the pending transaction data type
type PendingTransaction = {
  id: string;
  dateCreated: string;
  timeCreated: string;
  settlementDate: string;
  settlementTime: string;
  transactionType: string;
  channel: string;
  reference: string;
  amount: string;
  fee: string;
  netAmount: string;
};

// Sample data for pending transactions
const pendingData: PendingTransaction[] = [
  {
    id: "1",
    dateCreated: "21 May 2025,",
    timeCreated: "08:26 AM",
    settlementDate: "23 May 2025,",
    settlementTime: "08:26 AM",
    transactionType: "PAYMENT",
    channel: "QRIS",
    reference: "NANIA-21395ca7-8719-4cff-91ce-d47451f6721a",
    amount: "25.000",
    fee: "-",
    netAmount: "25.000",
  },
  {
    id: "2",
    dateCreated: "21 May 2025,",
    timeCreated: "07:52 AM",
    settlementDate: "23 May 2025,",
    settlementTime: "07:52 AM",
    transactionType: "PAYMENT",
    channel: "QRIS",
    reference: "ROOM_V3_682d23a77e928922c75703cc",
    amount: "641.750",
    fee: "-",
    netAmount: "641.750",
  },
];

function PendingTransactionsTable() {
  // Define the columns for the pending transactions table
  const columns = React.useMemo<ColumnDef<PendingTransaction>[]>(
    () => [
      {
        id: "dateCreated",
        accessorKey: "dateCreated",
        header: () => (
          <div className="flex flex-col">
            <span>Created At</span>
            <span className="text-gray-400 text-xs">(GMT +7)</span>
          </div>
        ),
        cell: ({ row }) => {
          const date = row.getValue("dateCreated");
          const time = row.original.timeCreated;
          return (
            <div>
              <div>{date}</div>
              <div className="text-sm text-muted-foreground">{time}</div>
            </div>
          );
        },
      },
      {
        id: "settlementDate",
        accessorKey: "settlementDate",
        header: () => (
          <div className="flex flex-col">
            <span>Settled At</span>
            <span className="text-gray-400 text-xs">(GMT +7)</span>
          </div>
        ),
        cell: ({ row }) => {
          const date = row.getValue("settlementDate");
          const time = row.original.settlementTime;
          return (
            <div>
              <div>{date}</div>
              <div className="text-sm text-muted-foreground">{time}</div>
            </div>
          );
        },
      },
      {
        id: "transactionType",
        accessorKey: "transactionType",
        header: () => (
          <div className="flex flex-col">
            <span>Transaction Type</span>
          </div>
        ),
      },
      {
        id: "channel",
        accessorKey: "channel",
        header: () => (
          <div className="flex flex-col">
            <span>Channel</span>
          </div>
        ),
      },
      {
        id: "reference",
        accessorKey: "reference",
        header: () => (
          <div className="flex flex-col">
            <span>Reference</span>
          </div>
        ),
        cell: ({ row }) => {
          const reference = row.getValue("reference");
          return (
            <div className="max-w-[200px] truncate">
              {reference}
            </div>
          );
        },
      },
      {
        id: "amount",
        accessorKey: "amount",
        header: () => (
          <div className="flex flex-col">
            <span>Amount</span>
          </div>
        ),
        cell: ({ row }) => {
          const amount = row.getValue("amount");
          return (
            <div>
              <span>IDR</span> <span>{amount}</span>
            </div>
          );
        },
      },
      {
        id: "fee",
        accessorKey: "fee",
        header: () => (
          <div className="flex flex-col">
            <span>Fee</span>
          </div>
        ),
      },
      {
        id: "netAmount",
        accessorKey: "netAmount",
        header: () => (
          <div className="flex flex-col">
            <span>Net Amount</span>
          </div>
        ),
        cell: ({ row }) => {
          const netAmount = row.getValue("netAmount");
          return (
            <div>
              <span>IDR</span> <span>{netAmount}</span>
            </div>
          );
        },
      },

    ],
    []
  );

  const { table } = useDataTable({
    data: pendingData,
    columns,
    pageCount: 1,
    initialState: {
      sorting: [{ id: "dateCreated", desc: true }],
    },
    getRowId: (row) => row.id,
    enableRowSelection: false,
  });

  return <CustomDataTable table={table} />;
}

export default function BalancePage() {
  // Define the columns for the data table
  const columns = React.useMemo<ColumnDef<BalanceTransaction>[]>(
    () => [
      {
        id: "completedDate",
        accessorKey: "completedDate",
        header: () => (
          <div className="flex flex-col">
            <span>Settled At</span>
            <span className="text-gray-400 text-xs">(GMT +7)</span>
          </div>
        ),
        cell: ({ row }) => {
          const date = row.getValue("completedDate");
          const time = row.original.completedTime;
          return (
            <div>
              <div>{date}</div>
              <div className="text-sm text-muted-foreground">{time}</div>
            </div>
          );
        },
        meta: {
          label: "Completed Date",
          variant: "date",
        },
        enableColumnFilter: true,
      },
      {
        id: "transactionType",
        accessorKey: "transactionType",
        header: () => (
          <div className="flex flex-col">
            <span>Transaction Type</span>
          </div>
        ),
        cell: ({ row }) => {
          const type = row.getValue("transactionType");
          return <div>{type}</div>;
        },
        meta: {
          label: "Transaction Type",
          variant: "text",
        },
        enableColumnFilter: true,
      },
      {
        id: "channel",
        accessorKey: "channel",
        header: () => (
          <div className="flex flex-col">
            <span>Channel</span>
          </div>
        ),
        meta: {
          label: "Channel",
          variant: "text",
        },
        enableColumnFilter: true,
      },
      {
        id: "reference",
        accessorKey: "reference",
        header: () => (
          <div className="flex flex-col">
            <span>Reference</span>
          </div>
        ),
        cell: ({ row }) => {
          const reference = row.getValue("reference");
          return (
            <div className="max-w-[200px] truncate">
              {reference}
            </div>
          );
        },
        meta: {
          label: "Reference",
          variant: "text",
        },
        enableColumnFilter: true,
      },
      {
        id: "amount",
        accessorKey: "amount",
        header: () => (
          <div className="flex flex-col">
            <span>Amount</span>
          </div>
        ),
        cell: ({ row }) => {
          const amount = row.getValue("amount") as string;
          const amountValue = row.original.amountValue;
          const textColor = amountValue >= 0 ? "text-green-600" : "text-red-600";

          return (
            <div className={`${textColor}`}>
              <span>IDR</span> <span>{amount}</span>
            </div>
          );
        },
        meta: {
          label: "Amount",
          variant: "text",
        },
        enableColumnFilter: true,
      },
      {
        id: "balance",
        accessorKey: "balance",
        header: () => (
          <div className="flex flex-col">
            <span>Balance</span>
          </div>
        ),
        cell: ({ row }) => {
          const balance = row.getValue("balance");
          return (
            <div>
              <span>IDR</span> <span>{balance}</span>
            </div>
          );
        },
      },
    ],
    []
  );

  const { table } = useDataTable({
    data,
    columns,
    pageCount: 1,
    initialState: {
      sorting: [{ id: "completedDate", desc: true }],
    },
    getRowId: (row) => row.id,
    enableRowSelection: false,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Balance</h1>
      </div>

      <Card className="shadow-sm">
        <CardContent className="p-8">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-gray-700">Available Balance</h2>
              <Button variant="outline" className="border-gray-200 text-gray-700 font-medium">
                Withdraw
              </Button>
            </div>

            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">IDR 1.988</span>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Pending</span>
                <span className="text-lg font-medium text-gray-700">IDR 0</span>
              </div>
              <div className="h-10 border-l border-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Total</span>
                <span className="text-lg font-medium text-gray-700">IDR 1.988</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="balance-history">
        <TabsList>
          <TabsTrigger value="balance-history">Balance History</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="balance-history" className="mt-4">
          <CustomDataTable table={table} />
        </TabsContent>

        <TabsContent value="pending" className="mt-4">
          <PendingTransactionsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
