import { fullBlog } from "../../../lib/interface";
import {client} from '../../../sanity/lib/client' // Update this import path
import { urlFor } from "../../../sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{

      "currentSlug": slug.current, 
      title, 
      content, 
      titleImage
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogTrandingArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return( 
   <div>
      <h1 className="mt-8">
         <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Tranding Blog 
       </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
        {data.title}   
      </span>  
      </h1> 

       <Image src={urlFor(data.titleImage).url()}
         alt="Title Image"  
         width={800}
           height={400}
            priority
           className="rounded-lg mt-8 border" 
             />
              
     <div className="mt-16 prose prose-purple prose-lg dark:prose-invert prose-li:marker:text-primary">
           <PortableText value={data.content} />
     </div>
   </div>   
  )
}
