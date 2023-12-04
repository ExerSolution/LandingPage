"use client";

import { useEffect } from "react";
import { useQuery } from "react-query";
export default function page() {
  const { isLoading, data, isFetching } = useQuery("getPayment", async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let response = await fetch("/api/get/userlist", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    return data;
  });
  
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-3/4 table-zebra mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {isLoading || isFetching ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              data.data.map((element: any) => {
                return (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.username}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
