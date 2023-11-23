import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { checkPrime } from "crypto";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import React from "react";

export default function Home() {
  const Catégories=[
    {
      name:'Hospitalité',
      icon:ArrowDownToLine,
      description:'Découvrez notre sélection de produits'
    },
    {
      name:'Qualité',
      icon:CheckCircle,
      description:'La qualité est notre priorité  ',
    },
    {
      name:'Pour tout le monde',
      icon:Leaf,
      description:"des produits pour tout le monde"
    },
   
  ]
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl  font-bolt tacking-light text-gray-900 sm:text-6xl">Découvrez le Sénégal  </h1>
        <span className="text-xl text-blue-600">Le pays de la Teranga </span>
                <span className="text-xl text-blue-600">un pays de nature et de culture  </span>
<p className="mt-6 text-lg max-w-pross text-muted-foreground">
  Le Sénégal est un pays d'Afrique de l'Ouest. Il est bordé par l'océan Atlantique à l'ouest, la Mauritanie au nord et à l'est, le Mali à l'est et la Guinée et la Guinée-Bissau au sud. La Gambie forme une quasi-enclave dans le Sénégal, pénétrant à plus de 300 km à l'intérieur des terres. Sa capitale est Dakar
  </p>
  <div className="flex flex-col sm:flex-row gap-4 mt-6">
<button className={
  buttonVariants()
} > Tout nos Produits </button>
<Button variant='ghost'>Nos Catégories </Button>
  </div>
      </div>
      {/*TODO:list products*/}
    </MaxWidthWrapper>
   <section className="bg-gray-100 py-20"
   >
     <MaxWidthWrapper className="py-20">
  <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
    {Catégories.map((catégorie) => (
      <div
        key={catégorie.name}
        className="text-center md:flex md:items-center md:text-left lg:block lg:text-center"
      >
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mx-auto lg:mx-0">
          {React.createElement(catégorie.icon, { className: "w-12 h-12 text-blue-600" })}
        </div>
        <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
          <h3 className="text-xl font-semibold text-gray-900">{catégorie.name}</h3>
          <p className="mt-4 text-base text-gray-500">{catégorie.description}</p>
        </div>
      </div>
    ))}
  </div>
</MaxWidthWrapper>;
   </section>
    </>
  )
}
