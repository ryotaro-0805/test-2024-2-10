// import { NextApiRequest, NextApiResponse } from "next";

// export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
//     return res.status(200).json({ name: 'ryoprojects' });
// }


// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }


export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {}