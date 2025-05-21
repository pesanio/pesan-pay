"use client";

import { CustomDataTable } from "@/components/custom-data-table";
import { useDataTable } from "@/hooks/use-data-table";

import { CheckCircle2 } from "lucide-react";
import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

// Define the transaction data type
type Transaction = {
  id: string;
  status: "Success" | "Pending" | "Failed" | "Canceled";
  type: string;
  channel: string;
  account: string;
  amount: string;
  reference: string;
  settlementStatus: string;
  dateCreated: string;
  timeCreated: string;
  webhook: boolean;
};



// Sample data
const data: Transaction[] = [
  {
    id: "1",
    status: "Success",
    type: "Payment",
    channel: "QR Code",
    account: "qris",
    amount: "641.750",
    reference: "ROOM_V3_682d23a77e928922c75703cc",
    settlementStatus: "Pending ETA 23 May 2025, 07:52 AM",
    dateCreated: "21 May 2025,",
    timeCreated: "07:52 AM",
    webhook: true,
  },
];

export default function TransactionsPage() {
  // Define the columns for the data table
  const columns = React.useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        id: "status",
        accessorKey: "status",
        header: () => (
          <div className="flex flex-col">
            <span>Status</span>
          </div>
        ),
        cell: ({ row }) => {
          const status = row.getValue("status") as string;
          return (
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">{status}</span>
            </div>
          );
        },
        meta: {
          label: "Status",
          variant: "select",
          options: [
            { label: "Success", value: "Success" },
            { label: "Pending", value: "Pending" },
            { label: "Failed", value: "Failed" },
            { label: "Canceled", value: "Canceled" },
          ],
        },
        enableColumnFilter: true,
      },
      {
        id: "type",
        accessorKey: "type",
        header: () => (
          <div className="flex flex-col">
            <span>Type</span>
          </div>
        ),
        meta: {
          label: "Type",
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
          variant: "select",
          options: [
            { label: "QR Code", value: "QR Code" },
            { label: "Bank Transfer", value: "Bank Transfer" },
            { label: "Card", value: "Card" },
          ],
        },
        enableColumnFilter: true,
      },
      {
        id: "account",
        accessorKey: "account",
        header: () => (
          <div className="flex flex-col">
            <span>Account</span>
          </div>
        ),
        cell: ({ row }) => {
          const account = row.getValue("account") as string;
          return <div>{account.toUpperCase()}</div>;
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
          const amount = row.getValue("amount") as string;
          return (
            <div className="flex items-center text-green-600">
              <span>IDR</span>
              <span className="ml-1">{amount}</span>
            </div>
          );
        },
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
          const reference = row.getValue("reference") as string;
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
        id: "settlementStatus",
        accessorKey: "settlementStatus",
        header: () => (
          <div className="flex flex-col">
            <span>Settled At</span>
          </div>
        ),
        cell: ({ row }) => {
          const status = row.getValue("settlementStatus") as string;
          return (
            <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              {status}
            </div>
          );
        },
      },
      {
        id: "dateCreated",
        accessorKey: "dateCreated",
        header: () => (
          <div className="flex flex-col">
            <span>Created At</span>
          </div>
        ),
        cell: ({ row }) => {
          const date = row.getValue("dateCreated") as string;
          const time = row.original.timeCreated;
          return (
            <div>
              <div>{date}</div>
              <div className="text-sm text-muted-foreground">{time}</div>
            </div>
          );
        },
        meta: {
          label: "Date Created",
          variant: "date",
        },
        enableColumnFilter: true,
      },
      {
        id: "webhook",
        accessorKey: "webhook",
        header: () => (
          <div className="flex flex-col">
            <span>Webhook</span>
          </div>
        ),
        cell: ({ row }) => {
          const webhook = row.getValue("webhook");
          return webhook ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : null;
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
      sorting: [{ id: "dateCreated", desc: true }],
    },
    getRowId: (row) => row.id,
    enableRowSelection: false,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
      </div>

      <CustomDataTable table={table} />
    </div>
  );
}
