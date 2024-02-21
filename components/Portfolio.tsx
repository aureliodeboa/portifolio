import { PORTFOLIO } from "../constants"
import Image from "next/image"
import Button from "./Button"


const Portfolio = () => {
  return (
    <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pv-20">Portfolio</div>
      <ul>
        {
          PORTFOLIO.map((portfolio)=>(
              <PortfolioItem
                key={portfolio.title}
                imgURL={portfolio.ImgURL}
                title= {portfolio.title}
                description = {portfolio.description}
              />
          )) 
        }
      </ul>
    </section>
  )
}

type PortfolioItem= {
  title: string;
  imgURL: string;
  description: string;
}

const PortfolioItem = ({title, imgURL, description} : PortfolioItem)=> {
  return(
    <li>
      <div className="relative flex w-full  flex-1 flex-col rounded-2x1 border overflow-hidden group ">
        <Image src={imgURL} alt='map' width={444} height={444}/>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <Button
            type="button"
            title="Read more"
            icon="/more.svg"
            variant="btn_dark_rounded"
          />
          <Button
            type="button"
            title="View code"
            icon="/github.svg"
            variant="btn_white_rounded"
          />


        </div>
      </div>
    </li>
  )
}

export default Portfolio
