import Image from "next/image";
import { ContainerGrid } from "./container";

export function HomeSection() {
    return(
        <div>
            <ContainerGrid className={"bg-AirPlane bg-cover bg-center py-28 text-white"}>
                <div className="flex flex-col items-start">
                    <span className="text-lg font-bold">Planeje seu próximo voo.</span>
                    <h1 className="mt-4 mb-8 text-6xl font-bold w-[791px]" >Sonhando com os destinos que desaja conhecer?</h1>
                    <button className="py-3 px-6 bg-white rounded-md text-[#1B0188] font-bold">Compre agora</button>
                    <div className="flex items-center gap-3 mt-14" >
                        <Image
                            src={"/Icon-World.svg"}
                            alt=""
                            width={16}
                            height={16}
                        />
                        <p className="font-inter font-medium" >
                            Pagamento em 5 a 12x com juros, código promocional ou voos com stopover em São Paulo -{'>'}
                        </p>
                    </div>
                </div>
            </ContainerGrid>
        </div>
    )
}