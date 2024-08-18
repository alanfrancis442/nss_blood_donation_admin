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
  const [AllUSERS, setAllUSERS] = useState<RequestProps[]>([]);
  const [loading, setLoading] = useState(true);
  const get_all_req = async () => {
    let { data: blood_requests, error } = await supabase
      .from("blood_request")
      .select("*");

    if (error) {
      console.error("Error fetching users requests:", error);
    } else {
      if (!blood_requests) {
        console.warn("No blood_requests found in the database.");
      } else {
        // console.log("Fetched blood_requests:", blood_requests);
        setAllUSERS(blood_requests);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    get_all_req();
  }, []);

  //   useEffect(() => {
  //     // console.log("AllUSERS state updated:", AllUSERS);
  //   }, [AllUSERS]);
  const invoices = [AllUSERS];
  const usersArray = invoices[0];

  // Map through the usersArray
  usersArray.map((user: RequestProps) => {
    // Add more fields as needed
  });

  return (
    <>
      <div className="flex min-h-screen size-full flex-col items-center justify-between grow">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="">#</TableHead>
              <TableHead className="">NAME</TableHead>
              <TableHead>BLOOD GROUP</TableHead>
              <TableHead>AGE</TableHead>
              <TableHead>GENDER</TableHead>
              <TableHead>UNITS</TableHead>
              <TableHead>HOSPITAL</TableHead>
              <TableHead>BY-STANDER</TableHead>
              <TableHead>PHONE</TableHead>
              <TableHead className="text-right">SEND TO</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersArray.map((user: RequestProps, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell className="font-medium text-[#e63535]">
                  {user.blood_group}
                </TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.units}</TableCell>
                <TableCell>{user.hospital_name}</TableCell>
                <TableCell>{user.bystander}</TableCell>
                <TableCell>{user.phone}</TableCell>

                <TableCell className="text-right">{user.send_to}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
