import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { checkPrime } from "crypto";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import React from "react";
export default function Home() {
  const Categories = [
    {
      name: 'Hospitalité',
      icon: ArrowDownToLine,
      description: 'Découvrez notre sélection de produits',
    },
    {
      name: 'Qualité',
      icon: CheckCircle,
      description: 'La qualité est notre priorité  ',
    },
    {
      name: 'Pour tout le monde',
      icon: Leaf,
      description: 'Des produits pour tout le monde',
    },
  ];

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
    <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {Categories.map((categorie) => (
              <div
                key={categorie.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<categorie.icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {categorie.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {categorie.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}