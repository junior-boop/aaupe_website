import { gql } from "graphql-request"
import { useEffect, useState } from "react"
import { client } from "./graphql"

type Notification = {
    evenements: {
        id: string,
        notificationEvenement: {
            id: string,
            slugEvenement: string,
            description: string,
            titreNotification: string
        }
    }[]
}

async function getData() {
    const query = gql/* GraphQL */`
       query MyQuery {
  evenements(first: 10, orderBy: updatedAt_DESC, stage: PUBLISHED) {
    id
    notificationEvenement {
      ... on Notification {
        id
        slugEvenement
        description
        titreNotification
      }
    }
  }
}
    `

    const { evenements } = await client.request(query) as Notification
    return evenements

}

export default function Annonce_Banner() {
    const [notif, setNotif] = useState<{
        id: string,
        slugEvenement: string,
        description: string,
        titreNotification: string
    }>()

    const [Id, setId] = useState<string>('')

    useEffect(() => {
        const loadData = async () => {
            const [{ id, notificationEvenement }] = await getData()

            setId(id)
            setNotif(notificationEvenement)
        }

        loadData()
    }, [])

    return (
        <section className={`banniere bg-[#1a917b] py-6 flex items-center justify-center px-6 lg:px-0`}>
            <div className="w-full max-w-[960px] flex flex-col lg:flex-row justify-between">
                <div className="flex gap-4 flex-1">
                    <div className="w-[50px] aspect-video flex items-center justify-center">
                        <img src="/element_1.webp" alt="" />
                    </div>
                    <div className="text-sm text-white font-inter w-[80%]">
                        <div className="font-bold">{notif?.titreNotification}</div>

                        <div className="text-base">{
                            //@ts-ignore
                            notif?.description.length > 90 ? `${notif?.description.substring(0, 90)}...` : notif?.description}</div>
                    </div>
                </div>

                <a href={`/evenements?slug=${Id}`} className="text-sm pl-[66px] lg:pl-0 pt-2 lg:pt-0 flex items-center text-white">Lire plus  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" /></svg></a>
            </div>
        </section>
    )
}