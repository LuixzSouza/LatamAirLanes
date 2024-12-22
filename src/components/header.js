import Image from "next/image";
import { ContainerGrid } from "@/components/container";
import Link from "next/link";

const LinksUtils = [
    {
        Text: "Minhas viagens",
        href: "#",
    },
    {
        Text: "Hotéis, carros e pacotes",
        href: "#",
    },
    {
        Text: "LATAM Wallet",
        href: "#",
    },
    {
        Text: "LATAM Pass",
        href: "#",
    },
    {
        Text: "LATAM travel",
        href: "#",
    },
    {
        Text: "Check-in",
        href: "#",
    },
    {
        Text: "Status Voos",
        href: "#",
    },
    {
        Text: "Destinos",
        href: "#",
    },
    {
        Text: "Restituição de taxas",
        href: "#",
    },
]

export function HeaderSection() {
    return(
        <div className="flex flex-col">
            <ContainerGrid className={"flex items-center justify-between bg-[#fceccc] py-2"} >
                <div className="flex items-center gap-4" > 
                    <div className="flex items-center gap-4" >
                        <Image
                        src={"/Y-IconDanger.svg"}
                        alt="Image"
                        width={16}
                        height={16}
                        /> 
                        <p className="text-[#9E723E] font-light" >
                            <span className="font-bold mr-2">
                                COVID-19:
                            </span>
                            Veja como alterar seu voo cancelado ou utilizar seu Travel Voucher.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                        src={"/Y-IconLink.svg"}
                        alt="Image"
                        width={16}
                        height={16}
                        /> 
                        <p className="text-[#9E723E] font-light">
                            <Link href={"#"} className="font-bold mr-4">
                                Saiba mais
                            </Link>
                            Atualizado: 9 de junho - 13:22h
                        </p>
                    </div>
                </div>
                <Image
                    src={"/Y-IconCLOSE.svg"}
                    alt="Image"
                    width={16}
                    height={16}
                />  
            </ContainerGrid>
            <ContainerGrid className={"bg-[#1B0188]"} >
                    <div className={"flex items-center justify-between text-white py-3 border-b border-[rgba(229,229,229,0.33)]"}>
                        <Image
                            src={"/LogoLatamAir.svg"}
                            alt="Logo"
                            width={105}
                            height={32}
                        />
                        <div className="flex items-center gap-11">
                            <Image
                                src={"/H-IconSearch.svg"}
                                alt="Pesquisar"
                                width={24}
                                height={24}
                            />
                            <div className="flex items-center gap-3">
                                <Image
                                src={"/H-Iconbrazil.svg"}
                                alt="Brazil"
                                width={18}
                                height={18}
                                />
                                <Image
                                src={"/H-IconArrowDown.svg"}
                                alt="Seta para baixo"
                                width={12}
                                height={6}
                                />
                            </div>
                            <div className="flex items-center gap-4" >
                                <Image
                                src={"/H-IconHelp.svg"}
                                alt="Ajuda"
                                width={16}
                                height={16}
                                />
                                <p>
                                    Central de ajuda
                                </p>
                            </div>
                            <div className="flex items-center gap-4" >
                                <Image
                                src={"/H-IconLogin.svg"}
                                alt="Login-Cadastro"
                                width={18}
                                height={18}
                                />
                                <p>
                                    Login ou Cadastro
                                </p>
                            </div>
                        </div>
                    </div>
            </ContainerGrid>
            <ContainerGrid className={"flex items-center justify-between bg-[#1B0188] py-4"}>
                    {LinksUtils.map((item, index) => (
                        <Link href={item.href} key={index} className="text-white font-inter font-medium text-sm">
                            {item.Text}
                        </Link>
                    ))}
            </ContainerGrid>
        </div>
    )
}