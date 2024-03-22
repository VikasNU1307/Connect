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

const DataTables = () => {
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
    <div>
      {/* <DataTable
        value={posts}
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        dataKey="id"
        paginator
        emptyMessage="No data found."
        className="datatable-responsive"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
      >
        <Column field="userId" sortable header="userId"></Column>
        <Column field="id" sortable header="id"></Column>
        <Column field="title" sortable header="title"></Column>
        <Column field="body" sortable header="body"></Column>
      </DataTable> */}

      <DataTable
        value={posts.slice(0, 6)}
        responsiveLayout="scroll"
        dataKey="id"
        emptyMessage="No data found."
        className="datatable-responsive"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={7}
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
        {/* <Column field="id" header="S.no" className="data__style1"></Column> */}
        <Column field="name" header="Name" className="data__style1"></Column>
        <Column
          field="email"
          header="Email id"
          className="data__style1"
        ></Column>
        <Column
          field="phone"
          header="Phone Number"
          className="data__style1"
        ></Column>
        <Column
          field="address.street"
          header="Address"
          className="data__style1"
        ></Column>
      </DataTable>
    </div>
  );
};

export default DataTables;
