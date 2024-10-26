import { useEffect, useState } from "react";
import { Entete_page_3 } from "../entete";
import Section from "../section";
import type { Node_Query, Query } from "../graphql-type";
import { gql } from "graphql-request";
import { client } from "../graphql";
import Loader from "../Loader";
import { RiArrowRightLine, RiShieldCheckLine } from "../icons";
import { PAYS } from "./AllCountry";

export default function DonPage() {

    const [contryIndice, setCountryindice] = useState('---')

    return (
        <>
            <Entete_page_3 titre="Faire un Don" />
            <Section>
                <div className="max-w-[1080px] w-full mx-auto lg:p-[56px] lg:border">
                    <form action="">
                        <div className="lg:px-6 font-bold text-2xl mb-4">
                            Choisissez le montant que vous souhaitez donner :
                        </div>
                        <div className="lg:px-6 flex  lg:items-center gap-4 flex-col lg:flex-row mb-4 flex-wrap">
                            <Radio name="don" value="100" label="100MAD" />
                            <Radio name="don" value="250" label="250MAD" />
                            <Radio name="don" value="500" label="500MAD" />
                            <Radio name="don" value="1000" label="1000MAD" />

                        </div>
                        <div className="lg:px-6 mb-4">
                            <input type="text" name="don" className="border w-full px-4 py-2 text-lg rounded-full" placeholder="Saisissez le montant de votre choix" />
                        </div>

                        <div className="lg:px-6 font-bold text-2xl my-6">
                            Saisissez vos coordonnées :
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="name">Nom et Prénom :</label>
                                <input type="text" name="name" className="bg-slate-100 border w-full px-4 py-2 text-lg rounded-full" />
                            </div>
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="societe">Société :</label>
                                <input type="text" name="societe" className="bg-slate-100 border w-full px-4 py-2 text-lg rounded-full" />
                            </div>
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="adresse">Adresse :</label>
                                <input type="text" name="adresse" className="bg-slate-100 border w-full px-4 py-2 text-lg rounded-full" />
                            </div>
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="ville">Ville :</label>
                                <input type="text" name="ville" className="bg-slate-100 border w-full px-4 py-2 text-lg rounded-full" />
                            </div>
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="code">Code Postal :</label>
                                <input type="text" name="code" className="bg-slate-100 border w-full px-4 py-2 text-lg rounded-full" />
                            </div>
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="pays">Pays :</label>
                                <select name="pays" className="bg-slate-100 border w-full px-4 py-2 text-lg rounded-full"
                                    onChange={(e) => {
                                        const pays = PAYS.filter(el => el.name === e.target.value)
                                        setCountryindice(`+${pays[0].callingCodes[0]}`)
                                    }}>
                                    <option value="">Choisir un Pays</option>
                                    {
                                        PAYS.map(el => <option value={el.name} key={el.name}>{el.name}, {el.alpha3Code}</option>)
                                    }
                                </select>
                            </div>
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="email">E-Mail :</label>
                                <input type="text" name="email" className="bg-slate-100 border w-full px-4 py-2 text-lg rounded-full" />
                            </div>
                            <div className="lg:px-6 mb-4">
                                <label htmlFor="tel">Téléphone :</label>
                                <div className="flex gap-2 items-center">
                                    <div className="w-[60px] text-center">
                                        {contryIndice}
                                    </div>
                                    <input type="text" name="tel" className="bg-slate-100 border flex-1 px-4 py-2 text-lg rounded-full" />
                                </div>
                            </div>

                        </div>

                        <div className="lg:px-6">
                            <button className="px-6 py-2 bg-yellow-400 text-orange-900 font-bold rounded-full flex items-center gap-4">Soumettre <RiArrowRightLine className="h-6 w-6" /></button>
                        </div>
                    </form>


                </div>

                <div className="max-w-[600px] w-full mx-auto px-6 lg:px-0 text-center mt-16 ">
                    <div className="mb-10 flex items-center justify-center">
                        <RiShieldCheckLine className="w-20 h-20" />
                    </div>
                    A.A.U.P.E à Casablanca
                    traite vos données personnelles en toute confidentialité: Vos données sont cryptées et transférées via une liaison SSL. Notre système de paiement est sécurisé par 3-D Secure (MasterCard Secure Code et Verified by VISA)
                </div>
            </Section>
        </>
    )
}

interface RadioProp {
    name: string,
    value: string,
    label: string,
}

function Radio({ name, value, label }: RadioProp) {
    return (
        <div className="radio">
            <input type="radio" name={name} value={value} className="input-radio" />
            <label htmlFor={name} className="label-radio">{label}</label>
        </div>
    )
}