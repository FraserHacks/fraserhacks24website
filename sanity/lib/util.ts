'use server'
import type { QueryParams } from "sanity";
import { client } from "./client";


export async function sanityFetch<QueryResponse>({ query, params = {} }: { query: string; params?: QueryParams}) {
    return client.fetch<QueryResponse>(query, params)
}