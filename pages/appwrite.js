import { Client, Databases, ID} from "appwrite";

const client = new Client()
client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('Shivam24');    

    const databases = new Databases(client);
    const promise = databases.createDocument( "648b118fe9d4b7a44969", "648b11ac911b3b5d35fc", ID.unique(),
        {
            Title : "Social Impact Documentary", Description: "Support individuals creating impactful documentaries that shed light on local social issues."
        }
        );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });