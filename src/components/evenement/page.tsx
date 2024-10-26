import { gql } from "graphql-request"
import { useEffect, useState } from "react"
import { client } from "../graphql"
import moment from "moment";
import { Entete_page_3 } from "../entete";


// Type for the notification sub-object
interface NotificationEvenement {
    id: string;
    slugEvenement: string;
    titreEvenement: string;
    titreNotification: string;
}

// Type for image who is used on the event
interface Image {
    url: string
}

// Type for the user who created the event
interface User {
    name: string;
}

// Main event interface
interface Evenement {
    createdAt: string;
    createdBy: User;
    dataHeureEvenement: string;
    dateEvenement: string;
    imagesFlyers: Image;
    notificationEvenement: NotificationEvenement;
    sousTitreEvenement: string;
    titreEvenement: string;
}

async function getData(Id: string) {
    const query = gql/* GraphQL */`query MyQuery {
        evenement(where: {id: "${Id}"}) {
          createdAt
          createdBy {
            name
          }
          sousTitreEvenement
          titreEvenement
          imagesFlyers {
            url
        }
          notificationEvenement {
            ... on Notification {
              id
              titreEvenement
              slugEvenement
              titreNotification
            }
          }
          dataHeureEvenement
          dateEvenement
        }
      }`


    const { evenement } = await client.request(query) as { evenement: Evenement }
    console.log(evenement)
    return evenement

}

export default function EvenementPage() {
    // const query = 

    const [data, setData] = useState<Evenement>()

    useEffect(() => {
        const loadData = async () => {
            const url_next = new URLSearchParams(window.location.search)
            const txt = url_next.get('slug') as string

            const result = await getData(txt)
            setData(result)
        }

        loadData()

    }, [])


    return (
        <>
            <div className='h-[72px] lg:h-[86px]'></div>
            <Entete_page_3 titre="Evènement" />
            <div className='max-w-[720px] w-full px-6 lg:px-0 mx-auto my-14 lg:my-24'>
                <div className='text-4xl lg:text-6xl font-judson font-bold text-center mb-3'>
                    {data?.titreEvenement}
                </div>
                <div className='font-inter text-2xl lg:text-3xl text-center mb-3'>
                    {data?.sousTitreEvenement}
                </div>
                <div className='bg-slate-100 px-4 lg:px-6 py-3 lg:py-6 rounded-xl mb-9'>
                    <div>Date : <b>{moment(data?.dataHeureEvenement).format('DD MM YYYY')}</b></div>
                </div>
                <div className='mt-6'>
                    <img
                        src={data?.imagesFlyers.url}
                        alt='programme de la sensibilisation du 27 aout 2024 en Arabe'
                    />
                </div>
            </div>


        </>
    )
}