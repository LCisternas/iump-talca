import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Dialog"
import logoSello from "@/assets/logo-sello.png"
import logo from "@/assets/logo.png"
import logoBlanco from "@/assets/logo-blanco.png"
import fondoHome from "@/assets/fondo-home.webp"
import horarios from "@/assets/horarios.webp"
import Image from "next/image";
import { AlignJustify } from "lucide-react";


export default function Home() {
  return (
    <main className="">

      <section className='p-0 flex flex-col items-center relative'>
        <Image
          src={fondoHome}
          width={371}
          height={371}
          alt='fondo'
          className='w-full h-full min-h-screen object-cover brightness-50'
        />
        <nav className="flex justify-end absolute top-0 w-full py-3 px-6 min-h-20">
          <Image src={logoBlanco} width={35} height={35} alt="logo-talca" className="absolute left-1/2 -translate-x-1/2 h-[50px] w-[30px] md:h-[100px] md:w-[60px]" />
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <AlignJustify color="white" className="font-extralight h-[35px] w-[35px] md:h-[100px] md:w-[60px]" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex flex-col items-center space-y-4">
                    <Image src={logo} width={40} height={40} alt="logo-talca-menu" />
                    <h1>
                      Iglesia Unida Metodista Pentecostal
                      <br />
                      Primera de Talca
                    </h1>
                    {/* <h1>
                      Primera de Talca
                    </h1> */}
                  </div>
                </SheetTitle>
                <SheetDescription>
                  Proximamente futuras secciones
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </nav>

        <section className="absolute top-1/2 left-6 lg:left-20 -translate-y-1/2">
          <h1 className="text-white text-4xl md:text-6xl font-medium">
            Bienvenido a
            <br />
            IUMP Primera de Talca
          </h1>
        </section>

      </section>

      <section className="px-6 lg:px-80 py-8">
        <h3 className="text-2xl font-light leading-9">
          La Iglesia Unida Metodista Pentecostal esta dedicada a cumplir con la gran comision encomendada por nuestro Señor Jesucristo llevar el evangelio a toda criatura.
        </h3>
        <h3 className="underline font-medium text-2xl text-center my-20">¿En que creemos?</h3>
        <div className="pb-20 flex flex-col space-y-6 lg:space-y-10">

          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium">LA SANTÍSIMA TRINIDAD</h3>
            <p className="text-base font-light">
              Hay un solo Dios, vivo y verdadero, eterno, de infinito poder, sabiduría y bondad, creador y conservador de todas las cosas, así visibles como invisibles. Y en la unidad de ésta, hay tres personas y cada una de ellas es Dios y manifestación plena de la Naturaleza Divina: El Padre, El Hijo y El Espíritu Santo.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium">EL HIJO DE DIOS QUE FUE HECHO VERDADERO HOMBRE</h3>
            <p className="text-base font-light">
              El Hijo, verdadero y eterno Dios, de una misma substancia con el Padre, tomó la naturaleza humana en el seno de la bienaventurada virgen, de manera que dos naturalezas, a saber: La Divina y la Humana, se unieron en una sola persona, para jamás ser separadas, de lo que resulta un solo Cristo, verdadero Dios y verdadero Hombre, que realmente padeció, fue crucificado, muerto y al tercer día resucitó para reconciliarnos con su Padre, no solamente por la culpa original, sino también por los pecados actuales de todos los hombres.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium">EL ESPÍRITU SANTO</h3>
            <p className="text-base font-light">
              El Espíritu Santo, que procede del Padre y del Hijo, es una misma substancia, majestad y gloria con el Padre y con el Hijo, siendo un verdadero y eterno Dios. En el ejercicio de su divina majestad bautiza y obra con poder en los creyentes, sellándolos según la promesa para el día de la redención.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium">LA SUFICIENCIA DE LAS SANTAS ESCRITURAS PARA LA SALVACIÓN</h3>
            <p className="text-base font-light">
              La Santa Biblia contiene todas las cosas necesarias para la salvación, de modo que no debe exigirse que hombre alguno reciba como artículo de fe, ni considere como requisito necesario para la salvación, nada que en ellas no se lea, ni pueda por ellas probarse.
            </p>
          </div>

        </div>
      </section>

      <section className='p-0 flex flex-col items-center relative h-[500px]'>
        <Image
          src={horarios}
          width={371}
          height={371}
          alt='fondo'
          className='w-full h-full object-cover brightness-50'
        />

        <section className="absolute top-[40%] right-6 lg:right-1/2 lg:translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-4xl font-medium text-center">
            ¡Unetenos en {""}
            <br className="lg:hidden" />
            adoración!
            <br />
          </h1>
        </section>
        <section className="absolute top-[70%] left-6 -translate-y-3/4 lg:left-[700px] lg:-translate-x-1/2">
          <div className="flex flex-col space-y-1">
            <p className="text-white font-extralight lg:text-xl lg:font-normal">Martes: 18:00 horas</p>
            <p className="text-white font-extralight lg:text-xl lg:font-normal">Jueves: 18:00 horas</p>
            <p className="text-white font-extralight lg:text-xl lg:font-normal">Domingo: 10:30 horas - Escuela dominical</p>
            <p className="text-white font-extralight lg:text-xl lg:font-normal">Domingo: 18:00 horas - Servicio principal</p>
          </div>
        </section>

      </section>

      {/* <section className='p-0 flex flex-col items-center relative h-[500px]'>
        <Image
          src={horarios}
          width={371}
          height={371}
          alt='fondo'
          className='w-full h-full object-cover brightness-50 fill-[#FEF6CD]'
        />

      </section> */}

      <footer className="flex flex-col items-center py-10 space-y-2 bg-[#FEF6CD]">
        <Image
          src={logoSello}
          width={200}
          height={200}
          alt='fondo'
        />
        <div className="flex flex-col space-y-1 items-center">
          <h3>Talca</h3>
          <h3>8 oriente #412</h3>
        </div>
        <div className="flex space-x-2">
          <a href="https://www.instagram.com/iumptalca/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="https://www.youtube.com/@iumptalca581" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
          </a>
        </div>
      </footer>

    </main>
  );
}
