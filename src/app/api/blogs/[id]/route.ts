import { NextResponse } from "next/server"
import { blogs } from "../route"

export const GET = async(request: Request, {params}: {params: {id: string}}) => {
    const {id} = params 
    const blog = blogs.find( (b) => b.id === id)

    return NextResponse.json(blog)
}