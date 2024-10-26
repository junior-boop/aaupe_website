import { useEffect, useState } from "react";
import { Entete_page_3 } from "../entete";
import Section from "../section";
import { Element } from "./components";
import type { Node_Query, Query } from "../graphql-type";
import { gql } from "graphql-request";
import { client } from "../graphql";
import Loader from "../Loader";



async function getData() {
  const query = gql`
  query MyQuery {
    articlesConnection(first: 20, stage: PUBLISHED, orderBy: updatedAt_DESC) {
      edges {
        node {
          id
          title
          titleSlug
          content {
            raw
          }
          publishedAt
          picture {
            size
            url
            width
            stage
          }
        }
      }
    }
  }
`;
  const data = (await client.request(query)) as Query;
  return data;
}

export default function Actualites() {
  const [result, setresult] = useState<{ node: Node_Query }[]>([])

  useEffect(() => {
    async function loadData() {
      const { articlesConnection } = await getData() as Query;
      setresult(articlesConnection.edges);
    }



    loadData();
  }, [])
  return (
    <>
      <Entete_page_3 titre="Actualités" />
      <Section>

        {
          result.length === 0
            ? <Loader />
            : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  result.map((el, key) => <Element data={el.node} key={key} />)
                }
              </div>
            )
        }

      </Section>
    </>
  )
}