import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import img from '../images/im3.jpeg'
import Image  from 'gatsby-image'

const getImages = graphql`
{
 fixed: file(relativePath: {eq: "img1.jpeg"}) {
   childImageSharp {
     fixed(grayscale: true, width: 200) {
       ...GatsbyImageSharpFixed
     }
   }
 }
 fluid: file(relativePath: {eq: "img2.jpeg"}) {
   childImageSharp {
     fluid {
      ...GatsbyImageSharpFluid_tracedSVG
     }
   }
 }
}
`

const Images = () => {
 const data = useStaticQuery(getImages)
 // console.log(data)
 return (
  <section className="images">

   <article className="single-image">
   <h3>Basic Image</h3>
   <img src={img} width="100%"/>
   </article>

   <article className="single-image">
   <h3>Fixed Image/blur</h3>
   <Image fixed={data.fixed.childImageSharp.fixed}/>
   </article>

   <article className="single-image">
   <h3>Fluid Image/svg</h3>
   <Image fluid={data.fluid.childImageSharp.fluid} />

    <div className="small">
     <Image fluid={data.fluid.childImageSharp.fluid}/>
    </div>
   </article>

  </section>
 )
}

export default Images
