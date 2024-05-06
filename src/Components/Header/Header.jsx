import "./Header.scss"
import logoMajo from "../../assets/logo-03.png"
import free from "../../assets/freeway.png"
import delfos from "../../assets/delfos.png"
import julia from "../../assets/julia.gif"
import jumping from "../../assets/jumping.png"
import low from "../../assets/low.png"
import midas from "../../assets/midas.png"
import tosseli from "../../assets/tosseli.png"
import rapel from "../../assets/rapel.png"
import assist from "../../assets/assist.svg"
import universal from "../../assets/universal.png"
import cont from "../../assets/logoCont.gif"
import ola from "../../assets/ola.svg"
import van from "../../assets/van.png"
import leon from "../../assets/leon.png"
import europa from "../../assets/europa.png"
import caracol from "../../assets/logoCaracol.png"
import prestigio from "../../assets/logoPrest.jpg"
import euro from "../../assets/euro.svg"
import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <div >
            <div className="flexLogo">
                <img src={logoMajo} alt="Logo Majo" />
            </div>
            <div>
                <div className="titleFlex">
                    <h1>OPERADORES</h1>
                    <a href="#ctas"><h1>CUENTAS</h1></a>
                    <a href="#capa"><h1>CAPACITACIONES</h1></a>
                    <a href="#fly"><h1>FLYERS</h1></a>
                    <a href="#contacto"><h1>CONTACTO</h1></a>
                </div>

                <div className="gridProveedores">
                    <a href="https://www.freeway.com.ar/" target="_blank"><img src={free} alt="Logo Freeway" /></a>
                    <a href="https://www.delfos.tur.ar/home.xhtml" target="_blank"><img src={delfos} alt="Logo Delfos" /></a>
                    <a href="https://www.ola.com.ar/agencia/material-para-redes" target="_blank"><img src={ola} alt="Logo Ola" /></a>
                    <a href="https://www.juliatours.com.ar/index.php" target="_blank"><img src={julia} alt="Logo JuliaTours" /></a>
                    <a href="https://www.europamundo.com/" target="_blank"><img src={europa} alt="Logo Europamundo" /></a>
                    <a href="https://www.eurovips.com/" target="_blank"><img src={euro} alt="Eurovips" /></a>
                    <a href="http://www.vantravel.com.ar/" target="_blank"><img src={van} alt="Logo Vantravel" /></a>
                    <a href="https://www.tiendaleonmdq.com/" target="_blank"><img src={leon} alt="Logo MTL" /></a>
                    <a href="https://www.jumping.com.ar/" target="_blank"><img src={jumping} alt="Logo Jumping" /></a>
 <a href="https://www.ebooking.com.ar/#/" target="_blank"><img src={tosseli} alt="Logo Tosseli" /></a>
                    <a href="https://www.lowcostturismo.tur.ar/" target="_blank"><img src={low} alt="Logo Lowcost" /></a>
                    <a href="https://www.kingmidas.com.ar/" target="_blank"><img src={midas} alt="Logo KingMidas" /></a>
                    
                                       <a href="https://www.contrastesturismo.tur.ar/"target="_blank"><img src={cont} alt="Logo Contrastes" /></a>
                    <a href="https://rapelturismo.com.ar/#!/-inicio/" target="_blank"><img src={rapel} alt="Logo Rapel" /></a>
                    <a href="https://caracolturismo.tur.ar/"target="_blank"><img src={caracol} alt="Logo Caracol" /></a>
                    <a href="https://www.prestigiosrl.com.ar/iTraffic_Prestigio.Clavis/"target="_blank"><img src={prestigio} alt="" /></a>
                    <a href="https://agencias.assistcard.com/Home" target="_blank"><img src={assist} alt="Logo Assist Card" /></a>
                    <a href="https://www.universal-assistance.com/ar-es/agencias" target="_blank"><img src={universal} alt="Logo Universal" /></a>
                    
                </div>
            </div>
            <div >
                <h2 id="ctas">CUENTAS BANCARIAS</h2>

                <p className="cuentas">SERVICIOS EN EL EXTERIOR: <br />
                    ESTA CUENTA ES PARA TRANSFERENCIAS BANCARIAS <br />

                    BANCO GALICIA  <br />

                    GLOBAL TURISMO SRL  <br />

                    CUIT 33-71479189-9  <br />

                    CTA.CTE. PESOS $ 19624-0 075-5  <br />

                    CBU 0070075720000019624059  <br />

                    ALIAS: GLOBAL.TURISMO.1</p>

                <p className="cuentas">
                    SERVICIOS EN EL EXTERIOR: <br />
                    ESTA CUENTA ES PARA TRANSFERENCIAS Y DEPOSITOS BANCARIOS <br />

                    GLOBAL TURISMO SRL <br />
                    CUIT 33-71479189-9 <br />

                    CTA.CTE.ESP. DOLARES U$ 9750570-1 075-1 <br />
                    CBU 0070075731009750570115 <br />

                    ALIAS: VIAJES.2 <br />
                </p>
            </div>

            <h2 id="fly">FLYERS</h2>

            <div>
                <div>
                    <div className="logoCap" >
                        <img src={ola} alt="" />
                    </div>

                    <div className="capFlex">
                        <a download="ENCANTOS DE LA TOSCANA CON ENCANTOS DEL SUR" href="../ola/ENCANTOS DE LA TOSCANA CON ENCANTOS DEL SUR.jpg" >ENCANTOS DE LA TOSCANA CON ENCANTOS DEL SUR</a>
                        <a download="ENCANTOS DE LA TOSCANA CON ROMA" href="../ola/ENCANTOS DE LA TOSCANA CON ROMA.jpg" >ENCANTOS DE LA TOSCANA CON ROMA</a>
                        <a download="ENCANTOS DEL SUR DE ITALIA, COSTA AMALFITANA Y ROMA" href="../ola/ENCANTOS DEL SUR DE ITALIA, COSTA AMALFITANA Y ROMA.jpg" >ENCANTOS DEL SUR DE ITALIA, COSTA AMALFITANA Y ROMA</a>
                        <a download="ESPAÑA, ITALIA Y COSTA AZUL" href="../ola/ESPAÑA, ITALIA Y COSTA AZUL.jpg" >ESPAÑA, ITALIA Y COSTA AZUL</a>
                        <a download="EUROPA TURISTA" href="../ola/EUROPA TURISTA.jpg" >EUROPA TURISTA</a>
                        <a download="ITALIA DE NORTE A SUR" href="../ola/ITALIA DE NORTE A SUR.jpg" >ITALIA DE NORTE A SUR</a>
                        <a download="LO MEJOR DE EUROPA" href="../ola/LO MEJOR DE EUROPA.jpg" >LO MEJOR DE EUROPA</a>
                        <a download="MADRID Y NORTE EUROPEO" href="../ola/MADRID Y NORTE EUROPEO.jpg" >MADRID Y NORTE EUROPEO</a>
                        <a download="MADRID, CASTILLA, GALICIA, PORTUGAL Y ANDALUCIA" href="../ola/MADRID, CASTILLA, GALICIA, PORTUGAL Y ANDALUCIA.jpg" >MADRID, CASTILLA, GALICIA, PORTUGAL Y ANDALUCIA</a>
                        <a download="MADRID, NORTE DE ESPAÑA Y LUSITANIA" href="../ola/MADRID, NORTE DE ESPAÑA Y LUSITANIA.jpg" >MADRID, NORTE DE ESPAÑA Y LUSITANIA</a>
                        <a download="TIERRAS IBERICAS" href="../ola/TIERRAS IBERICAS.jpg" >TIERRAS IBERICAS</a>
                        <a download="TUTTA ITALIA CON SORRENTO" href="../ola/TUTTA ITALIA CON SORRENTO.jpg" >TUTTA ITALIA CON SORRENTO</a>
                    </div>
                    <div className="logoCap" >
                        <img src={midas} alt="" />
                    </div>
                    <div className="capFlex">
                        <a download="CHINA Y HONG KONG" href="../mid/CHINA Y HONG KONG.jpg" >CHINA Y HONG KONG</a>
                        <a download="EGIPTO Y JORDANIA" href="../mid/EGIPTO Y JORDANIA.jpg" >EGIPTO Y JORDANIA</a>
                        <a download="EGIPTO, TURQUIA Y GRECIAA" href="../mid/EGIPTO, TURQUIA Y GRECIAA.jpg" >EGIPTO, TURQUIA Y GRECIAA</a>
                        <a download="GRECIA Y TURQUIA" href="../mid/GRECIA Y TURQUIA.jpg" >GRECIA Y TURQUIA</a>
                        <a download="ISLAS GRIEGAS" href="../mid/ISLAS GRIEGAS.jpg" >ISLAS GRIEGAS</a>
                        <a download="JAPON Y COREA" href="../mid/JAPON Y COREA.jpg" >JAPON Y COREA</a>
                        <a download="KENIA Y TANZANIA" href="../mid/KENIA Y TANZANIA.jpg" >KENIA Y TANZANIA</a>
                        <a download="MALASIA, SINGAPUR Y BALI" href="../mid/MALASIA, SINGAPUR Y BALI.jpg" >MALASIA, SINGAPUR Y BALI</a>
                        <a download="SUR DE ESPAÑA Y MARRUECOS" href="../mid/SUR DE ESPAÑA Y MARRUECOS.jpg" >SUR DE ESPAÑA Y MARRUECOS</a>
                        <a download="TURQUIA Y DUBAI" href="../mid/TURQUIA Y DUBAI.jpg" >TURQUIA Y DUBAI</a>
                    </div>

                    <div className="logoCap" >
                        <img src={tosseli} alt="" />
                    </div>
                    <div className="capFlex">
                        <a download="CAPITALES BRITANICAS" href="../tos/CAPITALES BRITANICAS.png" >CAPITALES BRITANICAS</a>
                        <a download="COSTA OESTE Y MIAMI" href="../tos/COSTA OESTE Y MIAMI.png" >COSTA OESTE Y MIAMI</a>
                        <a download="COSTA RICA" href="../tos/COSTA RICA.png" >COSTA RICA</a>
                        <a download="CUBA ENTRE AMIGOS" href="../tos/CUBA ENTRE AMIGOS.png" >CUBA ENTRE AMIGOS</a>
                        <a download="DOMINICANA ENTRE AMIGOS" href="../tos/DOMINICANA ENTRE AMIGOS.png" >DOMINICANA ENTRE AMIGOS</a>
                        <a download="JOYAS COLOMBIANAS" href="../tos/JOYAS COLOMBIANAS.png" >JOYAS COLOMBIANAS</a>
                        <a download="PERLAS AUSTRALES" href="../tos/PERLAS AUSTRALES.png" >PERLAS AUSTRALES</a>
                        <a download="PERU EXTRAORDINARIO" href="../tos/PERU EXTRAORDINARIO.png" >PERU EXTRAORDINARIO</a>
                    </div>
                    <div className="logoCap" >
                        <img src={rapel} alt="" />
                    </div>
                    <div className="capFlex">
                        <a download="CATAMARCA INEDITA" href="../rap/CATAMARCA INEDITA.jpg" >CATAMARCA INEDITA</a>
                        <a download="ESCAPADA A IGUAZU" href="../rap/ESCAPADA A IGUAZU.jpg" >ESCAPADA A IGUAZU</a>
                        <a download="ESCAPADA LLAO LLAO" href="../rap/ESCAPADA LLAO LLAO.jpg" >ESCAPADA LLAO LLAO</a>
                        <a download="ESQUEL TULIPANES" href="../rap/ESQUEL TULIPANES.png" >ESQUEL TULIPANES</a>
                        <a download="ESTEROS" href="../rap/ESTEROS.jpg" >ESTEROS</a>
                        <a download="NORTE ARGENTINO" href="../rap/NORTE ARGENTINO.jpg" >NORTE ARGENTINO</a>
                        <a download="SAN JUAN CON ENCANTO" href="../rap/SAN JUAN CON ENCANTO.jpg" >SAN JUAN CON ENCANTO</a>
                        <a download="USHUAIA" href="../rap/USHUAIA.jpg" >USHUAIA</a>
                    </div>
                    <div className="logoCap" >
                        <img src={free} alt="" />
                    </div>
                    <div className="capFlex">
                        <a download="DISNEY" href="../free/DISNEY.jpg" >DISNEY</a>
                        <a download="PLAYA DEL CARMEN 15 WAY" href="../free/PLAYA DEL CARMEN 15 WAY.jpg" >PLAYA DEL CARMEN 15 WAY</a>
                        <a download="SENDERO EUROPEO" href="../free/SENDERO EUROPEO.jpg" >SENDERO EUROPEO</a>
                        <a download="SINGLE FEST CUBA" href="../free/SINGLE FEST CUBA.jpg" >SINGLE FEST CUBA</a>
                        <a download="TURKIA Y GRECIA" href="../free/TURKIA Y GRECIA.jpg" >TURKIA Y GRECIA</a>
                       
                    </div>
                </div>
            </div>

            <h2 id="capa" >CAPACITACIONES</h2>
            <div className="flexCap">
                <a download="Capacitacion Uganda" href="../uganda.pdf" className="btnCap">UGANDA</a>
                <a download="Capacitacion Curacao" href="../Curacao.pdf" className="btnCap">CURACAO</a>
                <a download="Capacitacion Egipto y Jordania" href="../egipto.pdf" className="btnCap">EGIPTO Y JORDANIA</a>
                <a download="Capacitacion Bali" href="../bali.pdf" className="btnCap">BALI</a>
                <a download="Capacitacion Kenia" href="../kenia.pdf" className="btnCap">KENIA</a>
            </div>
            <h2 id="contacto" > CONTACTO</h2>
            <div className="contactFlex">
                <a href="https://api.whatsapp.com/send?phone=5493416207110" target="blank">WPP MAJO</a>
                <a href="https://api.whatsapp.com/send?phone=5493416836459" target="blank">WPP NATI</a>
                <a href="https://api.whatsapp.com/send?phone=5493406421065" target="blank">WPP MARIAN</a>
            </div>
            <div className="redesFlex">
                <a href="https://www.instagram.com/majopurinanviajes/"target="blank">@MAJOPURINANVIAJES</a>
                <a href="http://www.majopurinan.tur.ar/"target="blank">WWW.MAJOPURINAN.TUR.AR</a>
            </div>

        </div>

    )
}

export default Header