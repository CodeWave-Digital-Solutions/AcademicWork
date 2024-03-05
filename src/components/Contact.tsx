export function Contact() {
  const number = '5588988595172'

  const message =
    'Olá, gostaria de fazer um orçamento de trabalho acadêmico! 📚📝'

  const WhatsApp = `https://api.whatsapp.com/send?phone=${number}&text=${message}`

  return (
    <div>
      <h2 className="text-2xl mt-7 font-normal text-white pb-5 sm:text-2xl lg:text-2xl xl:text-2xl">
        Entre em contato conosco e faça o orçamento!
      </h2>

      <div>
        <button className="border border-green-400 rounded-md p-3">
          <a
            href={WhatsApp}
            target="_blank"
            rel="noreferrer"
            className="text-green-400"
          >
            <span className="text-2xl">📞 </span> Fale conosco pelo WhatsApp
          </a>
        </button>
      </div>
    </div>
  )
}
