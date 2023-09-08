import React, { useEffect, useState } from 'react'
import { viewAuthor } from '../utils/AuthorApi'

import { useQuery } from "@tanstack/react-query"

export const useAuthor = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        viewAuthor().then((res):any => {
            setAuthors(res)
        })
    }, [])

    return authors
}


export const useTanAuthor = () => {
    const { data: authors, error, isLoading } = useQuery({
        queryKey: ['viewAuthor'],
        queryFn: viewAuthor
    })


    return { authors, error, isLoading }
}