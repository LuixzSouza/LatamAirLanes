import Image from "next/image"

const { ContainerGrid } = require("./container")

const itemsmore = [
    {
        txt: "Reserve um vôo"
    },
    {
        txt: "Pacotes, hoteis ou carros"
    },
    {
        txt: "Check-in"
    },
    {
        txt: "Minhas viagens"
    },
    {
        txt: "Status de vôo"
    },
]

export function FiltersSection() {
    return(
        <ContainerGrid>
            <div className="relative -top-16 shadow-md" >
                <div className="flex items-center bg-[#EFEDF7] rounded-t-md" >
                    {itemsmore.map((item, index) => (
                        <div className="group py-5 px-16" key={index} >
                            <p className="text-[#8B83AD] font-bold text-base]" >
                                {item.txt}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="py-16 px-28" >
                    <div className="flex items-center gap-8 mb-6" >
                        <div className="flex items-center" >
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-30"/>
                            <label for="default-radio-1" class="ms-2 text-base font-bold text-[#897F9E] ">Ida e volta</label>
                        </div>
                        <div className="flex items-center"  >
                            <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 "/>
                            <label for="default-radio-2" class="ms-2 text-base font-bold text-[#897F9E] ">Somente ida</label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 mb-12" >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-28 p-4 border border-[#DAD5E6] rounded-md">
                                <div className="" >
                                    <h5 className="text-[#403C49] font-bold mb-1" >Origem</h5>
                                    <p className="text-[#897F9E] font-inter" >Cidade ou destino</p>
                                </div>
                                <Image
                                    src={"/ArrowDowRed.svg"}
                                    alt="Seta para baixo"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <Image
                                src={"/IconRotate.svg"}
                                alt="Icone Rotation"
                                width={18}
                                height={18}
                                className="mx-4"
                            />
                            <div className="flex items-center gap-28 p-4 border border-[#DAD5E6] rounded-md">
                                <div className="" >
                                    <h5 className="text-[#403C49] font-bold mb-1" >Destino</h5>
                                    <p className="text-[#897F9E] font-inter" >Cidade ou destino</p>
                                </div>
                                <Image
                                    src={"/ArrowDowRed.svg"}
                                    alt="Seta para baixo"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-8" >
                            <div className="flex items-center gap-2 p-4 border border-[#DAD5E6] rounded-md">
                                <div className="" >
                                    <h5 className="text-[#403C49] font-bold mb-1" >Ida e Volta</h5>
                                    <p className="text-[#897F9E] font-inter" >13/07/2021 - 14...</p>
                                </div>
                                <Image
                                    src={"/ArrowDowRed.svg"}
                                    alt="Seta para baixo"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <div className="flex items-center gap-2 p-4 border border-[#DAD5E6] rounded-md">
                                <div className="" >
                                    <h5 className="text-[#403C49] font-bold mb-1" >Passageiros</h5>
                                    <p className="text-[#897F9E] font-inter" >2 adultos, 1 cria...</p>
                                </div>
                                <Image
                                    src={"/ArrowDowRed.svg"}
                                    alt="Seta para baixo"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between" >
                        <div className="flex items-center gap-3" >
                            <Image
                                src={"/IconAirPlaneRed.svg"}
                                alt="Avião"
                                width={24}
                                height={24}
                            />
                            <p className="font-inter font-medium text-[#1B0188]" >Stopver em São Paulo</p>
                        </div>
                        <div className="flex items-center gap-3" >
                            <div className="w-8 h-4 bg-red-600/20 p-1 rounded-full flex items-center justify-end" >
                                <div className="w-3 h-3 bg-red-600 rounded-full" ></div>
                            </div>
                            <p className="font-inter font-medium text-red-600" >Utilizar meus Latam Pontos</p>
                        </div>
                        <button className="flex items-center gap-3 bg-red-600 px-28 py-4 rounded-md" >
                            <Image
                                src={"/IconWorldAirPlane.svg"}
                                alt="Volta no mundo"
                                width={22}
                                height={17}
                            />
                            <p className="text-white font-bold text-lg" >Procure o seu vôo</p>
                        </button>
                    </div>
                </div>
            </div>
        </ContainerGrid>
    )
}