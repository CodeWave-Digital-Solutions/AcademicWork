import { Aside } from '@/components/Aside'
import { Rating } from '@/components/Rating'

export default function Home() {
  return (
    <main className="">
      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24 h-screen">
        <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Dificuldade com trabalhos acadêmicos?
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Aqui no{' '}
                <span className="font-bold uppercase text-white">
                  site do nego
                </span>{' '}
                resolvemos seu problema, com os melhores e mais capacitados
                profissionais.
              </p>

              <Rating />
            </div>

            <Aside />
          </div>
        </div>
      </section>
    </main>
  )
}
