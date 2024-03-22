import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import "./datatables.css";
import { Link } from "react-router-dom";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataDriversList = () => {
  const IPostsList: IPosts[] = [];

  const [posts, setPosts]: [IPosts[], (posts: IPosts[]) => void] =
    useState(IPostsList);

  useEffect(() => {
    axios
      .get<IPosts[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  return (
    <div className="">
      <DataTable
        value={posts}
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        dataKey="id"
        paginator
        emptyMessage="No data found."
        className="datatable-responsive bac__col"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={6}
        rowsPerPageOptions={[5, 10, 25]}
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
        {/* <Column field="id"  header="S.no" className="bac__col"></Column> */}
        <Column field="name"header="Name" className="bac__col"></Column>
        <Column field="email"  header="Email" className="bac__col"></Column>
        <Column field="phone"  header="Phone number" className="bac__col"></Column>
        <Column field="address.street"  header="Address" className="bac__col"></Column>
       
        {/* <Column field="address.street" sortable header="Address" className="bac__col"></Column> */}
        
      </DataTable>
    </div>
  );
};

export default DataDriversList;