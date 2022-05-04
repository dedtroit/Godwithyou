import { Client } from '@notionhq/client';


// this line initializes the Notion Client using our key
const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY});
const databaseId = import.meta.env.VITE_NOTION_API_DATABASE;

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {


    const response = await notion.databases.query({ database_id: databaseId });
  
    const responseResults = response.results.map((page) => {
      return {
        id: page.id,
        name: page.properties.Name.title[0]?.plain_text,
      };
    });
  
    console.log({responseResults})

    return {
        body: { message: "hello", responseResults }
    };

    return {
        status: 404
    };
}


  
  
  
  
  