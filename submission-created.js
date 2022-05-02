const {Client} = require("@notionhq/client")
const notion = new Client({ auth: process.env.secret_LSgDs9sSVKJXvh0tK18LC8AIum7ayaIhRfQ4koVz9Cx});
const form = JSON.parse(event.body).payload.data



exports.handler = async function (event) {
    return {
      statusCode: 200
    }
  }

  const new_row = {
    parent: {
      database_id: process.env.ec053e241b4eda8cd954e139f35f3a,
    },
    properties: {
        Name: {
          title: [
            {
              type: "text",
              text:{
                content: form.name,
              },
            },
          ],
        },
        Prayer: {
            title: [
              {
                type: "text",
                text:{
                  content: form.name,
                },
              },
            ],
          },
        Quatity: {
            number: form.phone,
          },
    },
  }
  
  await notion.pages.create(new_row);