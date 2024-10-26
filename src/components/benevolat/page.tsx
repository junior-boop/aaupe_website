import { useState, type FormEventHandler } from "react";
import { SvgSpinners90RingWithBg } from "../icons";

export default function Benevolat_input() {
    return (
        <section className="section-feedback py-[42px] lg:py-24 px-6 lg:px-0 bg" id="contact">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-full md:w-[350px] lg:w-[550px] rounded-xl text-white ">
                        <div className="font-judson font-bold text-4xl lg:text-6xl mb-6">
                            Contactez nous pour devenir bénévole
                        </div>
                        <div>
                            Vous aussi, vous souhaitez vous engagez auprès des enfants et jeunes ?
                            Envoyez votre CV ainsi qu’un courrier présentant le soutien que vous souhaitez apporter à <span className="inline-block px-2 py-1 rounded-md bg-[#0004]">info@aaupe.org.ma</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Feedback_Component />
                    </div>
                </div>
            </div>
        </section>
    )
}

const HYGRAPH_ENDPOINT_URL = `https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clz8cebv500gm07uspzqk3x6d/master`

async function createBenevolat({ name, city, email, message, phone }: { name: string, city: string, email: string, message: string, phone: string }) {
    const endpoint = HYGRAPH_ENDPOINT_URL;

    const createContactMutation = `
        mutation CreateContact($name: String!, $city: String!, $email: String!, $phone: String!, $message: String!) {
            createContact(data: {name: $name, city: $city, email: $email, phone: $phone, message: $message}) {
                 name
        city
        email
        phone
        message
            }
        }
    `;

    const variables = {
        name,
        city,
        email,
        phone,
        message
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MjgzODI3NTQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x6OGNlYnY1MDBnbTA3dXNwenFrM3g2ZC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiNGRkMjU0ZTQtYmE3MS00NGU5LWExNzYtODdmMGVjMDU0MGI2IiwianRpIjoiY20yMGFnc2NrMDBndTA3dzYwMGNqYjFubCJ9.4qN4KHXU24TMmlbu-WgqN8fOZXe49WvNEa0K_VFoc26HNqPX1-6EWMRJoOmqq6TXEduRIdsTojKyNhf0kFvgqqyv50S0bBUWECc03IhRppq-QxcAHzHqbqRpr3vT86qzJRtfE_XmzjDCZGy07HbJp147oeC9xuJTbMFqD_KZj3bQT-EEyabCRsBDtyrCWXmvVz2DHmAFmx_mUEzfMfuOpalzsJWIQ4WQxeBh8qHc-v87_Yhw1wBr2geB4FLhpg_mmazctunMY57yJt37rWbAd2fzVXnFlXOpvUZ6u41SeurPpyUA5rGKfUIocSeR3WvDZMT3G_C5562aIaYoRH-YHE8r2wuWpsPnxX6mkWeXCb_ZM8kchDUvrKvVj-oMHnSsftyt7GbhvXaxz6ID-1iVkWsnmGmJ89uI9Rdld-V8DfXjMdV8MZ5ayVpIDqq3yG1oPvIz9y09IkyVhUVNoiXTV29GezCFIk9ZTWqHsBJHapyHXr80su2bCeAwrZe09Iy32y195W60at9JZLRlS4rJ7UHFbjfrOTbth6c1LN8P6eybxR14hsfJ9Gzvvy4qBw6n6PxYkA7V_ulzm0AYURrkUNdqtG4gjbrtMc2i3Xwf3Mu3BkI-1eQPKSSRLIZdm71bwEqCuioRZcuAVz3_kSFf6Hw_y9kzipa_r72ioOeoFm0'
            },
            body: JSON.stringify({
                query: createContactMutation,
                variables
            })
        });

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error creating benevolat:', error);
        throw error;
    }
}

function Feedback_Component() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [send, setSend] = useState(false)

    const handlePostRequest: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setSend(true)
        const request = await createBenevolat({
            name, email, message, city, phone
        })

        console.log(request)
        setTimeout(() => {
            setSend(false)
        }, 1000)
    }
    return (
        <form className="bg-white w-full p-4 md:p-6 rounded-xl" onSubmit={handlePostRequest}>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Nom et Prénom*</label>
                <input onChange={({ target }) => setName(target.value)} type="text" className="border block w-full py-2 text-xl px-4 rounded-3xl" name="name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Adresse E-mail*</label>
                <input onChange={({ target }) => setEmail(target.value)} type="email" className="border block w-full py-2 text-xl px-4 rounded-3xl" name="name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Téléphone</label>
                <input onChange={({ target }) => setCity(target.value)} type="text" className="border block w-full py-2 text-xl px-4 rounded-3xl" name="name" />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Pays | Ville</label>
                <input onChange={({ target }) => setCity(target.value)} type="text" className="border block w-full py-2 text-xl px-4 rounded-3xl" name="name" />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Message *</label>
                <textarea onChange={({ target }) => setMessage(target.value)} className="w-full p-4 resize-none h-[200px] border rounded-2xl text-xl" required></textarea>
            </div>
            <button type="submit" className="w-full flex justify-center py-3 rounded-xl bg-yellow-400 text-orange-900 font-bold" disabled={send}>
                {
                    send
                        ? (<div className="flex gap-4 items-center">
                            <SvgSpinners90RingWithBg className="h-5 w-5" />
                            en cours d'envoie...
                        </div>)
                        : <>Envoyer</>
                }
            </button>
        </form>
    )
}

// https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clz8cebv500gm07uspzqk3x6d/master