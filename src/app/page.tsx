import { Aside } from '@/components/Aside'
import { Choose } from '@/components/Choose'
import { Rating } from '@/components/Rating'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <main className="">
      <section className="relative py-12 bg-black overflow-hidden sm:pb-12 lg:pb-12 xl:pb-12 h-full">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-2 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-5xl">
                Dificuldade com trabalhos acadêmicos?
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Nós resolvemos seu problema com os melhores e <br /> mais
                capacitados profissionais!
              </p>

              <Rating />

              <Services />

              <Choose />
            </div>

            <Aside />
          </div>
        </div>
      </section>
    </main>
  )
}
