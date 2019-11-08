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

  // const headerComponents = generateHeader()
  return (
    <div className="Page">
      <div className="PageTitle">{pageData.pageTitle}</div>
      <div className="PageDescription">{pageData.pageDescription}</div>
      <table>
        <thead>
          <tr>
            {pageData.table.columns.map(column => {
              return <td>{column.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {pageData.table.columns[0].data.map((item, index) => {
            return (
              <tr>
                <td>
                  <User image="" name={data.names[index]} />
                </td>
                <td>
                  <Email email={data.emails[index]} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
