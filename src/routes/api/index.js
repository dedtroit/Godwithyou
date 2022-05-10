import { Client } from '@notionhq/client';
// Require the Client object from the Notion JS SDK


export const post = async (request) => {
    const formBody = JSON.parse(request.body)
    var name = formBody.name
    const prayer = formBody.prayer
    var phone = formBody.phone

    if (name == null) {
        name = " "
    }
    if (phone == null) {
        phone = " "
    }
    exports.handler = async function (event) {
        const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });
        const databaseId = import.meta.env.VITE_NOTION_API_DATABASE;
        (async () => {
            const response = await notion.pages.create({
                parent: {
                    database_id: databaseId,
                },
                properties: {
                    "Name": {
                        "title": [
                            {
                                "type": "text",
                                "text": {
                                    "content": name
                                }
                            }
                        ]
                    },

                    "Prayer": {
                        "rich_text": [
                            {
                                "type": "text",
                                "text": {
                                    "content": prayer
                                },
                            },
                        ],
                    },

                    "Phone": {
                        "phone_number": phone
                    }
                }

            });
            console.log(response);
        })();
    }
    return{
        statusCode: 200
    }

}





