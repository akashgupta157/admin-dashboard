import { Clock, User, IndianRupee, Barcode } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentTransactions = [
  {
    student: "Rahul Sharma",
    id: "STU2024001",
    amount: 150,
    item: "Pancake Meal",
    time: "10:30 AM",
  },
  {
    student: "Priya Patel",
    id: "STU2024002",
    amount: 200,
    item: "Special Thali",
    time: "11:45 AM",
  },
  {
    student: "Amit Singh",
    id: "STU2024003",
    amount: 75,
    item: "Sandwich Combo",
    time: "12:15 PM",
  },
  {
    student: "Neha Gupta",
    id: "STU2024004",
    amount: 300,
    item: "Full Lunch Package",
    time: "1:30 PM",
  },
  {
    student: "Vikram Joshi",
    id: "STU2024005",
    amount: 50,
    item: "Snack Box",
    time: "2:45 PM",
  },
  {
    student: "Sneha Patel",
    id: "STU2024006",
    amount: 100,
    item: "Healthy Breakfast",
    time: "3:15 PM",
  },
  {
    student: "Rajesh Kumar",
    id: "STU2024007",
    amount: 150,
    item: "Pancake Meal",
    time: "4:30 PM",
  },
  {
    student: "Neha Gupta",
    id: "STU2024008",
    amount: 300,
    item: "Full Lunch Package",
    time: "5:30 PM",
  },
  {
    student: "Vikram Joshi",
    id: "STU2024009",
    amount: 50,
    item: "Snack Box",
    time: "6:45 PM",
  },
  {
    student: "Sneha Patel",
    id: "STU2024010",
    amount: 100,
    item: "Healthy Breakfast",
    time: "7:15 PM",
  },
];

function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Student
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <Barcode className="mr-2 h-4 w-4" />
                  ID
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <IndianRupee className="mr-2 h-4 w-4" />
                  Amount
                </div>
              </TableHead>
              <TableHead>Item</TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end">
                  <Clock className="mr-2 h-4 w-4" />
                  Time
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.student}
                </TableCell>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>₹{transaction.amount}</TableCell>
                <TableCell>{transaction.item}</TableCell>
                <TableCell className="text-right">{transaction.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export default RecentTransactions;
