"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/utils/supabase/client";

function Dashboard() {
  const [AllUSERS, setAllUSERS] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const get_all_req = async () => {
    let { data: users, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("Error fetching users requests:", error);
    } else {
      if (!users) {
        console.warn("No users found in the database.");
      } else {
        console.log("Fetched users:", users);
        setAllUSERS(users);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    get_all_req();
  }, []);

  useEffect(() => {
    // console.log("AllUSERS state updated:", AllUSERS);
  }, [AllUSERS]);
  const invoices = [AllUSERS];
  console.log("invoicei", invoices);
  const usersArray = invoices[0];

  // Map through the usersArray
  usersArray.map((user: UserProps) => {
    console.log("User ID:", user.id);
    console.log("User Name:", user.name);
    console.log("User Email:", user.email);
    console.log("User Phone:", user.phone);
    // Add more fields as needed
  });

  return (
    <>
      <div className="flex min-h-screen size-full flex-col items-center justify-between grow">
        <Table className="w-full">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>PHONE</TableHead>
              <TableHead>GENDER</TableHead>
              <TableHead>DOB</TableHead>
              <TableHead>BLOOD_GRP</TableHead>
              <TableHead className="text-right">WEIGHT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersArray.map((user: UserProps) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell className="font-medium">{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.dob}</TableCell>
                <TableCell className="text-[#f53838]">
                  {user.blood_grp}
                </TableCell>

                <TableCell className="text-right">{user.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
