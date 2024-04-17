'use server'
import type { QueryParams } from "sanity";
import { client } from "./client";


export async function sanityFetch<QueryResponse>({ query, params = {}, options = {} }: { query: string; params?: QueryParams; options?: any}) {
    return client.fetch<QueryResponse>(query, params, options)
}