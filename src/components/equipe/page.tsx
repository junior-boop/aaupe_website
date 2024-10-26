import { useEffect, useState } from "react";
import { client } from "../graphql";
import Member from "../membre";

type Membres = {
    nom: string,
    prenom: string,
    adresseMail: string,
    telephone: string,
    posteResponsabilite: string,
    id: string,
    photo: {
        url: string
    }
}


const getData = async () => {
    const query = `query MyQuery {
  membres {
    nom
    prenom
    adresseMail
    telephone
    posteResponsabilite
    id
    photo {
      url
    }
  }
}`

    const data = (await client.request(query)) as { membres: Membres[] };
    return data;
}

export default function MembresPage() {
    const [membres, setMmbres] = useState<Membres[]>([])

    useEffect(() => {
        async function dataMembre() {
            const data = await getData()
            console.log(data.membres)
            setMmbres(data.membres)
        }

        dataMembre()
    }, [])

    if (membres.length === 0) {
        return (
            <div className='max-w-[1280px] mx-auto'>
                <div className="w-full h-[70dvh] rounded-3xl flex items-center justify-center bg-slate-100 ">
                    <span>-- Aucun membre pour le moment --</span>
                </div>
            </div>
        )
    }
    return (
        <div className='max-w-[1280px] mx-auto px-6 lg:px-0'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-9 py-6 lg:py-0'>
                {
                    membres.map(el => (<Member
                        image={el.photo.url}
                        name={el.nom}
                        surname={el.prenom}
                        role={el.posteResponsabilite}
                    />))
                }
            </div>
        </div>
    )
}