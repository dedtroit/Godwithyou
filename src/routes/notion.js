

import { Client } from '@notionhq/client';
const express = require("express");
// this line initializes the Notion Client using our key
const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });
const databaseId = import.meta.env.VITE_NOTION_API_DATABASE;

/** @type {import('./[id]').RequestHandler} */
exports.newEntryToDatabase = async function (name) {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
     
    },
  });


  return response;

}