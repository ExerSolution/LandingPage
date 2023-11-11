"use client";

import { useQuery } from "react-query";

export default function HOME() {
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
    return data;
  });
  const dataArray = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    // Add more data as needed
  ];
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
              dataArray.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}