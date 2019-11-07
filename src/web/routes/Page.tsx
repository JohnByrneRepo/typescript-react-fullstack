import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import path from "path";
import pageAData from "../pageData/page-a-data";
import { User } from "../frontend/components/user";
import { Email } from "../frontend/components/email";

export const Page = (props: { match: { params: { page: string } } }) => {
  const [pageData, setPageData] = useState({
    path: "",
    linkTitle: "",
    pageTitle: "",
    pageDescription: "",
    table: {
      apiEndpoint: "",
      columns: [
        { title: "", data: [] },
        {
          title: "",
          data: []
        }
      ]
    }
  });
  let page = props.match.params.page;

  if (page === undefined) {
    page = "page-a";
  }

  if (pageData.path !== page) {
    async function fetchData() {
      try {
        const response = await fetch(`/get-page?page=${page}`);
        let data = await response.json();
        setPageData(data);
      } catch (err) {
        console.log("error");
      }
    }
    fetchData();
  }

  const data = {
    names: pageData.table.columns[0].data,
    emails: pageData.table.columns[1].data
  };

  const columns = ["Name", "Email"];

  return (
    <div className="Page">
      <div className="PageTitle">{pageData.pageTitle}</div>
      <div className="PageDescription">{pageData.pageDescription}</div>
      <table>
        <thead>
          {pageData.table.columns.map(column => {
            <tr>{column.title}</tr>;
          })}
        </thead>
        <tbody>
          {pageData.table.columns[0].data.map(rows => {
            {
              columns.map((column, index) => {
                <tr>
                  <td>
                    <User iamge="" name={data.names[index]} />
                  </td>
                  <td>
                    <Email name={data.emails[index]} />
                  </td>
                </tr>;
              });
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
