import { Client } from '@notionhq/client';
import { response } from 'express';
// Require the Client object from the Notion JS SDK
const {VITE_NOTION_API_DATABASE, VITE_NOTION_API_KEY} = process.env;
const notion = new Client({ auth: VITE_NOTION_API_KEY });
console.log("api connected")

exports.handler = async function (event, context) {
    try{
        const body = JSON.parse(event.body)
    
        const response = await notion.pages.create({
            parent: {
                database_id: VITE_NOTION_API_DATABASE,
            },
            properties: {
                "Name": {
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "hi"
                            }
                        }
                    ]
                },

                "Prayer": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "dsacd"
                            },
                        },
                    ],
                },

                "Phone": {
                    "phone_number": "hi"
                }
            }

        });

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
    }catch (e){
        console.error(e);
        return{ statusCode: 500,
        body: e.toString()}
    }
};


    



