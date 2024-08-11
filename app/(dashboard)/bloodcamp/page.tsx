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
  const [AllUSERS, setAllUSERS] = useState<CampProps[]>([]);
  const [loading, setLoading] = useState(true);
  const get_all_req = async () => {
    let { data: certificate_table, error } = await supabase
      .from("certificate_table")
      .select("*");

    if (error) {
      console.error("Error fetching users requests:", error);
    } else {
      if (!certificate_table) {
        console.warn("No certificate_table found in the database.");
      } else {
        // console.log("Fetched certificate_table:", certificate_table);
        setAllUSERS(certificate_table);
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
  return (
    <>
      <div className="flex min-h-screen size-full flex-col items-center justify-between grow">
        <Table className="w-full">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">NAME</TableHead>
              <TableHead className="">CREATED_AT</TableHead>
              <TableHead>YEAR OF STUDY</TableHead>
              <TableHead>BRANCH</TableHead>
              <TableHead>DATE</TableHead>

              <TableHead className="text-right">EMAIL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersArray.map((user: CampProps) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell className="font-medium">{user.created_at}</TableCell>
                <TableCell className="font-medium ">
                  {user.year_study}
                </TableCell>
                <TableCell>{user.branch}</TableCell>
                <TableCell>{user.date}</TableCell>

                <TableCell className="text-right">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
